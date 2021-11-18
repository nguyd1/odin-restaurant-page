export default function printMenu() {
    const content=document.querySelector('#content');

    const container=document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    let h1=document.createElement('h1');
    h1.textContent="KOREAN BBQ & MEAL";
    container.appendChild(h1);

    h1=document.createElement('h1');
    h1.textContent="ALL YOU CAN EAT";
    container.appendChild(h1);

    h1=document.createElement('h1');
    h1.textContent="DRINK";
    container.appendChild(h1);
}