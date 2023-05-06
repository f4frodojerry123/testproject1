// 選單bar toggle
let nav_btn = document.getElementById("nav_btn")
let nav = document.querySelectorAll(".nav")
nav_btn.addEventListener("click", function (e) {
    nav.forEach(element => {
        element.classList.toggle("on")
    });

})

// resize adjust
let width = screen.width
window.addEventListener("resize", function () {
    width = screen.width
    console.log(width);
    if (width <= 375) {
        nav.forEach(element => {
            element.classList.remove("on")
        });
    }
})

// speaker bg/btn/shadow
let speakers = document.querySelectorAll(".speaker")
speakers.forEach(element => {
    element.addEventListener("mouseenter", function (e) {
        let shadow = e.target
        let img = e.target.querySelector(".arrow")
        shadow.classList.add("shadow")
        img.src = "./img/btn_green.png"

    })
    element.addEventListener("mouseleave", function (e) {
        let shadow = e.target
        let img = e.target.querySelector(".arrow")
        shadow.classList.remove("shadow")
        img.src = "./img/btn_gray.png"

    })
})

// slide
let left_num = 500
let right_num = 1100
let left_text = document.getElementById("left_t")
let right_text = document.getElementById("right_t")
window.addEventListener("scroll", function () {
    let ScrollPosition = window.scrollY;
    console.log(ScrollPosition);

    if (width > 428) {
        left_num += 3000
        right_num = 3100
    }
    if (ScrollPosition > left_num) {
        left_text.classList.add("left")
    }
    if (ScrollPosition > right_num) {
        right_text.classList.add("right")
    }

})


// api

function data() {
    
    let pic = document.querySelectorAll(".pic2>img")
    let name = document.querySelectorAll(".info>h2")
    console.log(name);
    let email = document.querySelectorAll(".info>p")
    console.log(email);
    axios.get('https://randomuser.me/api/?results=4&')
    .then(res => {

        let arr = res.data.results
        console.log(arr[0]);
        for (let i = 0; i < arr.length; i++) {
            pic[i].src = arr[i].picture.large
            name[i].innerHTML = arr[i].name.first + '<br>'+ arr[i].name.last
            email[i].innerHTML =  arr[i].email
            
        }
    })
    .catch(err => console.log(err))
};
data()


