document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loveForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Afișează mesajul de mulțumire
        document.getElementById("message").innerText = "🥰 Mulțumesc pentru răspuns! Voi analiza cererea ta. 💖";

        // Colectează datele din formular
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const hobbies = document.getElementById("hobbies").value;
        const why = document.getElementById("why").value;

        // Salvează răspunsurile în localStorage
        let responses = JSON.parse(localStorage.getItem("responses") || "[]");
        responses.push({ name, age, hobbies, why });
        localStorage.setItem("responses", JSON.stringify(responses));

        // Afișează răspunsurile salvate
        displayResponses();

        // Resetează formularul
        e.target.reset();
    });

    function displayResponses() {
        const responses = JSON.parse(localStorage.getItem("responses") || "[]");
        const responsesDiv = document.getElementById("responses");
        responsesDiv.innerHTML = "<h3>Răspunsurile tale</h3>";

        responses.forEach(r => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${r.name} (${r.age} ani)</strong>: ${r.why} <br>❤️ Hobby-uri: ${r.hobbies}`;
            div.style.background = "white";
            div.style.padding = "10px";
            div.style.margin = "5px";
            div.style.borderRadius = "8px";
            responsesDiv.appendChild(div);
        });
    }

    displayResponses();  // Încarcă răspunsurile la început

    // Creează inimioare animate
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.getElementById("hearts-container").appendChild(heart);

        const size = Math.random() * 20 + 10 + "px";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = size;
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 300);
});

