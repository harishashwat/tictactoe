console.log("Welcome to Tic Tac Toe")
let music = new Audio("naan.mp3")
let audioTurn = new Audio("ting_1-47612.mp3")
let gameover = new Audio("Game Over.mp3")
let isgameover = false;
let turn = "X"

//Function to change the turn
const changeturn = ()=>{
    return turn === "X"?"0":"X";
}

//Function to check for a win
const checkwin = ()=>{
    let boxters = document.getElementsByClassName("boxter")
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxters[e[0]].innerText === boxters[e[1]].innerText)  && (boxters[e[2]].innerText === boxters[e[1]].        innerText) && (boxters[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxters[e[0]].innerText + " Won "
        isgameover = true
            document.querySelector(".img").getElementsByTagName("img")[0].style.width = "300px"
            document.querySelector(".line").style.transform = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game logic

    music.play(true)

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxter = element.querySelector(".boxter")
    element.addEventListener("click",()=>{
        if(boxter.innerText === ''){
            boxter.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;  
                
            }
        }
    })
})

// add on click listener to reset
reset.addEventListener('click',()=>{
    let boxter = document.querySelectorAll(".boxter")
    Array.from(boxter).forEach(element=>{
        element.innerText = ''
    })
    turn = "X"
    isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;  
        document.querySelector(".img").getElementsByTagName("img")[0].style.width = "0px"
})