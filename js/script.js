

//   function toggleMenu() {
//     const nav = document.getElementById("mainNav");
//     nav.classList.toggle("open");
//   }


// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })


// عند الضغط على زر القائمة يتم فتح أو إغلاق الـ navbar
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("open");
}

// إغلاق القائمة بعد الضغط على أحد الروابط
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#mainNav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      nav.classList.remove("open");
    });
  });
});

// إظهار زر الرجوع للأعلى عند التمرير
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
