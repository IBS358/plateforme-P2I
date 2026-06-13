// business-plan.js - Gestion de la génération du BP

class BusinessPlanGenerator {
    constructor(userData) {
        this.userData = userData || {
            nom: "Jean Kouassi",
            email: "jean.kouassi@example.com",
            projet: "Usine d'aliments pour bétail",
            lieu: "Zone Industrielle de Yopougon, Abidjan"
        };
        
        this.companyNames = [
            "AgroFeed CI", 
            "NourriBétail CI", 
            "GranuPro Animal", 
            "Aliments Bétail Pro"
        ];
    }
    
    generateHTML() {
        const randomName = this.companyNames[Math.floor(Math.random() * this.companyNames.length)];
        const today = new Date().toLocaleDateString('fr-FR', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        
        return `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Business Plan - P2I</title>
            <link rel="stylesheet" href="../css/business-plan.css">
            <style>
                body { background-color: #f5f5f5; padding: 20px; }
            </style>
        </head>
        <body>
            <div class="bp-container">
                <!-- VOTRE CODE HTML COMPLET ICI -->
                <!-- (Utilisez exactement le HTML que je vous ai fourni précédemment) -->
                <!-- Assurez-vous d'utiliser les classes CSS définies dans business-plan.css -->
            </div>
            
            <script>
                // Fonction pour télécharger le PDF
                function downloadPDF() {
                    window.print();
                }
                
                // Auto-remplissage des données utilisateur
                document.addEventListener('DOMContentLoaded', function() {
                    // Remplir les données utilisateur
                    document.querySelectorAll('[data-user="nom"]').forEach(el => {
                        el.textContent = "${this.userData.nom}";
                    });
                    
                    document.querySelectorAll('[data-user="projet"]').forEach(el => {
                        el.textContent = "${this.userData.projet}";
                    });
                    
                    document.querySelectorAll('[data-user="lieu"]').forEach(el => {
                        el.textContent = "${this.userData.lieu}";
                    });
                    
                    document.querySelectorAll('[data-date="today"]').forEach(el => {
                        el.textContent = "${today}";
                    });
                    
                    // Nom d'entreprise aléatoire
                    document.querySelectorAll('[data-company="random"]').forEach(el => {
                        el.textContent = "${randomName}";
                    });
                });
            </script>
        </body>
        </html>
        `;
    }
    
    async generatePDF() {
        try {
            // Si vous utilisez jsPDF
            if (typeof jspdf !== 'undefined') {
                const doc = new jspdf.jsPDF();
                
                // Générer le contenu HTML
                const htmlContent = this.generateHTML();
                
                // Convertir en PDF
                await doc.html(htmlContent, {
                    callback: function(doc) {
                        doc.save('business-plan-p2i.pdf');
                    },
                    x: 10,
                    y: 10,
                    width: 190,
                    windowWidth: 800
                });
                
                return true;
            } else {
                // Fallback: Ouvrir pour impression
                const htmlContent = this.generateHTML();
                const newWindow = window.open();
                newWindow.document.write(htmlContent);
                newWindow.document.close();
                newWindow.focus();
                
                setTimeout(() => {
                    newWindow.print();
                }, 500);
                
                return true;
            }
        } catch (error) {
            console.error('Erreur génération PDF:', error);
            return false;
        }
    }
}

// Fonction à appeler depuis votre dashboard
function generateBusinessPlan(userData = null) {
    const generator = new BusinessPlanGenerator(userData);
    
    // Option 1: Afficher dans une nouvelle fenêtre
    const htmlContent = generator.generateHTML();
    const newWindow = window.open('', '_blank');
    newWindow.document.write(htmlContent);
    newWindow.document.close();
    
    // Option 2: Télécharger PDF directement
    // generator.generatePDF();
    
    // Option 3: Sauvegarder dans Supabase
    // saveToSupabase(htmlContent);
}

// Exporter pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BusinessPlanGenerator, generateBusinessPlan };
}
