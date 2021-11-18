export default function printContact() {
    const content=document.querySelector('#content');

    const container=document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const h1=document.createElement('h1');
    h1.textContent="ABOUT US";
    container.appendChild(h1);
    
    const h3=document.createElement('h3');
    h3.textContent="Hwaro";
    container.appendChild(h3);

    const text=document.createElement('div');
    text.classList.add('text');
    text.textContent="We recreated Korean traditional cuisine to blend into the heart of variety Chosunhwaro, the leading company in the creation of themed dining and cultural contents, pursues to globally deliver excellence of taste and sophistication. To keep our promises to serve sincerely prepared food to our precious customers, we continuously strive for excellency in service through education of our staff, exceptional distribution channels, and a meticulously formulated management system. Our sincere love and care for Korean cuisine will continue and we will strive to widely promote the Korean tradition, the food, and sophistication, all over the globe. We assure you that you will be able to watch us proudly as we take a leap towards leading the future of the global industry.";
    container.appendChild(text);
}