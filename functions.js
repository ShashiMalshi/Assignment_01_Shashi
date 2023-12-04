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

//feature 5 - text alignments functions

const textEditor = document.getElementById('editArea');

function left() {
  editArea.style.textAlign = 'left';
}

function center() {
  editArea.style.textAlign = 'center';
}

function right() {
  editArea.style.textAlign = 'right';
}

function justify() {
  editArea.style.textAlign = 'justify';
}

//feature 6 - undo and redo function

var pastState = [];
var now = 0;

function saveState(){
  pastState = pastState.slice(0, now + 1); 
  pastState.push({
    content: document.getElementById('editArea').innerHTML,
    alignment: document.getElementById('editArea').style.textAlign
  });
  now++;
}

function updateState(){
  document.getElementById('editArea').innerHTML = pastState[now].content;
  document.getElementById('editArea').style.textAlign = pastState[now].alignment;
}

function undo(){
  if (now > 0){
    now--;
    updateState();
  }
}

function redo(){
  if (now < pastState.length - 1){
    now++;
    updateState();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('editArea').addEventListener('input', function(){
    saveState();
  });
});