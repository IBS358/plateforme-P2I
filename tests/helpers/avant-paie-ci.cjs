// Corpus historique figé : ces suites vérifient la rétrocompatibilité des
// conventions antérieures. La paie active et le redimensionnement sont testés
// séparément dans check-p2i-paie-ci.cjs et qa-paie-ci.cjs.
module.exports=data=>{const d=JSON.parse(JSON.stringify(data));for(const x of require('../../data/archives/p2i-avant-paie-ci-2026-10-29.json').scenarios)d.unites[x.up_id].variantes[x.configuration]=x.variant;return d;};
