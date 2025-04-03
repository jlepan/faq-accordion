const drop = document.querySelectorAll(".flex-title");

drop.forEach(title => {
    title.addEventListener("click", () => {

        const signMore = title.querySelector(".more");
        const signLess = title.querySelector(".less");
        const text = title.nextElementSibling
    
        if (signMore.classList.contains("active")) {
            signMore.classList.remove("active");
            signLess.classList.add("active");
            text.classList.add("active")
        } else {
            signMore.classList.add("active");
            signLess.classList.remove("active");
            text.classList.remove("active")
        }
    })
})