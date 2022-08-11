import './style.css';
import logoSVG from './delicious-donut-with-chocolate.svg';
const content = document.createElement('div');
content.setAttribute('id','content');

const body = document.querySelector('body');
body.append(content);

const logo = document.createElement('div');
const shopName = document.createElement('div');
const containerBtn = document.createElement('div');

logo.classList.toggle('logo');
shopName.classList.toggle('shopName');
containerBtn.classList.toggle('containerBtn');

content.append(logo);
content.append(shopName);
content.append(containerBtn);

const imgLogo = new Image();
imgLogo.src = logoSVG;

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
homeBtnD.append(homeBtn);
menuBtnD.append(menuBtn);
contactBtnD.append(contactBtn);

containerBtn.append(homeBtnD);
containerBtn.append(menuBtnD);
containerBtn.append(contactBtnD);



