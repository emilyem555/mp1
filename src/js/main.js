/* Your JS here. */
/* srcs:https://www.delftstack.com/howto/javascript/change-image-src-javascript/ 
        https://www.w3schools.com/howto/howto_css_modals.asp*/
const img_list = ["./assets/EmilyHeadshot.jpg","./assets/AbbyHeadshot.jpg"]

let curr_img_idx = 0;

var carousel_img = document.getElementById("carousel-img");
var img_buttons = document.getElementsByClassName("img-button");
var img_cols = document.getElementsByClassName("img-hover");
var modal = document.getElementById("modal-window");
var close = document.getElementById("close");

var section3 = document.getElementById("section3");
var section2 = document.getElementById("section2");
var section1 = document.getElementById("section1");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");
let background = document.getElementById("img-back");
let cols = document.getElementById("col_card");
let title = document.getElementById("title-card");
let carousel = document.getElementById("carousel");
let vid = document.getElementById("vid-embed");

section3.addEventListener("click",() => {carousel.scrollIntoView({behavior:"smooth"});});
section2.addEventListener("click",() => {cols.scrollIntoView({behavior:"smooth"});});
section1.addEventListener("click",() => {window.scrollTo(0,0)});
section4.addEventListener("click",() => {background.scrollIntoView({behavior:"smooth"});});
section5.addEventListener("click",() => {vid.scrollIntoView({behavior:"smooth"});});

document.getElementById("video").pause();


close.addEventListener("click",()=>{modal.style.display="none"})

for (let button of img_buttons) {
    button.addEventListener("click", changeImage);
}

for(let img of img_cols) {
    img.addEventListener("click",modalView);
}

var td = cols.querySelectorAll("td");
td.forEach(t => {
    let imgs = t.getElementsByClassName("img-hover");
    let img;
    if(imgs.length >0) {
        img = imgs[0];
    }
    
    t.addEventListener("mouseover", ()=> {img.style.display = "flex";});
    t.addEventListener("mouseout", ()=> {img.style.display = "none";});
})

var nav = document.getElementById("nav");
window.onscroll = changeNav;

function modalView() {
    modal.style.display = "flex";
    for(let img of img_cols) {
        img.style.display = "none";
    }
}

function changeImage() {
    curr_img_idx = (curr_img_idx + 1) % img_list.length;
    carousel_img.src = img_list[curr_img_idx];
}
// finish changing categories based on position
// add click to scroll stuff
function setActive () {
    let title = document.getElementById("title-card").getBoundingClientRect();
    let cols = document.getElementById("col_card").getBoundingClientRect();
    let carousel = document.getElementById("carousel").getBoundingClientRect();
    let img_back = document.getElementById("img-back").getBoundingClientRect();
    let emb_vid = document.getElementById("vid-embed").getBoundingClientRect();
    
    if(emb_vid.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
        document.getElementById("section5").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
        document.getElementById("video").play();
    } else if(img_back.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section3").className = "";
        document.getElementById("section5").className = "";
        document.getElementById("section4").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
    } else if(carousel.top - nav.getBoundingClientRect().bottom <= 0) {
        document.getElementById("section5").className = "";
        document.getElementById("section4").className = "";
        document.getElementById("section3").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
    } else if(cols.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section5").className = "";
        document.getElementById("section2").className = "active";
        document.getElementById("section1").className = "";
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
    } else if(title.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section5").className = "";
        document.getElementById("section1").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
    }  else {
        document.getElementById("section5").className = "";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
    }
}

function changeNav() {
    setActive();
    let title = document.getElementById("title-card").getBoundingClientRect();
    if (document.body.scrollTop > title.top || document.documentElement.scrollTop > title.top) {
        document.getElementById("nav").style.height = "6vh";
        document.getElementById("section1").style.fontSize = "12px";
        document.getElementById("section2").style.fontSize = "12px";
        document.getElementById("section3").style.fontSize = "12px";
        document.getElementById("section4").style.fontSize = "12px";
        document.getElementById("section5").style.fontSize = "12px";
        document.getElementById("title").style.fontSize = "16px";
        modal.style.marginTop = "8vh";

    } else {
        document.getElementById("nav").style.height = "8vh";
        document.getElementById("section1").style.fontSize = "16px";
        document.getElementById("section2").style.fontSize = "16px";
        document.getElementById("section3").style.fontSize = "16px";
        document.getElementById("section4").style.fontSize = "16px";
        document.getElementById("section5").style.fontSize = "16px";
        document.getElementById("title").style.fontSize = "20px";
        modal.style.marginTop = "10vh";
    }
}