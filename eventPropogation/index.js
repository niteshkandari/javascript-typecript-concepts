const box = document.getElementById("box");
const btn = document.getElementById("btn");
const box_p = document.getElementById("box-title");
const btn_p = document.getElementById("btn-title");

box.addEventListener('click', (e) => {
    e.stopPropagation();

    box_p.innerHTML = "box clicked"
    console.log("box clicked")
})
btn.addEventListener('click',(e) => {
    e.stopPropagation();
    btn_p.innerHTML = "btn clicked"
    console.log("btn clicked")
})