import './menuStyle.css'
import food from './food.jpg';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';

function menuFood(src, txt, alt, price){
    const foodContainer = document.createElement('div');
    foodContainer.classList.add('foodContainer');
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
    const contentMain = document.createElement('div');
    contentMain.id = "contentMain";
    const arrFood = [menuFood(food,'CLASSIC DONUT', 'DONUT', '₱150'),
    menuFood(food1,'CARAMEL BAVARIAN', 'DONUT', '₱200'),
    menuFood(food2,'CHOCO CLASSIC DRIZZLE', 'DONUT', '₱350'),
    menuFood(food3,'ASSORTED DONUT', 'DONUT', '₱500')]

    arrFood.forEach((item)=>{
        console.log(item);
        contentMain.append(item);
    })

    return contentMain;
}

const functionMenu = () => {
    return homeStart(); 
};


export default functionMenu;