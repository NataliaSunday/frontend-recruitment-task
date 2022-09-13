let popupContainer = document.getElementById('popupContainer');
let openBtn = document.getElementById('popupBtn');
let counterInfo = document.getElementById('counter');
let resetBtn = document.getElementById('resetBtn');
let closeBtn = document.getElementById('closeBtn');

window.addEventListener('click', outsideClick);
openBtn.addEventListener('click', openPopup);
resetBtn.addEventListener('click', resetCounter);
closeBtn.addEventListener('click', closePopup);

function openPopup(){
    localStorage.setItem('counter',parseInt(localStorage.getItem('counter')) + 1);
    updatePopupContent();
    popupContainer.style.display = "flex";
    
    if(parseInt(localStorage.getItem('counter')) > 5){
        resetBtn.style.display="block"
    }else{
        resetBtn.style.display="none"
    }
}
function closePopup(){
    popupContainer.style.display = "none"
}
function resetCounter(){
    localStorage.setItem('counter', '0');
    updatePopupContent();
}
function outsideClick(e){
    if(e.target == popupContainer){
        popupContainer.style.display = "none";
    }
}
function updatePopupContent(){
    counterInfo.innerText = JSON.stringify(localStorage.getItem('counter'));
}