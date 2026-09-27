// ==========================
// DATA SOAL
// ==========================

const quizData = [
    // HTML
    {
        category: "html",
        question: "Apa kepanjangan dari HTML?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink Text Mode Language"
        ],
        correct: 0
    },
    {
        category: "html",
        question: "Tag HTML yang digunakan untuk membuat paragraf adalah?",
        options: [
            "<h1>",
            "<p>",
            "<div>",
            "<span>"
        ],
        correct: 1
    },
    {
        category: "html",
        question: "Tag HTML untuk membuat link adalah?",
        options: [
            "<img>",
            "<a>",
            "<link>",
            "<href>"
        ],
        correct: 1
    },
    {
        category: "html",
        question: "Atribut yang digunakan untuk menentukan alamat gambar pada tag img adalah?",
        options: [
            "href",
            "alt",
            "src",
            "link"
        ],
        correct: 2
    },
    {
        category: "html",
        question: "Tag yang digunakan untuk membuat daftar tidak berurutan adalah?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        correct: 1
    },
    {
    category: "html",
    question: "Tag HTML yang digunakan untuk membuat heading paling besar adalah?",
    options: [
        "<h6>",
        "<h1>",
        "<head>",
        "<header>"
    ],
    correct: 1
},
{
    category: "html",
    question: "Tag HTML yang digunakan untuk menampilkan gambar adalah?",
    options: [
        "<picture>",
        "<image>",
        "<img>",
        "<src>"
    ],
    correct: 2
},
{
    category: "html",
    question: "Atribut alt pada tag img berfungsi untuk?",
    options: [
        "Mengatur ukuran gambar",
        "Memberikan teks alternatif pada gambar",
        "Mengubah warna gambar",
        "Menentukan alamat gambar"
    ],
    correct: 1
},
{
    category: "html",
    question: "Tag HTML yang digunakan untuk membuat form adalah?",
    options: [
        "<input>",
        "<form>",
        "<fieldset>",
        "<button>"
    ],
    correct: 1
},
{
    category: "html",
    question: "Elemen HTML yang digunakan untuk membuat tombol adalah?",
    options: [
        "<click>",
        "<btn>",
        "<button>",
        "<submit>"
    ],
    correct: 2
},

    // CSS
    {
        category: "css",
        question: "CSS digunakan untuk apa?",
        options: [
            "Mengatur struktur halaman",
            "Mengatur tampilan halaman",
            "Menyimpan data",
            "Menghubungkan database"
        ],
        correct: 1
    },
    {
        category: "css",
        question: "Properti CSS untuk mengubah warna teks adalah?",
        options: [
            "background",
            "font-style",
            "color",
            "text-color"
        ],
        correct: 2
    },
    {
        category: "css",
        question: "Selector CSS untuk memilih elemen dengan id 'header' adalah?",
        options: [
            ".header",
            "#header",
            "header#",
            "*header"
        ],
        correct: 1
    },
    {
        category: "css",
        question: "Properti CSS yang digunakan untuk memberi jarak di dalam elemen adalah?",
        options: [
            "margin",
            "padding",
            "gap",
            "border"
        ],
        correct: 1
    },
    {
        category: "css",
        question: "Media query biasanya digunakan untuk membuat website menjadi?",
        options: [
            "Dinamis",
            "Responsive",
            "Terhubung database",
            "Lebih berat"
        ],
        correct: 1
    },
    {
    category: "css",
    question: "Properti CSS yang digunakan untuk mengubah ukuran teks adalah?",
    options: [
        "font-size",
        "text-size",
        "font-style",
        "size"
    ],
    correct: 0
},
{
    category: "css",
    question: "Properti CSS yang digunakan untuk memberi jarak di luar elemen adalah?",
    options: [
        "padding",
        "margin",
        "gap",
        "border-spacing"
    ],
    correct: 1
},
{
    category: "css",
    question: "Nilai display yang sering digunakan untuk membuat layout satu dimensi adalah?",
    options: [
        "block",
        "inline",
        "flex",
        "none"
    ],
    correct: 2
},
{
    category: "css",
    question: "Properti CSS yang digunakan untuk mengubah warna latar belakang adalah?",
    options: [
        "color",
        "background-color",
        "font-color",
        "fill-color"
    ],
    correct: 1
},
{
    category: "css",
    question: "Properti CSS yang digunakan untuk membuat sudut elemen menjadi membulat adalah?",
    options: [
        "border-style",
        "border-radius",
        "border-width",
        "corner-radius"
    ],
    correct: 1
},

    // JAVASCRIPT
    {
        category: "javascript",
        question: "Keyword JavaScript yang digunakan untuk membuat variabel yang tidak dapat di-reassign adalah?",
        options: [
            "let",
            "var",
            "const",
            "value"
        ],
        correct: 2
    },
    {
        category: "javascript",
        question: "Method array yang digunakan untuk membuat array baru dari hasil transformasi adalah?",
        options: [
            "forEach()",
            "map()",
            "push()",
            "find()"
        ],
        correct: 1
    },
    {
        category: "javascript",
        question: "Sintaks modern JavaScript untuk menangani proses asynchronous adalah?",
        options: [
            "async/await",
            "switch/case",
            "for/while",
            "if/else"
        ],
        correct: 0
    },
    {
        category: "javascript",
        question: "Template literal pada JavaScript menggunakan simbol?",
        options: [
            "Petik satu",
            "Petik dua",
            "Backtick",
            "Kurung siku"
        ],
        correct: 2
    },
    {
        category: "javascript",
        question: "Method yang digunakan untuk mengubah data JSON string menjadi object JavaScript adalah?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correct: 1
    },
    {
    category: "javascript",
    question: "Operator yang digunakan untuk membandingkan nilai dan tipe data sekaligus adalah?",
    options: [
        "==",
        "===",
        "=",
        "!="
    ],
    correct: 1
},
{
    category: "javascript",
    question: "Method array yang digunakan untuk menyaring data berdasarkan kondisi adalah?",
    options: [
        "map()",
        "filter()",
        "reduce()",
        "push()"
    ],
    correct: 1
},
{
    category: "javascript",
    question: "Keyword yang digunakan untuk membuat fungsi asynchronous adalah?",
    options: [
        "await",
        "async",
        "promise",
        "fetch"
    ],
    correct: 1
},
{
    category: "javascript",
    question: "Method yang digunakan untuk mengubah object JavaScript menjadi JSON string adalah?",
    options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.object()"
    ],
    correct: 1
},
{
    category: "javascript",
    question: "Method Fetch API digunakan untuk?",
    options: [
        "Mengubah CSS",
        "Mengambil atau mengirim data melalui HTTP",
        "Membuat elemen HTML",
        "Menyimpan data di LocalStorage"
    ],
    correct: 1
},

    // DOM & EVENTS
    {
        category: "dom",
        question: "DOM merupakan singkatan dari?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Document Online Mode",
            "Dynamic Object Model"
        ],
        correct: 0
    },
    {
        category: "dom",
        question: "Method modern untuk memilih elemen pertama berdasarkan CSS selector adalah?",
        options: [
            "getNode()",
            "selectElement()",
            "querySelector()",
            "findElement()"
        ],
        correct: 2
    },
    {
        category: "dom",
        question: "Method untuk membuat elemen HTML baru melalui JavaScript adalah?",
        options: [
            "document.createElement()",
            "document.addElement()",
            "document.newElement()",
            "document.makeElement()"
        ],
        correct: 0
    },
    {
        category: "dom",
        question: "Method untuk memasang event handler modern adalah?",
        options: [
            "addEventListener()",
            "eventClick()",
            "addListenerEvent()",
            "onEvent()"
        ],
        correct: 0
    },
    {
        category: "dom",
        question: "LocalStorage digunakan untuk?",
        options: [
            "Menyimpan data secara persisten di browser",
            "Membuat elemen HTML",
            "Mengubah CSS",
            "Mengirim request API"
        ],
        correct: 0
    },
{
    category: "dom",
    question: "Method yang digunakan untuk memilih semua elemen yang cocok dengan CSS selector adalah?",
    options: [
        "querySelectorAll()",
        "getElementById()",
        "createElement()",
        "append()"
    ],
    correct: 0
},
{
    category: "dom",
    question: "Method yang digunakan untuk menambahkan elemen baru ke dalam parent adalah?",
    options: [
        "remove()",
        "append()",
        "closest()",
        "toggle()"
    ],
    correct: 1
},
{
    category: "dom",
    question: "Method classList yang digunakan untuk menambah class adalah?",
    options: [
        "classList.remove()",
        "classList.add()",
        "classList.contains()",
        "classList.toggle()"
    ],
    correct: 1
},
{
    category: "dom",
    question: "Pada event delegation, method yang sering digunakan untuk mencari elemen target terdekat adalah?",
    options: [
        "closest()",
        "parent()",
        "find()",
        "children()"
    ],
    correct: 0
},
{
    category: "dom",
    question: "Method LocalStorage yang digunakan untuk menyimpan data adalah?",
    options: [
        "localStorage.getItem()",
        "localStorage.setItem()",
        "localStorage.removeItem()",
        "localStorage.clear()"
    ],
    correct: 1
}
   
];


