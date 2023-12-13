import { generateQuiz} from "./helpers.js";

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operation = document.getElementById("operation");
const answers = document.querySelector(".answers");
const titleElement = document.getElementById("title");
const pointsElement = document.querySelector(".points");


const quizzes = [];

// HANDLE FUNCTIONS
function handleAnswer(e) {}

//UI FUNCTIONS
function renderQuiz(quiz, isView = true) {
	answers.innerHTML = "";

number1.innerText = quiz.number1;
number2.innerText = quiz.number2;
operation.innerText = quiz.operation;
titleElement.innerText  = quizzes.length;



//render answers
for(let answer of quiz.answers) {
	const answerElm = document.createElement("div");
	answerElm.className = "btn btn-outline-primary";
	answerElm.innerText = answer;
	answers.appendChild(answerElm);

	if(isView && quiz.answer === answer) {
answerElm.classList.replace("btn-outline-primary", `btn-${quiz.status}`);
	}

  const handleAnswer = () => {
		const isCorrect = answer === quiz.correctAnswer;
 const status = isCorrect ? "success" : "danger";

	answerElm.classList.replace("btn-outline-success", `btn-${status}`);

	quiz.answer = answer
 quiz.status = status;

 addPoint(quiz);
	if(quizzes.length !== 10) init();
else {
	answers.style.pointerEvents = "none";
	pointsElement.style.pointerEvents = "unset";
}
	};
answerElm.onclick = handleAnswer;



}
}


function addPoint(quiz) {

const point = document.createElement("div");
point.className = `point btn-${quiz.status}`;
point.innerText = quizzes.length;

point.onclick = () => {
	renderQuiz(quiz);
}


pointsElement.append(point);


}
//LOGIC FUNCTIONS


function init() {
	const quiz = generateQuiz();
	quizzes.push(quiz);
	renderQuiz(quiz);

}

init();