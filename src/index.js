import './style.css';
import logoSVG from './delicious-donut-with-chocolate.svg';
//import logoContentMain from './woman-donut.jpg';
import functionMenu from './menu.js';
import functionHome from './home.js';
import functionContact from './contact';

const content = document.createElement('div');
content.setAttribute('id','content');
content.classList.add('active');

const contentHeader = document.createElement('div');
//const contentMain = document.createElement('div');

contentHeader.id = "contentHeader";
//contentMain.id = "contentMain";
const body = document.querySelector('body');
const footer = document.createElement('footer');

body.appendChild(content);

//content.append(contentHeader, contentMain, footer);

footer.textContent = "-- All rights reserved © --"
const logo = document.createElement('div');
const shopName = document.createElement('div');
const containerBtn = document.createElement('div');

logo.classList.toggle('logo');
shopName.classList.toggle('shopName');
containerBtn.classList.toggle('containerBtn');

contentHeader.append(logo,shopName,containerBtn);

const imgLogo = new Image();
//const imgContentMain = new Image();
imgLogo.src = logoSVG;
//imgContentMain.src = logoContentMain;

logo.appendChild(imgLogo);
shopName.textContent = "THE DONUT SHOP";

const homeBtnD = document.createElement("div");
const menuBtnD = document.createElement("div");
const contactBtnD = document.createElement("div");

const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");


homeBtn.textContent = "HOME";
menuBtn.textContent = "MENU";
contactBtn.textContent = "CONTACT";
homeBtn.id = "home";
menuBtn.id = "menu";
contactBtn.id = "contact";
homeBtnD.append(homeBtn);
menuBtnD.append(menuBtn);
contactBtnD.append(contactBtn);

containerBtn.append(homeBtnD, menuBtnD, contactBtnD);
content.append(contentHeader,functionHome(),footer);
homeBtn.classList.add('current');
//menuBtn.classList.remove('current');
//contactBtn.classList.remove('current');

//const homeH = document.createElement("h1");
//const homeP = document.createElement("p");
//homeH.textContent = "THE #1 DONUTS IN THE WORLD"
//homeP.textContent = "The worlds leading donut shop. With high quality of bread and world class pastry chef.";

//contentMain.append(homeH, imgContentMain, homeP);

const menuID = document.querySelector('#menu');
const homeID = document.querySelector('#home');
const contactID = document.querySelector('#contact');

homeID.addEventListener("click", (event)=>{
    if(!(homeID.classList.contains('current'))){
        contentMain.remove();
        menuID.classList.remove('current');
        contactID.classList.remove('current');
        homeID.classList.add('current');
        content.insertBefore(functionHome(),footer);
    }
});
menuID.addEventListener("click", (event)=>{
    if(!(menuID.classList.contains('current'))){
        contentMain.remove();
        homeID.classList.remove('current');
        contactID.classList.remove('current');
        menuBtn.classList.add("current");
        content.insertBefore(functionMenu(),footer);
    }
});

contactID.addEventListener("click", (event)=>{
    if(!(contactID.classList.contains('current'))){
        contentMain.remove();
        homeID.classList.remove('current');
        menuID.classList.remove('current');
        contactID.classList.add("current");
        content.insertBefore(functionContact(),footer);
    }
});
