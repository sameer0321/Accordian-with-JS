let heading = document.querySelectorAll(".accordian-header");


heading.forEach((e) => e.addEventListener("click", () => {
    let hide = e.classList.contains("active");
    heading.forEach((e) => {
        e.classList.remove("active");
    })
    if(!hide){
        e.classList.toggle("active");
    }
}))