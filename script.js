const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".box1")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".box2")[0].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".about1"))

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".box3")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".box4")[0].classList.add("fadeInRight");
        }
    })
})

observer1.observe(document.querySelector(".about2"))


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".box5")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".box6")[0].classList.add("fadeInRight");
        }
    })
})

observer2.observe(document.querySelector(".about3"))