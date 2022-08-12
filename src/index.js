import './style.css';
import logoSVG from './delicious-donut-with-chocolate.svg';
import logoContentMain from './woman-donut.jpg'
const content = document.createElement('div');
content.setAttribute('id','content');

const contentHeader = document.createElement('div');
const contentMain = document.createElement('div');

contentHeader.id = "contentHeader";
contentMain.id = "contentMain";
const body = document.querySelector('body');
body.appendChild(content);
content.append(contentHeader, contentMain);
// body.append(contentHeader);
// contentHeader.appendChild(content);

const logo = document.createElement('div');
const shopName = document.createElement('div');
const containerBtn = document.createElement('div');

logo.classList.toggle('logo');
shopName.classList.toggle('shopName');
containerBtn.classList.toggle('containerBtn');

contentHeader.append(logo,shopName,containerBtn);

const imgLogo = new Image();
const imgContentMain = new Image();
imgLogo.src = logoSVG;
imgContentMain.src = logoContentMain;

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

containerBtn.append(homeBtnD, menuBtnD, contactBtnD);

//const homeTxt = document.createElement("div");
const homeH = document.createElement("h1");
const homeP = document.createElement("p");

homeH.textContent = "The Donut Shop ..."
homeP.textContent = "The worlds leading donut shop. With high quality of bread and world class pastry chef.";

contentMain.append(homeH, imgContentMain, homeP);

//contentMain.appendChild(homeTxt);
