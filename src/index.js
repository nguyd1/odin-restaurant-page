import printHome from './homeModule.js'
import printMenu from './menuModule.js'
import printContact from './contactModule.js'
import './style.css'

function printHeader(){
    const content=document.querySelector('#content');

    const header=document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const btnHome=document.createElement('button');
    btnHome.classList.add('btnHome');
    btnHome.textContent="Home";
    header.appendChild(btnHome);
    
    const btnMenu=document.createElement('button');
    btnMenu.classList.add('btnMenu');
    btnMenu.textContent="Menu";
    header.appendChild(btnMenu);
    
    const btnContact=document.createElement('button');
    btnContact.classList.add('btnContact');
    btnContact.textContent="Contact";
    header.appendChild(btnContact);

    btnHome.addEventListener('click',()=>{
        content.innerHTML="";
        printHeader();
        printHome();
    });
    
    btnMenu.addEventListener('click',()=>{
        content.innerHTML="";
        printHeader();
        printMenu();
    });
    
    btnContact.addEventListener('click',()=>{
        content.innerHTML="";
        printHeader();
        printContact();
    });
}

printHeader();
printHome();