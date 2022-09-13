const weirdbutton = document.querySelector("button");
console.log(weirdbutton);

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString
    document.body.style.backgroundColor = "#" + randomColor;
}

weirdbutton.addEventListener("click" , setBg);

