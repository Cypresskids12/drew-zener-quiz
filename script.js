let score = 0;
let points = 10;

let question = document.body.childNodes; // list of questions
let questionIterator = 3; 

function correct(button){
    score+=points; // adds 10 to the score
    button.style.backgroundColor = "green";
    let answers = button.parentNode; // parent of the button (div)
    let siblings = answers.childNodes; // list of other buttons 
    siblings.forEach(answer => {
        answer.disabled = true; // disable each button 
    });
    questionIterator+=2;
    question[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}
function incorrect(button){
    score-=points; // subtracts 10 from the score
    button.style.backgroundColor = "red";
    let answers = button.parentNode; // parent of the button (div)
    let siblings = answers.childNodes; // list of other buttons 
    siblings.forEach(answer => {
        answer.disabled = true; // disable each button 
    });
    questionIterator+=2;
    question[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function calculateScore(button){
    if(score <= 100 && score >= 90){
        grade = 'A';
    }else if(score < 90 && score >= 80){
        grade = 'B'
    }else if(score < 80 && score >= 70){
        grade = 'C'
    }else if(score < 70 && score >= 60){
        grade = 'D'
    }else if(score <170 && score >= 110){
        grade = 'A+'
    }else{
        grade = 'F'
    }
    button.innerHTML = grade + ": " + score;
}