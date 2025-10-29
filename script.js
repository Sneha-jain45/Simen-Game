let gameSeq=[]
let userSeq=[]

let btns=["orange","pink","voilet","blue"]

let started=false
let level=0
let h3=document.querySelector("h3")

document.addEventListener("keypress",()=>{
    if(started==false)
    {
        started=true
        levelUp()
    }

})

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function levelUp(){
    userSeq=[]
    level++;
    h3.innerText=`Level ${level}`

    let randInd=Math.floor(Math.random()*3)
    let randColor=btns[randInd]
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnflash(randBtn)
}


function btnPress(){
    let btn=this
    btnflash(btn)

    userColor=btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
}

function checkAns(ind){
    
    if(userSeq[ind]==gameSeq[ind]){
        // console.log("same value")
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
    else{
        h3.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to restart`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset()
    }
}

// checkAns()

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
}
