const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('item-list')
const clear = document.getElementById('clear-list');
const feedback= document.querySelector('.feedback');

let itemData = [];


itemForm.addEventListener('submit', function(event){
    event.preventDefault();
        
    const textValue = itemInput;
    console.log(textValue);

if(textValue === ''){
    showFeedback('please enter valid value', 'danger')
}
else{
    addItem(textValue);
}
});


function showFeedback(text,action){
    feedback.classList.add('showItem', `alert-${action}`);
    feedback.innerHTML = `<p>${text}</p>`;

setTimeout(function(){
    feedback.classList.remove('showItem', `alert-${action}`);
}, 3000);
}

function addItem(value){
    const div =  document.createElement('div');
    div.classList.add("item", "my-3");
    div.innerHTML = `<h5 class = "item-name text-capitalize">${value}</h5>
    <div class="item-icons">
    <a href="#" class="complete-item mx-2 item-icon"><i class="far
    fa-check-circle"></i></a>
    <a href"#" class="edit-item mx-2 item-icon"><i class="far
    fa-edit"></i></a>
    <a href"#" class="delete-item mx-2 item-icon"><i class="far
    fa-times-circle"></i></a>
    </div>`;
itemList.appendChild(div);
}