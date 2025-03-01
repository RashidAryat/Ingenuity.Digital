const Main__Header__Burger__Toggle__Icon = document.querySelector(".Main__Header__Burger__Toggle__Icon");
const Main__Header__Navigation__Menu = document.querySelector(".Main__Header__Navigation__Menu");

Main__Header__Burger__Toggle__Icon.addEventListener("click", () => {
  Main__Header__Burger__Toggle__Icon.classList.toggle("active");
  Main__Header__Navigation__Menu.classList.toggle("active");
})

document.querySelectorAll(".Navigation__Links").forEach(n => n .addEventListener("click", () => {
  Main__Header__Burger__Toggle__Icon.classList.remove("active");
  Main__Header__Navigation__Menu.classList.remove("active");
}))