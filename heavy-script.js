console.log('Script lourd chargé');

// Simulation de calculs lourds qui bloquent le thread principal
for (let i = 0; i < 100000000; i++) {}

// Ajout de nombreux écouteurs d'événements inutiles
document.addEventListener('mousemove', () => {
    console.log('Détection de mouvement inutile');
});