// ==========================
// DOM ELEMENTS
// ==========================

const startScreen =
    document.querySelector("#startScreen");

const quizScreen =
    document.querySelector("#quizScreen");

const resultScreen =
    document.querySelector("#resultScreen");

const categorySelect =
    document.querySelector("#categorySelect");

const startBtn =
    document.querySelector("#startBtn");

const darkModeBtn =
    document.querySelector("#darkModeBtn");

const progressText =
    document.querySelector("#progressText");

const progressBar =
    document.querySelector("#progressBar");

const timerEl =
    document.querySelector("#timer");

const timerBox =
    document.querySelector(".timer-box");

const questionCard =
    document.querySelector("#questionCard");

const questionEl =
    document.querySelector("#question");

const questionNumber =
    document.querySelector("#questionNumber");

const categoryBadge =
    document.querySelector("#categoryBadge");

const optionsEl =
    document.querySelector("#options");

const feedbackEl =
    document.querySelector("#feedback");

const nextBtn =
    document.querySelector("#nextBtn");

const finalScore =
    document.querySelector("#finalScore");

const scorePercentage =
    document.querySelector("#scorePercentage");

const highScoreEl =
    document.querySelector("#highScore");

const resultMessage =
    document.querySelector("#resultMessage");

const restartBtn =
    document.querySelector("#restartBtn");

    const correctCount =
    document.querySelector("#correctCount");

