/* Your JS here. */
/* srcs:https://www.delftstack.com/howto/javascript/change-image-src-javascript/ 
        https://www.w3schools.com/howto/howto_css_modals.asp
        https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
        others I forgot were either in the above domains, or geeks for geeks with general JS use assistance/syntax */
const img_list = ["./assets/abbypic.jpeg","./assets/faithepic.jpeg","./assets/kathpic.jpeg", "./assets/gracepic.jpeg", "./assets/JazminAllypic.jpeg"]

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

let background = document.getElementById("img-back");
let cols = document.getElementById("col_card");
let title = document.getElementById("title-card");
let carousel = document.getElementById("carousel");
let vid = document.getElementById("vid-embed");

section3.addEventListener("click",() => {carousel.scrollIntoView({behavior:"smooth"});});
section2.addEventListener("click",() => {cols.scrollIntoView({behavior:"smooth"});});
section1.addEventListener("click",() => {window.scrollTo(0,0)});
section4.addEventListener("click",() => {background.scrollIntoView({behavior:"smooth"});});
// section5.addEventListener("click",() => {vid.scrollIntoView({behavior:"smooth"});});
let nav_font = section1.style.fontSize;
let nav_title_font = document.getElementById("title").style.fontSize;

close.addEventListener("click",()=>{modal.style.display="none";document.body.style.overflow = "visible";})

for (let button of img_buttons) {
    if(button.id.includes("right")) {
        button.addEventListener("click", changeImageRight);
    } else {
        button.addEventListener("click", changeImageLeft);
    }
}

for(let img of img_cols) {
        img.addEventListener("click",()=>modalView(img.id));
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

function modalView(id) {
    let modal_img = document.getElementById("modal-img");
    let modal_header = document.getElementById("modal-title");
    let modal_text = document.getElementById("modal-text");

    modal.style.display = "flex";
    for(let img of img_cols) {
        img.style.display = "none";
    }
    document.body.style.overflow = "hidden";

    if(id == "knitting-img") {
         modal_img.src = "../assets/knittingpic.jpeg";
        modal_header.textContent = "Knitting";
        modal_text.textContent = "I have been knitting (on and off) since 7th grade! Since then, I have made many hats, slippers, and one failed sweater. The hat pictured was later completed and given as a gift to my little in my sorority!\n I am currently working on a tank top.";
    } else if(id == "travel-img") {
       modal_img.src = "../assets/travelpic.jpeg";
       modal_header.textContent = "Travel";
        modal_text.textContent = "I have been fortunate enough to travel to numerous places, including pize(as pictured). Some of my favorite places I have travelled to includes: Rome, Italy, London, UK, and Jamaica. I am currently hoping to someday visit Spain, especially Madrid and Barcelona.";
    } else if(id == "dev-img") {
        modal_img.src = "../assets/dev.jpeg";
        modal_header.textContent = "Coding";
        modal_text.textContent = "As a Computer Science student, I can truly say that coding has turned into one of my favorite things to do over the past few years. I have gotten to learn so much about it, especially through hackathons! I have participated in HackIllinois each year, and this picture is from my first year doing it!";
    } else if(id == "noodles-img") {
        modal_img.src = "../assets/noodles.jpeg";
        modal_header.textContent = "Cooking";
        modal_text.textContent = "Since living in an apartment, I have had a lot of fun experimenting with cooking and baking. One such exploration was with making fresh noodles, and turning it into homemade Fettucine Alfredo (pictured below). I have also made pancakes and chocolate chip cookies recently!";
    } else if(id == "theater-img") {
        modal_img.src = "../assets/theater.jpeg";
        modal_header.textContent = "Musical Theater";
        modal_text.textContent = "Though I have since retired from performing on stage, in high school I was very involved in musical theater! Even now, I frequently attend theater performances, and have a playbill display in my room.";
    } else if(id == "reading-img") {
        modal_img.src = "../assets/reading.jpeg";
        modal_header.textContent = "Reading";
        modal_text.textContent = "Ever since I could read, I have done so constantly and fervently. I strictly maintain my goodreads account, and read at minimum 25 books per year. My favorite genres are Fantasy, Contemporary Fiction, and Mystery/Thrillers.";
    } 
}

function changeImageRight() {
    curr_img_idx = (curr_img_idx + 1) % img_list.length;
    carousel_img.src = img_list[curr_img_idx];
}

function changeImageLeft() {
    curr_img_idx = (curr_img_idx - 1 + img_list.length) % img_list.length;
    carousel_img.src = img_list[curr_img_idx];
}

function setActive () {
    let title = document.getElementById("title-card").getBoundingClientRect();
    let cols = document.getElementById("col_card").getBoundingClientRect();
    let carousel = document.getElementById("carousel").getBoundingClientRect();
    let img_back = document.getElementById("img-back").getBoundingClientRect();
    
    if(img_back.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
    } else if(carousel.top - nav.getBoundingClientRect().bottom <= 0) {
        document.getElementById("section4").className = "";
        document.getElementById("section3").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section1").className = "";
    } else if(cols.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section2").className = "active";
        document.getElementById("section1").className = "";
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
    } else if(title.top - nav.getBoundingClientRect().bottom <=0) {
        document.getElementById("section1").className = "active";
        document.getElementById("section2").className = "";
        document.getElementById("section3").className = "";
        document.getElementById("section4").className = "";
    }  else {
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
        document.getElementById("section1").style.fontSize = "1vw";
        document.getElementById("section2").style.fontSize = "1vw";
        document.getElementById("section3").style.fontSize = "1vw";
        document.getElementById("section4").style.fontSize = "1vw";
        document.getElementById("title").style.fontSize = "1.15vw";

    } else {
        document.getElementById("nav").style.height = "8vh";
        document.getElementById("section1").style.fontSize = "1.2vw";
        document.getElementById("section2").style.fontSize = "1.2vw";
        document.getElementById("section3").style.fontSize = "1.2vw";
        document.getElementById("section4").style.fontSize = "1.2vw";
        document.getElementById("title").style.fontSize = "1.5vw";
    }
}