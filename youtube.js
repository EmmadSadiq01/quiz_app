
window.onload = function(){
    show(0)
}

questions = [{
    id: 1,
    question: "What is linux",
    answer: "operating system",
    options: [
        "operating system",
        "Game",
        "Software",
        "Language"
    ]
},
{
    id: 2,
    question: "What is Kernel",
    answer: "Game",
    options: [
        "Game",
        "operating system",
        "Software",
        "Language"
    ]
},
{
    id: 3,
    question: "What is Ubunto",
    answer: "software",
    options: [
        "operating system",
        "Game",
        "Language",
        "software"
    ]
},
{
    id: 4,
    question: "What is Command",
    answer: "language",
    options: [
        "language",
        "operating system",
        "Game",
        "Software"
    ]
},

]
let score = 0
let question_count = 0

let sec = 0;
let min = 0;

let interval = null

let displaysec = 0;
let displaymin = 0;

function next(){
    check(question_count)
    question_count++;
    show(question_count)


}
function show(count){
    let question = document.getElementById("question");
    question.innerHTML = `<h2>${questions[count].question}</h2>
                    <ul class="option_group">
                        <li class="option">${questions[count].options[0]}</li>
                        <li class="option">${questions[count].options[1]}</li>
                        <li class="option">${questions[count].options[2]}</li>
                        <li class="option">${questions[count].options[3]}</li>
                    </ul> `
    addactiveclass()
}
function addactiveclass(){
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i<option.length ; i++){
        option[i].onclick = function(){
            for(let j = 0;j<option.length;j++){
                option[j].classList.remove("active")
                
            }
            option[i].classList.add("active")
        }
    }

}
function check(count){
    let check = document.getElementsByClassName("active")
    if (check[0].innerHTML === questions[count].answer){
        score +=10
    }
    else{
        return
    }
}
function timer() {

    sec += 1;
    if (sec >= 60) {
        min += 1;
        sec = 0
    }
    if (sec < 10) {
        displaysec = "0" + sec
    }
    else {
        displaysec = sec
    }
    if (min < 10) {
        displaymin = "0" + min
    }
    else {
        displaymin = min
    }
    document.getElementById('display').innerHTML = displaymin + ":" + displaysec

}
if (min < 1){

    interval = window.setInterval(timer, 1000);
    console.log(displaymin)
}
else{
    // interval = window.clearInterval(interval);
    console.log("stop")

}
if(question_count>=4){
    console.log("stop")
}
