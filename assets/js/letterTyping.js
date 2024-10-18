// Get the element where the text will be typed
const typedTextElement = document.getElementById('my-name');
const textToType1 = 'Tommy Nguyen';
const textToType2 = 'Villanova University';
const textToType3 = "Computer Science";
const textToType4 = "Business Minor";

// Function to simulate typing effect
function typeText(text, index) {
  if (index <= text.length) {
    typedTextElement.innerHTML = `${text.substring(0, index)}<span class="cursor">|</span>`;
    
    // Schedule the next character to be typed after a delay
    if (index < text.length) {
      setTimeout(() => {
        typeText(text, index + 1);
      }, 70);
    }  
  }
}

// Function to clear and re-type the new text
function reTypeText(text) {
  typedTextElement.innerHTML = '<span class="cursor">|</span>';
  setTimeout(() => {
    typeText(text, 0);
  }, 500);
}


// Function to handle the entire sequence
function introTypeText() {
  typeText(textToType1, 0); // First text
  
  setTimeout(() => {
    reTypeText(textToType2); // Second text
  }, 2200);
  
  setTimeout(() => {
    reTypeText(textToType3); // Third text
  }, 5600);
  
  setTimeout(() => {
    reTypeText(textToType4); // Fourth text
  }, 9000);
  
  setTimeout(() => {
    typedTextElement.innerHTML = `Tommy Nguyen`; // Final display
  }, 13000);
}

introTypeText();