const wrongCount =
    document.querySelector("#wrongCount");

const resultCategory =
    document.querySelector("#resultCategory");

const menuBtn =
    document.querySelector("#menuBtn");

// ==========================
// STATE
// ==========================

let selectedQuestions = [];

let selectedCategory = "all";

let currentQuestion = 0;

let score = 0;

let answered = false;

let timerInterval = null;

let timeLeft = 15;


// ==========================
// RANDOM ARRAY
// ==========================

const shuffleArray = (array) => {

    const shuffled =
        [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
};


// ==========================
// CATEGORY NAME
// ==========================

const getCategoryName = (category) => {

    const categoryNames = {
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        dom: "DOM & Events"
    };

    return categoryNames[category] || "Umum";
};


// ==========================
// PREPARE QUESTIONS
// ==========================

const prepareQuestions = () => {

    selectedCategory =
        categorySelect.value;

    let availableQuestions;

    if (selectedCategory === "all") {

        availableQuestions =
            [...quizData];

    } else {

        availableQuestions =
            quizData.filter(
                question =>
                    question.category ===
                    selectedCategory
            );
    }

    selectedQuestions =
    shuffleArray(
        availableQuestions
    ).slice(0, 10);
};


// ==========================
// START QUIZ
// ==========================

const startQuiz = () => {

    prepareQuestions();

    currentQuestion = 0;

    score = 0;

    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );

    renderQuestion();
};


