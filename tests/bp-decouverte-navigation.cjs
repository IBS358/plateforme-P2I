const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const output = path.resolve('test-results/p2i-navigation');
fs.mkdirSync(output, { recursive: true });
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  const requests = [];
  page.on('pageerror', e => errors.push(e.stack || e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: '+m.text()); });
  page.on('requestfailed', req => requests.push(req.url()+' '+req.failure()?.errorText));
  const snapshot = async label => {
    await page.screenshot({ path: path.join(output, label+'.png'), fullPage: true, timeout: 20000 }).catch(()=>{});
    fs.writeFileSync(path.join(output, label+'.html'), await page.content().catch(()=>''), 'utf8');
  };
  try {
    await page.goto('file://' + path.resolve('business-plan-decouverte.html'), { waitUntil:'domcontentloaded', timeout:90000 });
    await snapshot('01-ouverture');
    const selector = page.locator('#up-choice');
    await selector.waitFor({ timeout:30000 });
    const options = await selector.locator('option').evaluateAll(nodes => nodes.map(n => ({ value:n.value, text:n.textContent.trim() })));
    fs.writeFileSync(path.join(output,'options.json'), JSON.stringify(options,null,2));
    const mobilier = options.find(x => /mobilier métallique professionnel/i.test(x.text));
    const outillage = options.find(x => /outillage manuel/i.test(x.text));
    if (!mobilier) throw new Error('Mobilier absent de la version actuellement présente sur GitHub. Le Lot 43 complet doit être intégré avant validation.');
    if (!outillage) throw new Error('Outillage manuel absent.');
    if (options.filter(x=>x.value).length < 96) throw new Error('Moins de 96 UP dans le sélecteur.');
    const check = async (name, label) => {
      await snapshot(label);
      const body = await page.locator('body').innerText();
      if (!body.toLowerCase().includes(name.toLowerCase())) throw new Error('BP non visible: '+name);
      if (errors.length) throw new Error('Erreur JavaScript: '+errors.join(' | '));
      if (!(await page.locator('#app').isVisible())) throw new Error('Contenu BP masqué.');
    };
    await selector.selectOption(mobilier.value);
    await page.waitForTimeout(1500);
    await check('mobilier métallique','02-mobilier');
    await page.reload({ waitUntil:'domcontentloaded',timeout:90000 });
    await page.waitForTimeout(1500);
    await check('mobilier métallique','03-actualisation');
    await page.locator('#up-choice').selectOption(outillage.value);
    await page.waitForTimeout(1500);
    await check('Outillage manuel','04-outillage');
    await page.locator('#up-choice').selectOption(mobilier.value);
    await page.waitForTimeout(1500);
    await check('mobilier métallique','05-retour-mobilier');
    console.log('PASS : 96 UP, mobilier, actualisation, outillage, retour mobilier.');
  } catch(e) {
    await snapshot('ERREUR');
    throw e;
  } finally {
    fs.writeFileSync(path.join(output,'erreurs.json'), JSON.stringify({ errors, requests },null,2));
    await browser.close();
  }
})().catch(e=>{ console.error(e); process.exit(1); });
