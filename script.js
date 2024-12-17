const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correctIndex: 0
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<script>",
            "<css>",
            "<style>",
            "<link>"
        ],
        correctIndex: 2
    },
    {
        question: "What is the default display value of the <div> element?",
        options: [
            "inline",
            "block",
            "none",
            "inline-block"
        ],
        correctIndex: 1
    },
    {
        question: "Which property is used to change the background color of an element in CSS?",
        options: [
            "color",
            "bg-color",
            "background-color",
            "background"
        ],
        correctIndex: 2
    },
    {
        question: "How do you insert an image in HTML?",
        options: [
            "<img src='image.jpg'>",
            "<image src='image.jpg'>",
            "<img href='image.jpg'>",
            "<img='image.jpg'>"
        ],
        correctIndex: 0
    },
    {
        question: "What does the <a> tag in HTML represent?",
        options: [
            "A button",
            "An anchor link",
            "An image",
            "A table"
        ],
        correctIndex: 1
    },
    {
        question: "Which of the following is the correct CSS syntax to select an element with the class name 'my-class'?",
        options: [
            ".my-class {}",
            "#my-class {}",
            "my-class {}",
            "my-class()"
        ],
        correctIndex: 0
    },
    {
        question: "Which property is used to change the font size in CSS?",
        options: [
            "text-size",
            "font-style",
            "text-font",
            "font-size"
        ],
        correctIndex: 3
    },
    {
        question: "How do you make a list in HTML that is ordered (numbered)?",
        options: [
            "<ul>",
            "<list>",
            "<ol>",
            "<order>"
        ],
        correctIndex: 2
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<table>"
        ],
        correctIndex: 1
    }
];
let i = 0
next(i)
let a = -1
let score = 0
document.querySelectorAll(".btn").forEach((e, i) => {
    e.addEventListener('click', () => {
        a = i;
    })
})
document.getElementById("next").addEventListener('click', () => {
    if (a == -1) {
        alert("Please Select a Option")
    } else {
        if (i == quizQuestions.length-1) {
            document.getElementById("over").innerHTML = `<h1>Quiz is Over.</h1>`
            document.getElementById("over").style.textAlign = `center`
            document.getElementById("next").disabled = true
            document.getElementById("next").style.backgroundColor = `grey`
            document.getElementById("score").style.display = 'block'
            document.getElementById("reset").style.display = 'block'
            document.getElementById("pre").disabled = true
            document.getElementById("pre").style.backgroundColor = `grey`
        } else {
            document.getElementById("pre").disabled = false
            document.getElementById("pre").style.backgroundColor = `#ffff66`
            if (a == (quizQuestions[i].correctIndex)) {
                score += 1
                console.log(score)
            }
            i++
            if (i != 10)
                next(i);
        }
    }
})
document.getElementById("pre").addEventListener('click', () => {
    next(i-1);
    console.log(score)
    i--
})
function next(i) {
    document.getElementById("que").innerText = `${i + 1}) ${quizQuestions[i].question}`
    document.getElementById("opt1").innerText = `${quizQuestions[i].options[0]}`
    document.getElementById("opt2").innerText = `${quizQuestions[i].options[1]}`
    document.getElementById("opt3").innerText = `${quizQuestions[i].options[2]}`
    document.getElementById("opt4").innerText = `${quizQuestions[i].options[3]}`
}
document.getElementById("score").addEventListener('click', () => {
    document.getElementById("main").style.display = `none`
    document.getElementById("sco").style.display = `block`
    document.getElementById("score-display").innerText = `${(score * 100) / (quizQuestions.length)} %`
    switch ((score * 100) / quizQuestions.length) {
        case 0:
        case 10:
        case 20:
        case 30:
            document.getElementById("greet").innerText = `Try Better`
            break;
        case 40:
        case 50:
        case 60:
            document.getElementById("greet").innerText = `Good`
            break;
        case 70:
        case 80:
            document.getElementById("greet").innerText = `Nice Work`
            break;
        case 90:
        case 100:
            document.getElementById("greet").innerText = `Genius`
            break;
    }
})