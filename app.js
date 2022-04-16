// VARIABLES
let mainBox = document.querySelector(".main_box");
let imgs = document.querySelectorAll(".img");
let modal = document.querySelector(".modal");
let images = [
  "https://images.unsplash.com/photo-1606267911502-d7a554af2b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1649863198351-227327722058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1649866952420-c73b91524d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1649864735550-ba62b65226a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
];
let count = 0;

modal.addEventListener("click", function () {
  modal.style.display = "none";
});
imgs.forEach(function (img) {
  img.style.backgroundImage = `url(${images[count]})`;
  count++;
  let imgIndex = (img.id = count - 1);
  img.addEventListener("click", function (event) {
    modal.style.display = "initial";
    modal.style.backgroundImage = `url(${images[imgIndex]})`;
  });
});
