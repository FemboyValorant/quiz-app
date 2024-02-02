


var q1 = {
    question: "What is on this dog's head?",
    a: 'A Top Hat',
    b: 'Butter',
    c: 'Watermelon',
    d: 'Fear',
    correct: 'Butter',
    user: '',
    number: 'Question 1',
    image: 'images/butterdog.jpg'
}

var q2 = {
    question: "What type is this Pokemon?",
    a: 'Water',
    b: 'Fairy',
    c: 'Ice',
    d: 'Fire',
    correct: 'Water',
    user: '',
    number: 'Question 2',
    image: 'images/Palafin.png',
}

var q3 = {
    question: "What is the name of this Valorant skinline?",
    a: 'Prelude to Chaos',
    b: 'Dark Core',
    c: 'Dystopia of Loss',
    d: 'Black Ice',
    correct: 'Prelude to Chaos',
    user: '',
    number: 'Question 3',
    image: 'images/Vandal.jpg',
}

var questions = [q1,q2,q3]

var currentQuestion = -1

var nextQuestion = document.querySelector('input[value="Next"]')
var prevQuestion = document.querySelector('input[value="Previous"]')

function updateQuestion(){
    document.getElementsByClassName("question")[0].innerHTML = questions[currentQuestion].question

    document.getElementsByClassName("answer a")[0].innerHTML = questions[currentQuestion].a
    document.getElementsByClassName("answer b")[0].innerHTML = questions[currentQuestion].b
    document.getElementsByClassName("answer c")[0].innerHTML = questions[currentQuestion].c
    document.getElementsByClassName("answer d")[0].innerHTML = questions[currentQuestion].d

    document.getElementsByClassName("selection")[0].innerHTML = 'Your current selection is "' + questions[currentQuestion].user + '"'

    document.getElementsByClassName("question-number")[0].innerHTML = questions[currentQuestion].number

    document.getElementsByClassName("media")[0].src = questions[currentQuestion].image;

    if (currentQuestion == 0){
        document.querySelector('input[value="Previous"]').classList.add("inactive")
    }

    else if (currentQuestion == 2){
        document.querySelector('input[value="Next"]').classList.add("inactive")
    }

    else{
        document.querySelector('input[value="Previous"]').classList.remove("inactive")
        document.querySelector('input[value="Next"]').classList.remove("inactive")
    }
}

nextQuestion.addEventListener('click', function(evt){
    if (currentQuestion < 2 && questions[currentQuestion].user != ''){ 
        currentQuestion += 1
    
    updateQuestion()
    }
})

prevQuestion.addEventListener('click', function(evt){
    if (currentQuestion > 0){ 
        currentQuestion -= 1

    updateQuestion()
    }
})

var start = document.getElementsByClassName("start")[0]
start.addEventListener('click', function(evt){
    if (currentQuestion == -1){ 
        currentQuestion += 1
    

    document.getElementsByClassName("quiz")[0].style.display="block"
    document.getElementsByClassName("start")[0].style.display="none"

    updateQuestion()
    }
})

var answerA = document.getElementsByClassName("answer a")[0]
answerA.addEventListener('click', function(evt){
    questions[currentQuestion].user = questions[currentQuestion].a
    document.getElementsByClassName("selection")[0].innerHTML = 'Your current selection is "' + questions[currentQuestion].user + '"'
})

var answerB = document.getElementsByClassName("answer b")[0]
answerB.addEventListener('click', function(evt){
    questions[currentQuestion].user = questions[currentQuestion].b
    document.getElementsByClassName("selection")[0].innerHTML = 'Your current selection is "' + questions[currentQuestion].user + '"'
})

var answerC = document.getElementsByClassName("answer c")[0]
answerC.addEventListener('click', function(evt){
    questions[currentQuestion].user = questions[currentQuestion].c
    document.getElementsByClassName("selection")[0].innerHTML = 'Your current selection is "' + questions[currentQuestion].user + '"'
})

var answerD = document.getElementsByClassName("answer d")[0]
answerD.addEventListener('click', function(evt){
    questions[currentQuestion].user = questions[currentQuestion].d
    document.getElementsByClassName("selection")[0].innerHTML = 'Your current selection is "' + questions[currentQuestion].d + '"'
})

var submit = document.querySelector('input[value="Submit Quiz"]')

var numCorrect = 0

submit.addEventListener('click', function(evt){
    if (questions[currentQuestion].user != ''){
        document.getElementsByClassName("result 1")[0].innerHTML = questions[0].user

        document.getElementsByClassName("result 2")[0].innerHTML = questions[1].user

        document.getElementsByClassName("result 3")[0].innerHTML = questions[2].user

        for (let i = 0; i <= 2; i++)
        {
            if (questions[i].user == document.getElementsByClassName("correct " + (i + 1))[0].innerHTML){
                document.getElementsByClassName("result " + (i + 1))[0].style.color = "green"
                numCorrect++
            }

            else {
                document.getElementsByClassName("result " + (i + 1))[0].style.color = "red"
            }
            
        }

        document.getElementsByClassName("youGot")[0].innerHTML = 'You got ' + numCorrect + ' out of 3 questions correct!'

        document.getElementsByClassName("results")[0].style.display="flex"
        document.getElementsByClassName("quiz")[0].style.display="none"
    }
})