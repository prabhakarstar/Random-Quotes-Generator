const btn1 = document.querySelector('button'); 
const quotess = document.querySelector('h5'); 
const author = document.querySelector('p');
 
async function quotes(){
    const apiss  = await fetch('https://api.quotable.io/random')
    let res = await apiss.json(); 
    quotess.innerHTML = res.content;
    author.innerHTML = `~  ${res.author}`;
}

btn1.addEventListener('click',()=>quotes());
quotes();








    



   



