const addBtn=document.querySelector('#addBtn');
const txtArea=document.querySelector('#addTxt');
const cardText=document.querySelector('.card-text');
addBtn.addEventListener("click",addNotes);

function addNotes(){
let element=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Note</h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Delete Note</a>
</div>
</div>`
cardText.innerText=txtArea.value;
txtArea.value="";
}