// ==========================
// RENDER QUESTION
// ==========================

const renderQuestion = () => {

    answered = false;

    clearInterval(
        timerInterval
    );

    const currentData =
        selectedQuestions[
            currentQuestion
        ];


    // Progress
    progressText.textContent =
        `Soal ${currentQuestion + 1}/${selectedQuestions.length}`;

    questionNumber.textContent =
        `#${currentQuestion + 1}`;

    const progress =
        (
            (currentQuestion + 1) /
            selectedQuestions.length
        ) * 100;

    progressBar.style.width =
        `${progress}%`;


    // Category
    categoryBadge.textContent =
        getCategoryName(
            currentData.category
        );


    // Question
    questionEl.textContent =
        currentData.question;


    // Clear option lama
    optionsEl.replaceChildren();


    // Render option menggunakan createElement + textContent
    currentData.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.classList.add(
                "option-btn"
            );

            button.dataset.index =
                index;

            button.textContent =
                option;

            optionsEl.append(
                button
            );
        }
    );


    // Feedback
    feedbackEl.textContent =
        "";

    feedbackEl.className =
        "feedback hidden";


    // Next button
    nextBtn.classList.add(
        "hidden"
    );

    if (
        currentQuestion ===
        selectedQuestions.length - 1
    ) {

        nextBtn.textContent =
            "Lihat Hasil →";

    } else {

        nextBtn.textContent =
            "Soal Berikutnya →";
    }


    // Animasi
    questionCard.classList.remove(
        "animate"
    );

    void questionCard.offsetWidth;

    questionCard.classList.add(
        "animate"
    );


    startTimer();
};


// ==========================
// TIMER
// ==========================

const startTimer = () => {

    timeLeft = 15;

    timerEl.textContent =
        timeLeft;

    timerBox.classList.remove(
        "warning",
        "danger"
    );


    timerInterval =
        setInterval(() => {

            timeLeft--;

            timerEl.textContent =
                timeLeft;


            if (
                timeLeft <= 10 &&
                timeLeft > 5
            ) {

                timerBox.classList.add(
                    "warning"
                );
            }


            if (timeLeft <= 5) {

                timerBox.classList.remove(
                    "warning"
                );

                timerBox.classList.add(
                    "danger"
                );
            }


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );

                handleTimeOut();
            }

        }, 1000);
};


// ==========================
// EVENT DELEGATION
// ==========================

optionsEl.addEventListener(
    "click",
    (event) => {

        const selectedButton =
            event.target.closest(
                ".option-btn"
            );

        if (
            !selectedButton ||
            answered
        ) {

            return;
        }

        const selectedIndex =
            Number(
                selectedButton.dataset.index
            );

        handleAnswer(
            selectedIndex,
            selectedButton
        );
    }
);


// ==========================
// HANDLE ANSWER
// ==========================

const handleAnswer = (
    selectedIndex,
    selectedButton
) => {

    answered = true;

    clearInterval(
        timerInterval
    );

    const currentData =
        selectedQuestions[
            currentQuestion
        ];

    const correctIndex =
        currentData.correct;

    const optionButtons =
        optionsEl.querySelectorAll(
            ".option-btn"
        );


    optionButtons.forEach(
        button => {

            button.disabled =
                true;
        }
    );


    if (
        selectedIndex ===
        correctIndex
    ) {

        score++;

        selectedButton.classList.add(
            "correct"
        );

        feedbackEl.textContent =
            "✅ Jawaban benar!";

        feedbackEl.className =
            "feedback correct";

    } else {

        selectedButton.classList.add(
            "wrong"
        );

        optionButtons[
            correctIndex
        ].classList.add(
            "correct"
        );

        feedbackEl.textContent =
            `❌ Jawaban salah. Jawaban yang benar: ${currentData.options[correctIndex]}`;

        feedbackEl.className =
            "feedback wrong";
    }


    nextBtn.classList.remove(
        "hidden"
    );
};


