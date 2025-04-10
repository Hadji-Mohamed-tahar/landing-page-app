// let btn=document.querySelector("span");
// let nav=document.querySelector("nav");
// let ul=document.querySelector("ul");

// btn.addEventListener("click",function(){
//     nav.classList.toggle("active-nav");
//     ul.classList.toggle("active-ul");

// });

  function toggleMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("open");
  }



// ___________________________
//
// ___________________________
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})