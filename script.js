let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,

    },
    {
        "question": "Welches Land ist nicht teilweise frankophon?",
        "answer_1": "Schweiz",
        "answer_2": "Kanada",
        "answer_3": "Nigeria",
        "answer_4": "Belgien",
        "right_answer": 3,

    },
    {
        "question": "Wer erfand die Glühbirne?",
        "answer_1": "James Watson",
        "answer_2": "Henry Bell",
        "answer_3": "Charles Darwin",
        "answer_4": "Thomas Edison",
        "right_answer": 4,

    },
    {
        "question": "Wer ist deutscher Rekordnationalspieler?",
        "answer_1": "Philipp Lahm",
        "answer_2": "Lothar Matthäus",
        "answer_3": "Miroslav Klose",
        "answer_4": "Gerd Müller",
        "right_answer": 2,

    },
    {
        "question": "Was ist das Ausgangsmaterial für eine CPU?",
        "answer_1": "Silicium",
        "answer_2": "Titanium",
        "answer_3": "Bronze",
        "answer_4": "Kupfer",
        "right_answer": 1,

    },
    {
        "question": "Wann wurde die Firma Nintendo gegründet?",
        "answer_1": "1885",
        "answer_2": "1910",
        "answer_3": "1948",
        "answer_4": "1971",
        "right_answer": 1,
    }
];

let rightAnswers = [];
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('total-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (GameisOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();

    }
}

function GameisOver() {
    return currentQuestion >= questions.length
}

function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('correctAnswers').innerHTML = rightAnswers.length;
    document.getElementById('header-image').src = 'img/brain result.png';
    document.getElementById('header-image').classList.add('scale-down');
    updateProgressBar();
}

function updateProgressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width:${percent}%`;
}

function updateToNextQuestion() {

    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}



function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {

        document.getElementById(selection).parentNode.classList.add('bg-success'); // .parentNode holt übergeordnetes Element
        AUDIO_SUCCESS.play();
        rightAnswers.length++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();

    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; //z.B.: von 0 auf 1
    document.getElementById('next-button').disabled = true;
    restAnswerButtons();
    showQuestion();



}

function restAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}

function newGame() {
    document.getElementById('header-image').src = 'img/background.jpg';
    document.getElementById('questionBody').style = ''; //Questionbody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; //Questionbody ausblenden
    rightAnswers = 0; // Variable wird nicht definiert (geschieht schon am Anfang), sondern wird nur überschrieben
    currentQuestion = 0;
    init();
}