// ==========================
// TIME OUT
// ==========================

const handleTimeOut = () => {

    if (answered) return;

    answered = true;

    const currentData =
        selectedQuestions[
            currentQuestion
        ];

    const correctIndex =
        currentData.correct;

    const optionButtons =
        optionsEl.querySelectorAll(
            ".option-btn"
        );


    optionButtons.forEach(
        button => {

            button.disabled =
                true;
        }
    );


    optionButtons[
        correctIndex
    ].classList.add(
        "correct"
    );


    feedbackEl.textContent =
        `⏰ Waktu habis! Jawaban yang benar: ${currentData.options[correctIndex]}`;

    feedbackEl.className =
        "feedback wrong";


    nextBtn.classList.remove(
        "hidden"
    );
};


// ==========================
// NEXT QUESTION
// ==========================

nextBtn.addEventListener(
    "click",
    () => {

        currentQuestion++;

        if (
            currentQuestion <
            selectedQuestions.length
        ) {

            renderQuestion();

        } else {

            showResult();
        }
    }
);


// ==========================
// SHOW RESULT
// ==========================

const showResult = () => {

    clearInterval(
        timerInterval
    );

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const total =
        selectedQuestions.length;

    const percentage =
        Math.round(
            (score / total) * 100
        );


    finalScore.textContent =
        `${score}/${total}`;

    scorePercentage.textContent =
        `${percentage}%`;

        correctCount.textContent =
    score;

wrongCount.textContent =
    total - score;

resultCategory.textContent =
    selectedCategory === "all"
        ? "Semua Kategori"
        : getCategoryName(selectedCategory);

    // LocalStorage High Score
    const savedHighScore =
        Number(
            localStorage.getItem(
                "quizHighScore"
            )
        ) || 0;


    if (
        percentage >
        savedHighScore
    ) {

        localStorage.setItem(
            "quizHighScore",
            percentage
        );

        highScoreEl.textContent =
            `${percentage}% 🎉`;

    } else {

        highScoreEl.textContent =
            `${savedHighScore}%`;
    }


    // Pesan hasil
    if (percentage === 100) {

        resultMessage.textContent =
            "Luar biasa! Semua jawaban benar! 🎉";

    } else if (percentage >= 80) {

        resultMessage.textContent =
            "Hebat! Pemahamanmu sangat baik. 👏";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "Bagus! Sedikit lagi untuk hasil yang lebih tinggi. 🌱";

    } else {

        resultMessage.textContent =
            "Tetap semangat! Coba ulangi quiz dan tingkatkan skormu. 💪";
    }
};


// ==========================
// RESTART
// ==========================

restartBtn.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        prepareQuestions();

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.remove(
            "hidden"
        );

        renderQuestion();
    }
);

menuBtn.addEventListener(
    "click",
    () => {

        clearInterval(
            timerInterval
        );

        currentQuestion = 0;
        score = 0;

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );
    }
);

// ==========================
// START BUTTON
// ==========================

startBtn.addEventListener(
    "click",
    startQuiz
);


// ==========================
// DARK MODE
// ==========================

const applySavedTheme = () => {

    const savedTheme =
        localStorage.getItem(
            "quizTheme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        darkModeBtn.textContent =
            "☀️";

        darkModeBtn.setAttribute(
            "aria-label",
            "Aktifkan light mode"
        );
    }
};


darkModeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        if (isDark) {

            darkModeBtn.textContent =
                "☀️";

            darkModeBtn.setAttribute(
                "aria-label",
                "Aktifkan light mode"
            );

            localStorage.setItem(
                "quizTheme",
                "dark"
            );

        } else {

            darkModeBtn.textContent =
                "🌙";

            darkModeBtn.setAttribute(
                "aria-label",
                "Aktifkan dark mode"
            );

            localStorage.setItem(
                "quizTheme",
                "light"
            );
        }
    }
);


// ==========================
// INITIAL
// ==========================

applySavedTheme();