/* ================= toggle style dark and light===================================== */

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    daynight.querySelector("i").classList.add("fa-sun");
  } else {
    daynight.querySelector("i").classList.toggle("fa-moon");
  }
});

/* ====================================toggle style them changer=================================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("clicke",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternatestyle =document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
    alternatestyles.foreach(style) =>{
        if(color ===style.getattribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.removeAttribute("disabled","true");
        }
    }
}