const newFont = 'Arial, sans-serif';

// Select all elements on the page and apply the new font
const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
  element.style.fontFamily = newFont;
});
