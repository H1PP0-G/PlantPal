document.addEventListener('DOMContentLoaded', () => {
    // --- STATE ---
    // The single source of truth for our application's data
    const state = {
        plants: [
            { id: 1, name: "Jade Plant", species: "Crassula ovata", image: "jade-plant.jpg", lastWatered: "2025-09-25T10:00:00Z", wateringInterval: 7, sunlightHoursToday: 6, minSunlightHours: 5 },
            { id: 2, name: "Snake Plant", species: "Dracaena trifasciata", image: "snake-plant.jpg", lastWatered: "2025-09-20T10:00:00Z", wateringInterval: 14, sunlightHoursToday: 3, minSunlightHours: 4 }
        ]
    };

    // --- SELECTORS ---
    // Cache all the DOM elements we need to interact with
    const selectors = {
        plantGrid: document.getElementById('plant-grid'),
        addNewLink: document.getElementById('add-new-link'),
        modal: document.getElementById('add-plant-modal'),
        cancelBtn: document.getElementById('cancel-add-plant-btn'),
        addPlantForm: document.getElementById('add-plant-form')
    };

    // --- TEMPLATES ---
    // A function to generate the HTML for a single plant card based on its data
    const createPlantCardHTML = (plant) => {
        // --- Watering Logic ---
        const lastWateredDate = new Date(plant.lastWatered);
        const today = new Date();
        const daysSinceWatered = (today - lastWateredDate) / (1000 * 60 * 60 * 24);

        let waterStatusClass = 'status-good';
        let waterStatusText = 'Good';
        if (daysSinceWatered > plant.wateringInterval + 2) {
            waterStatusClass = 'status-urgent';
            waterStatusText = 'Urgent!';
        } else if (daysSinceWatered >= plant.wateringInterval) {
            waterStatusClass = 'status-attention';
            waterStatusText = 'Needs Water';
        }

        // --- Sunlight Logic ---
        let sunlightStatusClass = 'status-good';
        let sunlightStatusText = 'Good';
        if (plant.sunlightHoursToday < plant.minSunlightHours) {
            sunlightStatusClass = 'status-attention';
            sunlightStatusText = 'Needs Sun';
        }

        return `
            <div class="plant-card" data-plant-id="${plant.id}">
                <div class="plant-image">
                    <img src="../public/${plant.image}" alt="${plant.name}">
                </div>
                <div class="plant-details">
                    <div class="plant-header">
                        <h2>${plant.name}</h2>
                        <p>${plant.species}</p>
                    </div>
                    <div class="plant-status">
                        <div class="status-item">
                            <span>💧 Water Status:</span>
                            <span class="status-indicator ${waterStatusClass}">${waterStatusText}</span>
                        </div>
                        <div class="status-item">
                            <span>☀️ Sunlight Status:</span>
                            <span class="status-indicator ${sunlightStatusClass}">${sunlightStatusText}</span>
                        </div>
                    </div>
                    <div class="plant-info">
                        <p>Last Watered: <strong>${lastWateredDate.toLocaleDateString()}</strong></p>
                        <p>Today's Sunlight: <strong>${plant.sunlightHoursToday} hours</strong></p>
                    </div>
                    <div class="plant-actions">
                        <button class="log-water-btn">Log Watering</button>
                        <button class="add-sunlight-btn">Add 1hr Sunlight</button>
                    </div>
                </div>
            </div>
        `;
    };

    // --- RENDER FUNCTION ---
    // Renders all plants from the state into the DOM
    const render = () => {
        selectors.plantGrid.innerHTML = '';
        state.plants.forEach(plant => {
            const cardHTML = createPlantCardHTML(plant);
            selectors.plantGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    };

    // --- EVENT HANDLERS ---
    const handleLogWatering = (plantId) => {
        const plant = state.plants.find(p => p.id === plantId);
        if (plant) {
            plant.lastWatered = new Date().toISOString();
            render();
        }
    };
    
    const handleAddSunlight = (plantId) => {
        const plant = state.plants.find(p => p.id === plantId);
        if (plant) {
            plant.sunlightHoursToday += 1;
            render();
        }
    };

    const handleAddNewPlant = (event) => {
        event.preventDefault();
        const newPlant = {
            id: Date.now(),
            name: document.getElementById('plant-name-input').value,
            species: document.getElementById('plant-species-input').value,
            image: document.getElementById('plant-image-select').value,
            lastWatered: new Date().toISOString(),
            wateringInterval: 7,
            sunlightHoursToday: 0,
            minSunlightHours: parseInt(document.getElementById('plant-sunlight-input').value)
        };
        state.plants.push(newPlant);
        render();
        toggleModal(false);
        selectors.addPlantForm.reset();
    };

    const toggleModal = (show) => {
        if (show) {
            selectors.modal.classList.remove('hidden');
        } else {
            selectors.modal.classList.add('hidden');
        }
    };

    // --- EVENT LISTENERS SETUP ---
    // Use a single event listener on the grid for better performance (Event Delegation)
    selectors.plantGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.plant-card');
        if (!card) return;

        const plantId = parseInt(card.dataset.plantId);

        if (event.target.classList.contains('log-water-btn')) {
            handleLogWatering(plantId);
        }

        if (event.target.classList.contains('add-sunlight-btn')) {
            handleAddSunlight(plantId);
        }
    });

    // Listeners for modal controls
    selectors.addNewLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    });
    selectors.cancelBtn.addEventListener('click', () => toggleModal(false));
    selectors.addPlantForm.addEventListener('submit', handleAddNewPlant);


    // --- INITIALIZATION ---
    console.log("PlantPal App Initialized!");
    render(); // Initial render of all plants when the page loads
});