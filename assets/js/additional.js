// Get the element where the text will be typed
const typedTextElement = document.getElementById('my-name');
const textToType1 = 'Tommy Nguyen';
const textToType2 = 'Villanova University';
const textToType3 = "Computer Science";
const textToType4 = "Business Minor";

// Function to simulate typing effect
function typeText(text, index) {
  if (index < text.length) {
    typedTextElement.innerHTML += `${text.charAt(index)}`;
    
    // Schedule the next character to be typed after a delay
    if (index === 0) {
      setTimeout(() => {
        typeText(text, index + 1);
      }, 400);
    } else {
      setTimeout(() => {
        typeText(text, index + 1);
      }, 70);
    }
  }
}

function reTypeText(text, index) {
  typedTextElement.textContent = ' ';
  setTimeout(() => {
    typeText(text, index);
  }, 70);
}

function introTypeText(textToType1, textToType2, textToType3, textToType4) {
  typedTextElement.textContent = " ";
  setTimeout(() => {
    typeText(textToType1, 0);
  }, 50);
  
  setTimeout(() => {
    reTypeText(textToType2, 0);
  }, 2200);
  
  setTimeout(() => {
    reTypeText(textToType3, 0);
  }, 5600);
  
  setTimeout(() => {
    reTypeText(textToType4, 0);
  }, 9000);
  
  setTimeout(() => {
    typedTextElement.textContent = "Tommy Nguyen";
  }, 13000);
}

introTypeText(textToType1, textToType2, textToType3, textToType4);

// Add a mouseover event listener to the element
typedTextElement.addEventListener('mouseover', function() {
  // Check if the text content is "Tommy Nguyen"
  if (this.textContent === 'Tommy Nguyen') {
    introTypeText(textToType1, textToType2, textToType3, textToType4);
  }
});