import './style.css';
import logoSVG from './delicious-donut-with-chocolate.svg';
import food from './food.jpg';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';

function menuFood(src, txt, alt, price){
    const foodContainer = document.createElement('div');
    const img = new Image();
    img.src = src;
    img.alt = alt;  
    img.id = 'foodGeneral';

    const description = document.createElement('div');
    description.classList.add('description');

    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.textContent = txt;
    p.textContent = price;


    foodContainer.append(img,description);
    description.append(h3,p);
    
    return foodContainer;
}

function homeStart(){
    //hide the past id's
    const content = document.createElement('div');
    content.setAttribute('id','content');

    const contentHeader = document.createElement('div');
    const contentMain = document.createElement('div');
    const footer = document.createElement('footer');

    contentHeader.id = "contentHeader";
    contentMain.id = "contentMain";

    const body = document.querySelector('body');
    body.appendChild(content);
    content.append(contentHeader, contentMain, footer);

    footer.textContent = "-- All rights reserved © --"
    const logo = document.createElement('div');
    const shopName = document.createElement('div');
    const containerBtn = document.createElement('div');

    logo.classList.toggle('logo');
    shopName.classList.toggle('shopName');
    containerBtn.classList.toggle('containerBtn');

    contentHeader.append(logo,shopName,containerBtn);

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
    homeBtn.id = "home";
    menuBtn.id = "menu";
    contactBtn.id = "contact";
    homeBtnD.append(homeBtn);
    menuBtnD.append(menuBtn);
    contactBtnD.append(contactBtn);

    containerBtn.append(homeBtnD, menuBtnD, contactBtnD);
    const arrFood = [menuFood(food,'SOMECOMMENT', 'DONUT', '₱250'),
    menuFood(food1,'SOMECOMMENT', 'DONUT', '₱250'),
    menuFood(food2,'SOMECOMMENT', 'DONUT', '₱250'),
    menuFood(food3,'SOMECOMMENT', 'DONUT', '₱250')]

    arrFood.forEach((item)=>{
        console.log(item);
        contentMain.append(item);
    })
}

const functionMenu = () => {
    console.log("Im IN");
    homeStart();
    
};


export default functionMenu;