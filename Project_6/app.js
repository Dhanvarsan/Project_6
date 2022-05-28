let nav_h = document.getElementById('nav_h')
let nav_p = document.getElementById('nav_p')

function btn1() {
    nav_h.innerHTML = "Tab #1 with soft transitioning effect."
    nav_p.innerHTML = `Dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient
    montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean euismod bibendum laoreet.
    `
}

function btn2() {
    nav_h.innerHTML = "Tab #2 with soft transitioning effect."
    nav_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient
    montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean euismod bibendum laoreet.
    `
}

function btn3() {
    nav_h.innerHTML = "Tab #3 with soft transitioning effect."
    nav_h.style.transitionDuration = "1s"
    nav_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient
    montes.
    \n Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean euismod bibendum laoreet.
    `
}
let nav = document.getElementById('nav')
nav.addEventListener("click", e => {
    e.preventDefault()
})