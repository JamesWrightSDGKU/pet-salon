let salon = {
    name: "The Fashionable Pet",
    address:{
        streetNumber:"538",
        street: "Serene Way",
        city: "Tropic Bay",
        state: "CA",
        zip: "92810",
        country: "United States of America"
    },
    socialList:[]
}

class SocialSite {
    constructor(site, address, icon) {
        this.site = site;
        this.address = address;
        this.icon = icon;
    }
}

function addSocialSite(){
    let site0 = new SocialSite("Bluesky","https://bsky.social/about","fa-bluesky");
    let site1 = new SocialSite("Facebook","https://www.facebook.com","fa-facebook");
    let site2 = new SocialSite("Instagram","https://www.instagram.com","fa-instagram");
    let site3 = new SocialSite("Yelp","https://www.yelp.com","fa-yelp");

    salon.socialList.push(site0,site1,site2,site3);

}

function footerSocialLinks(){
    let result = "";

    for(let i = 0; i < salon.socialList.length; i ++){
        let social = salon.socialList[i];
        result += `
            <label>
                <a href=${social.address} title="Follow us on ${social.site}!" aria-label="Link to ${social.site}">
                    <i class="fa-brands ${social.icon} fa-xl"></i>
                </a>
            </label>
        `;
    }
    document.getElementById("socialLinks").innerHTML = result;
}

function footerContent(){
    document.getElementById("salonName").innerHTML=salon.name;
    let addr = salon.address;
    document.getElementById("inlineSalonAddress").innerHTML=`
        ${addr.streetNumber} ${addr.street} | ${addr.city}, ${addr.state} ${addr.zip}
    `;
    footerSocialLinks();
}

function globalInit(){
    addSocialSite();
    footerContent();
}

window.onload=globalInit;