let listElements = document.querySelectorAll('.list__button--click');
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector("toggle");

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

function cerrar(){
   
    if(sidebar.classList.contains(navClose)){
        sidebar.classList.remove("navClose");
    sidebar.classList.add("nav");
    }
    else{
        sidebar.classList.remove("nav");
        sidebar.classList.add("navClose");
    }
    
    
}
