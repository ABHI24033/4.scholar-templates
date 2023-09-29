
// Menu section
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
// menu section end
// ====================================================
// Accordian in about section 

const accordian=document.querySelectorAll(".accordian");

accordian.forEach(accordian=>{
    const answer=accordian.querySelector(".answer");
    const icon=accordian.querySelector(".icon");
    accordian.addEventListener("click",()=>{
        answer.classList.toggle("active");
        // icon.classList.toggle('-');
        if(answer.classList.contains('active')){
            icon.innerHTML="-";
        }else{
            icon.innerHTML="+";
        }
    })
})

// accordian section end.
// ===========================================