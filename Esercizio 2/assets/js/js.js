 class Pet {
        constructor(petName, ownerName, species, breed) {
            this.petName = petName;
            this.ownerName = ownerName;
            this.species = species;
            this.breed = breed;
        }

        hasSameOwner(anotherPet) {
            return this.ownerName.toLowerCase() === anotherPet.ownerName.toLowerCase();
        }
    }

    const petList = [];

    document.getElementById("petForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        const petName = document.getElementById("petName").value;
        const ownerName = document.getElementById("ownerName").value;
        const species = document.getElementById("species").value;
        const breed = document.getElementById("breed").value;

        const newPet = new Pet(petName, ownerName, species, breed);

        
        const hasSameOwner = petList.some(pet => pet.hasSameOwner(newPet));

        if (hasSameOwner) {
            alert("Error: Pets cannot share the same owner.");
        } else {
            petList.push(newPet);
            displayPetList();
            clearForm();
        }
    });

    function displayPetList() {
        const petListElement = document.getElementById("petList");
        petListElement.innerHTML = ""; 

        petList.forEach((pet, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Pet ${index + 1}: ${pet.petName} (Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed})`;
            petListElement.appendChild(listItem);
        });
    }

    function clearForm() {
        document.getElementById("petForm").reset();
    }