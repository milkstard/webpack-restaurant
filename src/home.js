import logoContentMain from './woman-donut.jpg';
import './homeStyle.css'
const functionHome = ()=>{
    const contentMain = document.createElement('div');
    contentMain.id = "contentMain";
    const imgContentMain = new Image();
    imgContentMain.src = logoContentMain;
    const homeH = document.createElement("h1");
    const homeP = document.createElement("p");
    homeH.textContent = "THE #1 DONUTS IN THE WORLD"
    homeP.textContent = "The worlds leading donut shop. With high quality of bread and world class pastry chef.";
    contentMain.append(homeH, imgContentMain, homeP);
    return contentMain;
}

export default functionHome;