import './contactStyle.css'

const functionContact = () =>{
    const contentMain = document.createElement('div');
    contentMain.id = "contentMain";
    contentMain.classList.add('contactMain');
    const homeH = document.createElement("h1");
    const homeP = document.createElement("p");
    const homeP2 = document.createElement("p");
    homeH.textContent = "ABOUT US"
    homeP.textContent = "Thank you for supporting our products in all over the world. With 100 branch and still counting on today. If you have inquiries and any business collaboration."
    homeP2.textContent = "You may contact #0956844 or you may email us jmark@carbs" ;
    contentMain.append(homeH, homeP, homeP2);
    return contentMain;
};

export default functionContact;