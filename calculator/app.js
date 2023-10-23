let screen = document.getElementById("screen")
const buttons = document.querySelectorAll(".btn")
const equalBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clear")
const backBtn = document.querySelector(".back")

buttons.forEach(button =>
    button.addEventListener("click", function (e) {
        const value = e.currentTarget.dataset.value
        screen.value += value
    }))

equalBtn.addEventListener("click", function () {
    if (screen.value === "") {
        screen.value = ""
    }
    else {
        let answer = eval(screen.value)
        screen.value = answer
    }
})

clearBtn.addEventListener("click", function () {
    screen.value = ""
})


backBtn.addEventListener("click", function () {
    screen.value = screen.value.slice(0, -1)
})