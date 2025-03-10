console.log('Script moyennement optimisé chargé');

// Ajout d'un léger traitement JS sans bloquer le thread principal
setTimeout(() => {
    console.log('Script exécuté après un délai');
}, 2000);
