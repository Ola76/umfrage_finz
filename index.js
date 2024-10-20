const questions = [
    {
        "question": "What are examples of wealth?",
        "answers": [
            {"text": "Money and property", "correct": true},
            {"text": "Toys and candy", "correct": false},
            {"text": "School books and Clubs", "correct": false},
            {"text": "Holidays and Luxury", "correct": false}
        ]
    },
    {
        "question": "Which action helps you build wealth?",
        "answers": [
            {"text": "Spending all your money", "correct": false},
            {"text": "Saving and investing", "correct": true},
            {"text": "Borrowing from others", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does risk management help you do?",
        "answers": [
            {"text": "Increase risks", "correct": false},
            {"text": "Identify and reduce risks", "correct": true},
            {"text": "Ignore risks", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an example of a goal?",
        "answers": [
            {"text": "Watching TV", "correct": false},
            {"text": "Saving $50", "correct": true},
            {"text": "Going to the store", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is one reason people fail to create wealth?",
        "answers": [
            {"text": "They invest wisely", "correct": true},
            {"text": "They spend without thinking", "correct": false},
            {"text": "They set financial goals", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an example of an income source?",
        "answers": [
            {"text": "Salary from a job", "correct": true},
            {"text": "Spending on luxury", "correct": false},
            {"text": "Buying groceries", "correct": false},
            {"text": "Taking a vacation", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a form of passive income?",
        "answers": [
            {"text": "Rental property income", "correct": true},
            {"text": "Salary from a job", "correct": false},
            {"text": "Spending on entertainment", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a budget used for?",
        "answers": [
            {"text": "Tracking income and expenses", "correct": true},
            {"text": "Spending without limits", "correct": false},
            {"text": "Increasing debt", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is compound interest?",
        "answers": [
            {"text": "Interest earned on both the initial principal and the interest", "correct": true},
            {"text": "Interest earned only on the principal", "correct": false},
            {"text": "A penalty for saving money", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an asset?",
        "answers": [
            {"text": "A car you own", "correct": true},
            {"text": "Credit card debt", "correct": false},
            {"text": "A vacation", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Why is diversification important in investing?",
        "answers": [
            {"text": "It reduces risk", "correct": true},
            {"text": "It increases risk", "correct": false},
            {"text": "It guarantees returns", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a liability?",
        "answers": [
            {"text": "A debt or obligation", "correct": true},
            {"text": "An asset you own", "correct": false},
            {"text": "A luxury item", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of an emergency fund?",
        "answers": [
            {"text": "To cover unexpected expenses", "correct": true},
            {"text": "To spend on luxury items", "correct": false},
            {"text": "To invest in risky assets", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does inflation do?",
        "answers": [
            {"text": "Reduces the purchasing power of money", "correct": true},
            {"text": "Increases the purchasing power of money", "correct": false},
            {"text": "Has no effect on money", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an example of a fixed expense?",
        "answers": [
            {"text": "Rent or mortgage payment", "correct": true},
            {"text": "Entertainment costs", "correct": false},
            {"text": "Groceries", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of these is a form of debt?",
        "answers": [
            {"text": "Credit card balance", "correct": true},
            {"text": "Salary from a job", "correct": false},
            {"text": "Savings account", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is one benefit of paying off debt early?",
        "answers": [
            {"text": "You save on interest", "correct": true},
            {"text": "You increase your debt", "correct": false},
            {"text": "It increases your credit score", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does credit score measure?",
        "answers": [
            {"text": "Your creditworthiness", "correct": true},
            {"text": "Your income level", "correct": false},
            {"text": "Your savings", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Why is it important to have financial goals?",
        "answers": [
            {"text": "It helps guide your spending and saving", "correct": true},
            {"text": "It guarantees wealth", "correct": false},
            {"text": "It prevents risk", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an example of a long-term financial goal?",
        "answers": [
            {"text": "Retirement savings", "correct": true},
            {"text": "Buying groceries", "correct": false},
            {"text": "Paying monthly bills", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "How can you reduce debt?",
        "answers": [
            {"text": "By making extra payments", "correct": true},
            {"text": "By ignoring it", "correct": false},
            {"text": "By taking on more loans", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a diversified portfolio?",
        "answers": [
            {"text": "A mix of different investments", "correct": true},
            {"text": "Only stocks", "correct": false},
            {"text": "Only real estate", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does a financial advisor do?",
        "answers": [
            {"text": "Helps you plan your finances", "correct": true},
            {"text": "Tells you how to spend your money", "correct": false},
            {"text": "Ignores your financial goals", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a key advantage of home ownership?",
        "answers": [
            {"text": "Building equity", "correct": true},
            {"text": "Renting forever", "correct": false},
            {"text": "Increased debt", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a stock?",
        "answers": [
            {"text": "A share of ownership in a company", "correct": true},
            {"text": "A type of loan", "correct": false},
            {"text": "A debt obligation", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of life insurance?",
        "answers": [
            {"text": "To provide financial protection to beneficiaries", "correct": true},
            {"text": "To increase your savings", "correct": false},
            {"text": "To avoid taxes", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a retirement account?",
        "answers": [
            {"text": "An account that helps you save for retirement", "correct": true},
            {"text": "An account used for daily expenses", "correct": false},
            {"text": "A loan account", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a mutual fund?",
        "answers": [
            {"text": "A pool of funds collected from many investors", "correct": true},
            {"text": "A type of loan", "correct": false},
            {"text": "A government bond", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a tax-deferred account?",
        "answers": [
            {"text": "Traditional IRA", "correct": true},
            {"text": "Checking account", "correct": false},
            {"text": "Credit card", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is the primary purpose of a will?",
        "answers": [
            {"text": "To distribute your assets after death", "correct": true},
            {"text": "To avoid paying taxes", "correct": false},
            {"text": "To increase savings", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is diversification in investing?",
        "answers": [
            {"text": "Investing in different asset types", "correct": true},
            {"text": "Putting all money in one stock", "correct": false},
            {"text": "Only buying real estate", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a bond?",
        "answers": [
            {"text": "A loan made to a corporation or government", "correct": true},
            {"text": "Ownership in a company", "correct": false},
            {"text": "A type of insurance", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is net worth?",
        "answers": [
            {"text": "The difference between assets and liabilities", "correct": true},
            {"text": "Your annual salary", "correct": false},
            {"text": "Your monthly expenses", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Why is an emergency fund important?",
        "answers": [
            {"text": "To cover unexpected expenses", "correct": true},
            {"text": "To pay for luxury vacations", "correct": false},
            {"text": "To increase debt", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a checking account?",
        "answers": [
            {"text": "To manage everyday transactions", "correct": true},
            {"text": "To earn high interest", "correct": false},
            {"text": "To save for retirement", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of the following is a good credit habit?",
        "answers": [
            {"text": "Paying bills on time", "correct": true},
            {"text": "Maxing out credit cards", "correct": false},
            {"text": "Ignoring credit reports", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an investment portfolio?",
        "answers": [
            {"text": "A collection of investments", "correct": true},
            {"text": "A retirement account", "correct": false},
            {"text": "A debt repayment plan", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of these is a liability?",
        "answers": [
            {"text": "A car loan", "correct": true},
            {"text": "A savings account", "correct": false},
            {"text": "A piece of jewelry", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does APR stand for?",
        "answers": [
            {"text": "Annual Percentage Rate", "correct": true},
            {"text": "Asset Performance Rating", "correct": false},
            {"text": "Average Profit Return", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is an ETF?",
        "answers": [
            {"text": "Exchange Traded Fund", "correct": true},
            {"text": "Equity Transfer Fund", "correct": false},
            {"text": "Emergency Transfer Fund", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a dividend?",
        "answers": [
            {"text": "A portion of a company's earnings paid to shareholders", "correct": true},
            {"text": "A type of loan", "correct": false},
            {"text": "A savings account bonus", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which type of insurance covers damage to your car?",
        "answers": [
            {"text": "Auto insurance", "correct": true},
            {"text": "Life insurance", "correct": false},
            {"text": "Health insurance", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is the goal of retirement planning?",
        "answers": [
            {"text": "To save enough for living expenses after retirement", "correct": true},
            {"text": "To spend more money now", "correct": false},
            {"text": "To avoid saving", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is credit utilization?",
        "answers": [
            {"text": "The percentage of your available credit you're using", "correct": true},
            {"text": "Your total credit limit", "correct": false},
            {"text": "The amount of debt you owe", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Which of these is an appreciating asset?",
        "answers": [
            {"text": "Real estate", "correct": true},
            {"text": "A car", "correct": false},
            {"text": "Electronics", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a credit report?",
        "answers": [
            {"text": "A detailed report of your credit history", "correct": true},
            {"text": "Your savings account statement", "correct": false},
            {"text": "Your tax return", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "Why is compound interest beneficial for savings?",
        "answers": [
            {"text": "It helps your money grow faster over time", "correct": true},
            {"text": "It decreases the value of savings", "correct": false},
            {"text": "It is a penalty for saving", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What does diversification do?",
        "answers": [
            {"text": "Reduces risk by spreading investments", "correct": true},
            {"text": "Increases risk by concentrating investments", "correct": false},
            {"text": "Eliminates risk completely", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    },
    {
        "question": "What is a credit card's interest rate called?",
        "answers": [
            {"text": "APR (Annual Percentage Rate)", "correct": true},
            {"text": "Inflation rate", "correct": false},
            {"text": "Stock price", "correct": false},
            {"text": "No idea", "correct": false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startQuizButton = document.getElementById("start-quiz-btn");
const quizSection = document.getElementById("quiz");
const introText = document.getElementById("intro-text");
const experienceText = document.getElementById("experience-text");
const supportText = document.getElementById("support-text");

// Event listener to show the quiz and hide the intro when the button is clicked
startQuizButton.addEventListener("click", () => {
    quizSection.style.display = "block"; // Show the quiz section
    introText.style.display = "none"; // Hide introductory text
    experienceText.style.display = "none"; // Hide experience text
    supportText.style.display = "none"; // Hide support text
    startQuiz(); // Start the quiz function
    startQuizButton.style.display = "none"; // Hide the start quiz button
});

let currentQuestionIndex = 0;
let score = 0;

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffle(questions); // Shuffle the questions
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle the answers before displaying them
    shuffle(currentQuestion.answers); // Shuffle the answer options

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `${index + 1}: ${answer.text}`; // Label answers as 1, 2, 3, or 4
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();