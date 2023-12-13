let h1=document.querySelector("#home h1");

let button=document.querySelector("#home button");
let home =document.querySelector("#home");

setInterval(() => {
    h1.style.color = "red";
    h1.innerText="Welcome to Our Website ✨🙏";
    
    button.style.backgroundColor = "red";
    
    home.style.background ="url(image/bulkfood.jpg)";

}, 3000);

setInterval(() => {
    h1.style.color = "blue";
    h1.innerText="Great Offers Coming Soon 🎁🎉✨";

    button.style.backgroundColor = "blue";

    home.style.background ="url(image/tastyfood.jpg)";

}, 8000);

setInterval(() => {
    h1.style.color = "green";
    h1.innerText="Eat Healthy Be healthy 👍🥰";

    button.style.backgroundColor = "green";

    home.style.background ="url(image/tasty2.jpg)";


   

}, 13000);



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}

function close(){
    mainMenu.style.top = '-120%';
}                                        