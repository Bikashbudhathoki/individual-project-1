const questions = [
    {
        question: "What is the function of a firewall in a computer network",
        answers: [
            { text: "It prevents unauthorized access to or from a private network", correct: true},
            { text: " It accelerates network traffic", correct: false},
            { text: " It controls the speed of the internet connection", correct: false},
            { text: "It enhance the resolution of netwoork issues", correct: false},
        ]
    },
    {
        question: "Which programming language is commonly used for creating Android applications?",
        answers: [
            { text: "Java", correct: true},
            { text: "C++", correct: false},
            { text: "Python", correct: false},
            { text: "Ruby", correct: false},
        ]
    },
    {
        question: "What is the purpose of an IP address?",
        answers: [
            { text: "To identify a user's internet service provider", correct: false},
            { text: "To uniquely identify a device on a network", correct: true},
            { text: "To control internet access in a local area network", correct: false},
            { text: "To encrypt data transmitted over a network", correct: false},
        ]
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        answers: [
            { text: " To increase internet speed", correct: false},
            { text: "To access geographically restricted websites", correct: true},
            { text: "To block unwanted emails", correct: false},
            { text: "To clean the cache of the computer system", correct: false},
        ]
    },
    {
        question: "Which company developed the programming language Python?",
        answers: [
            { text: "Microsoft", correct: false},
            { text: " IBM", correct: false},
            { text: "Google", correct: false},
            { text: "Dropbox", correct: true},
        ]
    },
    {
        question: "What is the purpose of a DNS (Domain Name System)?",
        answers: [
            { text: "To convert domain names to IP addresses", correct: true},
            { text: "To encrypt internet traffic", correct: false},
            { text: "To scan for malware in websites", correct: false},
            { text: "To host websites", correct: false},
        ]
    },
    {
        question: "What is the main function of a database management system (DBMS)?",
        answers: [
            { text: "To design computer networks", correct: false},
            { text: "To create algorithms", correct: false},
            { text: "To manage and organize data", correct: true},
            { text: " To generate user interfaces", correct: false},
        ]
    },
    {
        question: "What is the purpose of an operating system in a computer?",
        answers: [
            { text: "To manage hardware and software resources", correct: true},
            { text: "To create web pages", correct: false},
            { text: "To encrypt sensitive files", correct: false},
            { text: "To develop software applications", correct: false},
        ]
    },
    {
        question: "Which of the following is a widely used cloud computing service provided by Amazon?",
        answers: [
            { text: "Azure", correct: false},
            { text: "Google Cloud", correct: false},
            { text: "AWS (Amazon Web Services)", correct: true},
            { text: "Salesforce", correct: false},
        ]
    },
    {
        question: "Which programming language is used for creating dynamic web pages?",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "JavaScript", correct: true},
            { text: "XML", correct: false},
        ]
    },
    {
        question: "What is the purpose of a router in a computer network?",
        answers: [
            { text: "To provide power to network devices", correct: false},
            { text: "To connect multiple networks together", correct: true},
            { text: "To store data temporarily", correct: false},
            { text: "To scan for malware", correct: false},
        ]
    },
    {
        question: "Which of the following programming languages is used for building scalable network applications?",
        answers: [
            { text: "Python", correct: false},
            { text: "Ruby", correct: false},
            { text: "Node.js", correct: true},
            { text: "Swift", correct: false},
        ]
    },
    {
        question: "What is the purpose of a proxy server in a computer network?",
        answers: [
            { text: "To accelerate internet speed", correct: false},
            { text: "To filter incoming network traffic", correct: true},
            { text: "To encrypt all data packets", correct: false},
            { text: "To generate IP addresses", correct: false},
        ]
    },
    {
        question: "Which protocol is commonly used for secure data transmission over the internet?",
        answers: [
            { text: "HTTP", correct: false},
            { text: "FTP", correct: false},
            { text: "HTTPS", correct: true},
            { text: "SMTP", correct: false},
        ]
    },
    {
        question: "What is the role of a compiler in software development?",
        answers: [
            { text: "To debug software programs", correct: false},
            { text: "To manage software licenses", correct: false},
            { text: "To optimize internet speed", correct: false},
            { text: "To translate source code into machine code", correct: true},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuuestion(); 
}

function showQuuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo  + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButttons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetstate(){
    nextButton.style.display = "none";
    while(answerButttons.firstChild){
        answerButttons.removeChild(answerButttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrrect = selectedBtn.dataset.correct === "true";
    if(iscorrrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showscore(){
    resetstate();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})




startQuiz();