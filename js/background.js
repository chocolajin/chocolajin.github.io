const colors = [
    "0deg, #D9AFD9 0%, #97D9E1 100%",
    "180deg, #A9C9FF 0%, #FFBBEC 100%",
    "0deg, #FFDEE9 0%, #B5FFFC 100%",
    "to right, #fc5c7d, #6a82fb",
    "19deg, #FAACA8 0%, #DDD6F3 100%",
    "to right, #CB3066, #16BFFD",
    "to right, #c2e59c, #64b3f4",
    "62deg, #8EC5FC 0%, #E0C3FC 100%",
]

const chosenColor = colors[Math.floor(Math.random()*colors.length)];
const body = document.querySelector('body')

body.style.backgroundImage =`linear-gradient(${chosenColor})`;