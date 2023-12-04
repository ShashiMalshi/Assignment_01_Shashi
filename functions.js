//feature 1 - bold function
function bold() {
    document.execCommand('bold',true,null)
}

//feature 2 - underline function
function underline() {
  document.execCommand('underline',true,null)
}

//feature 3 - italic function
function italic() {
  document.execCommand('italic',true,null)
}

//feature 4 - font color function

function toggleColorPalette() {
  var colorPalette = document.getElementById('selectColor');
  colorPalette.style.display = (colorPalette.style.display === 'none' || colorPalette.style.display === '') ? 'block' : 'none';
}

function changeTextColor(color) {
  document.execCommand('foreColor', false, color);
  toggleColorPalette(); 
}
