let openBtn = document.getElementById('popupBtn');
let closeBtn = document.getElementById('closeBtn');
let popupContainer = document.getElementById('popupContainer');
let counterInfo = document.getElementById('counter');
let resetBtn = document.getElementById('resetBtn');

console.log(localStorage.getItem('counter'));


openBtn.addEventListener('click', ()=>{

    localStorage.setItem('counter',parseInt(localStorage.getItem('counter')) + 1);
    counterInfo.innerText = JSON.stringify(localStorage.getItem('counter'));
    popupContainer.style.display = "flex";
if( parseInt(localStorage.getItem('counter')) > 5){
    resetBtn.style.display="block"
}else{
    resetBtn.style.display="none"
}
if(popupContainer.style.display = "flex"){
    popupContainer.addEventListener('click', ()=>{
        popupContainer.style.display = "none";
    })
}

});
closeBtn.addEventListener('click', ()=>{
    popupContainer.style.display = "none";
    
});


resetBtn.addEventListener('click', ()=>{
    localStorage.setItem('counter', '0')
})