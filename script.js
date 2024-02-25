// Array to store used random food indexes
let usedIndexes = [];

// Function to generate a random food index that hasn't been used yet
function getRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * 16) + 1;
    } while (usedIndexes.includes(randomIndex));
    
    usedIndexes.push(randomIndex);
    return randomIndex;
}

// Function to set random food images for each day
function setRandomFoods() {
    // Reset usedIndexes array if all 16 types have been used
    if (usedIndexes.length === 16) {
        usedIndexes = [];
    }

    // Set random food images for each day
    for (var i = 1; i <= 7; i++) {
        var randomFood = getRandomIndex();
        document.querySelector(".img" + i).setAttribute("src", "./Images/food" + randomFood + ".jpg");
    }
}

// Call setRandomFoods function when the page loads
window.onload = setRandomFoods;

// Function to refresh the page and regenerate random food
function refreshPage() {
    window.location.reload();
}
