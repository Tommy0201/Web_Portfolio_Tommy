// Get the element where the text will be typed
const typedTextElement = document.getElementById('my-name');
const textToType1 = 'Tommy Nguyen';
const textToType2 = 'Computer Science';
const textToType3 = "SWE Intern";
const textToType4 = "LLMs Research";
const textToType5 = "Business Minor";

// Function to simulate typing effect
function typeText(text, index) {
  if (index <= text.length) {
    typedTextElement.innerHTML = `${text.substring(0, index)}<span class="cursor">|</span>`;
    
    // Schedule the next character to be typed after a delay
    if (index < text.length) {
      setTimeout(() => {
        typeText(text, index + 1);
      }, 45);
    }  
  }
}

// Function to clear and re-type the new text
function reTypeText(text) {
  typedTextElement.innerHTML = '<span class="cursor">|</span>';
  setTimeout(() => {
    typeText(text, 0);
  }, 400);
}


function introTypeText() {
  typeText(textToType1, 0); // First text 2200s to write
  
  setTimeout(() => {
    reTypeText(textToType2); // Second text 
  }, 2200);
  
  setTimeout(() => {
    reTypeText(textToType3); // Third text 3400s to write
  }, 5200);
  
  setTimeout(() => {
    reTypeText(textToType4); // Fourth text 3400s to write
  }, 8200);

    setTimeout(() => {
    reTypeText(textToType5); // Fifth text 3400s to write
  }, 11200);
  
  setTimeout(() => {
    typedTextElement.innerHTML = `Tommy Nguyen`;
  }, 14200);
}

introTypeText();

