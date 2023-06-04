// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
function getRandomColor() {
  var red = getRandomNumber(0, 255);
  var green = getRandomNumber(0, 255);
  var blue = getRandomNumber(0, 255);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

// Function to change the color of the header to a random color
function changeHeaderColor() {
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var color = getRandomColor();
  header.style.backgroundColor = color;
  footer.style.backgroundColor = color;
  // Determine the brightness of the background color
  var brightness = (299 * parseInt(color.substring(1, 3), 16) + 587 * parseInt(color.substring(3, 5), 16) + 114 * parseInt(color.substring(5, 7), 16)) / 1000;
  // Set the text color to either black or white based on the brightness of the background color
  if (brightness > 128) {
    header.style.color = "black";
    footer.style.color = "black";
  } else {
    header.style.color = "white";
    footer.style.color = "white";
  }
}

// Call the function to change the color of the header and text color when the page loads
window.addEventListener('load', changeHeaderColor);
