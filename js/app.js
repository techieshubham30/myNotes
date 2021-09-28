const addBtn=document.querySelector('#addBtn');
const txtArea=document.querySelector('#addTxt');
const cardText=document.querySelector('.card-text');
addBtn.addEventListener("click",addNotes);

function addNotes(){

cardText.innerText=txtArea.value;
txtArea.value="";
}