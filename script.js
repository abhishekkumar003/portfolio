const menui = document.getElementById('menui');
const header = document.getElementById('head');

menui.addEventListener('click', ()=>{
    menui.classList.toggle('fa-times');

    header.classList.toggle('toggle');
})


window.addEventListener('scroll', ()=>{
    menui.classList.remove('fa-times');
    header.classList.remove('toggle');
})
