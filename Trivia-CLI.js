// Create readline to enable user interactivity 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Create the Array of Trivia Questions
const triviaQuestion = [
    { 
        question: "Which CLI command prints the current working directory?",
        options: ["A) ls", "B) cd", "C) pwd", "D) mdir"], 
        answer: "C"
    },

    { 
        question: "Which command lists all files and folders in a directory including hidden ones?",
        options: ["A) ls", "B) ls -la", "C) dir -all", "D) show -hidden"], 
        answer: "B"
    },

    { 
        question: "Which command is used to move a file or directory to a new location in the terminal?",
        options: ["A) mv", "B) transfer", "C) cp", "D) move"], 
        answer: "A"
    },

    { 
        question: "Which command is used to create a new empty file in the terminal?",
        options: ["A) mk file.txt", "B) new file.txt", "C) create file.txt", "D) touch file.txt"], 
        answer: "D"
    },

    { 
        question: "What does the 'cd ..' command do?",
        options: ["A) Deletes the current directory", "B) Moves up one level to the parent directory", "C) Creates a new directory", "D) Copies the current directory"], 
        answer: "B"
    }
  
];
console.log(triviaQuestion);

// Create a variable to track the correct answers scores
let score = 0

// Create functions that display the questions and options 
function displayQuestion(question, index) {
    console.log("\nQuestion " + (index + 1) + ": " + question)
}

function displayOptions(options) {
    options.forEach(function(option) {
        console.log("  " + option)
    })
}

