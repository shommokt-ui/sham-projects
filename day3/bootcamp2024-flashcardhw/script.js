const flashcards = [];
let currentIndex = 0;
let showingTerm = true;
// You can use flashcards.length to get the length of the array

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    if (flashcards.length === 0) return;

    if (showingTerm) {
        cardContent.textContent = flashcards[currentIndex].term;
    } else {
        cardContent.textContent = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners

document.getElementById('flashcard').addEventListener('click', function() {
    if (flashcards.length === 0) return;
    showingTerm = !showingTerm;
    displayCard();
});

document.getElementById('next-btn').addEventListener('click', function() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
});


document.getElementById('prev-btn').addEventListener('click', function() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
});

document.getElementById('add-card-btn').addEventListener('click', function() {
    const newTerm = document.getElementById('new-term').value.trim();
    const newDefinition = document.getElementById('new-definition').value.trim();
    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
        currentIndex = flashcards.length - 1;
        showingTerm = true;
        displayCard();
    }
});

document.getElementById('delete-btn').addEventListener('click', function() {
    if (flashcards.length === 0) return;
    flashcards.splice(currentIndex, 1);
    if (flashcards.length === 0) {
        currentIndex = 0;
    } else if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }
    // Clear the display after deleting
    document.getElementById('card-content').textContent = "";
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
