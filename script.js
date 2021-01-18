const quizPlot = [
    {
        question:'Who is the first president in Sri Lanka?',
        a: 'William Gopallawa',
        b: 'Ranasinghe Premadasa',
        c: 'J. R. Jayewardene',
        d: 'Chandrika Kumaratunga',
        correct: 'a',
    },
    {
        question: 'What is the largest country in the world?',
        a:'USA',
        b:'China',
        c:'Russia',
        d:'Canada',
        correct:'c',
    },
    {
        question:'Who was the man of the match in 2011 world cup?',
        a:'Mahela Jayawardena',
        b:'Virat Kholi',
        c:'Kumara Sangakkara',
        d:'M.S. Dhoni',
        correct:'d',
    },
    {
        question:'Hitler party which came into power in 1933 is known as?',
        a:'Labour Party',
        b:'Nazi Party',
        c:'Ku-Klux-Klan',
        d:'Democratic Party',
        correct:'b',
    },
    {
        question: "World's busiest airports by passenger traffic is?",
        a: 'Hartsfield-Jackson Atlanta International Airport, USA',
        b: 'Lhasa Airport, Tibet',
        c: 'King Abdul Aziz International Airport, Saudi Arabia',
        d: "Chicago O' Hare International Airport, USA",
        correct:'a',
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const bttnEl = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectedanswer();

    const currentQuizData = quizPlot[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    text_a.innerText = currentQuizData.a;
    text_b.innerText = currentQuizData.b;
    text_c.innerText = currentQuizData.c;
    text_d.innerText = currentQuizData.d;
}

function getSelected(){
    let answer= undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer= answerEl.id;
        }
    });
    return answer;
}

function deselectedanswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

bttnEl.addEventListener("click", () => {
    const answer = getSelected();
    
     if(answer){
        if(answer === quizPlot[currentQuestion].correct)
         {
             score++;
         }

        currentQuestion++;
        if(currentQuestion<quizPlot.length){
            loadQuiz();
        
        }else{
            quiz.innerHTML=`<h2 id="plot">You have answered correctly at ${score}/${quizPlot.length} questions.</h2> 
            <button onclick= "location.reload()">Reload</button>`;
         }
     }
});
