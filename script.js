

function openNav(){
    const bars=document.getElementById("bars")
    const x=document.getElementById("x");
    const menu=document.getElementById("menu");
    const logo=document.getElementById("logo");
    bars.style.display="none";
    x.style.display="block";
    menu.style.top="0rem";
    logo.style.color="black";
}

function CloseNav(){
    const bars=document.getElementById("bars")
    const x=document.getElementById("x");
    const menu=document.getElementById("menu");
    const logo=document.getElementById("logo");
    bars.style.display="block";
    x.style.display="none";
    menu.style.top="-60rem";
    logo.style.color="white";
}