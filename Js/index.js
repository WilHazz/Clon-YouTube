let btnMenu = document.querySelector('.btn_menu');
let contenido = document.querySelector('.contenido');


btnMenu.addEventListener('click', function(){
    document.getElementById('siderbar_menu').classList.toggle('small-sidebar');
    document.getElementById('contenido').classList.toggle('contenido-ancho');
});