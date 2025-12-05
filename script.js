// DARK MODE TOGGLE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// Load dark mode state
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

// QUIZ
function checkAnswer(answer) {
    const result = document.getElementById("quiz-result");

    if (answer) {
        result.style.color = "green";
        result.innerHTML = "Benar! Narkoba sangat berbahaya bagi kesehatan.";
    } else {
        result.style.color = "red";
        result.innerHTML = "Salah! Narkoba memiliki dampak buruk dan berisiko tinggi.";
    }

    result.style.opacity = 0;
    setTimeout(() => {
        result.style.transition = "opacity 0.5s";
        result.style.opacity = 1;
    }, 50);
}
