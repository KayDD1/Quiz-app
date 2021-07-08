const quizData = [
    {
        question: "What is the most used programming language for frontend development",
        a: "Javascript",
        b: "CSS",
        c: "Python",
        d: "Java",
        correct: "a",
    },
    {
        question: "Who is the president of US?",
        a: "Muhammed Buhari",
        b: "Donald Trump",
        c: "Kunle Adeseye",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "When is Christmas?",
        a: "December 25th",
        b: "October 15th",
        c: "January 1st",
        d: "February 24th",
        correct: "a",
    },
    {
        question: "What is the name of our galaxy?",
        a: "Neptulum Axis",
        b: "Croix Alley",
        c: "Milky Way",
        d: "Defenders Coast",
        correct: "c",
    },
    {
        question: "Who wrote the character Logen Ninefinger?",
        a: "Anne Rice",
        b: "Bradon Sanderson",
        c: "Joe Abercombie",
        d: "Patrick Rothfuss",
        correct: "c",
    },
]


questionEl = document.getElementById('questionEl')
const answerA = document.getElementById('answerElA')
const answerB = document.getElementById('answerElB')
const answerC = document.getElementById('answerElC')
const answerD = document.getElementById('answerElD')
const submitBtn = document.getElementById('submit')
const quizEl = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
     



let currentQuiz = 0;
let score = 0;

loadQuiz()


function loadQuiz(){
    deSelect()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    answerA.innerText = currentQuizData.a
    answerB.innerText = currentQuizData.b
    answerC.innerText = currentQuizData.c
    answerD.innerText = currentQuizData.d
}

function deSelect(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected(){
    let answer = undefined
answerEls.forEach(answerEl => {
   if(answerEl.checked){
       answer = answerEl.id
   } 
});
return answer;
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()

    if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++
      }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quizEl.innerHTML = `<p>You Scored ${score} / ${quizData.length} questions.</p>
            <button onclick="location.reload()">Reload</button>`
        }
    }
   
})



































// const answerEls = document.querySelectorAll('.answer')
// const questionEl= document.getElementById('questionEl')
// const a_text = document.getElementById('answer-optionA')
// const b_text = document.getElementById('answer-optionB')
// const c_text = document.getElementById('answer-optionC')
// const d_text = document.getElementById('answer-optionD')
// const submitBtn = document.querySelector('button')
// const quiz = document.getElementById('quiz')

// let score = 0;
// let currentQuiz = 0;

// loadQuiz()

// function loadQuiz(){
//     deselectAnswer()
//     const currentQuizData = quizData[currentQuiz]

//    a_text.innerText = currentQuizData.a
//    b_text.innerText = currentQuizData.b
//    c_text.innerText = currentQuizData.c
//    d_text.innerText = currentQuizData.d
//    questionEl.innerText = currentQuizData.question
// }

// function getSelected(){
//     let answer = undefined;
    

//     answerEls.forEach(answerEl => {
//        if(answerEl.checked){
//            answer = answerEl.id
//        }
//     });
//     return answer
// }
// function deselectAnswer(){
//     answerEls.forEach(answerEl => {
//        answerEl.checked = false
//      });  
// }

// submitBtn.addEventListener('click', ()=>{
//    const answer = getSelected()

//    if(answer){
//        if(answer === quizData[currentQuiz].correct){
//            score++;
//        }
   
//        currentQuiz++
   
//         if(currentQuiz < quizData.length){
//             loadQuiz()
//         }
//         else{
//             quiz.innerHTML = 
//             `<h2>You scored ${score} out of ${quizData.length} questions.</h2>
//             <button onclick="location.reload()">Reload</button>`

//         }

//    }  
// })

