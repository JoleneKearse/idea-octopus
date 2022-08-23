const ideaBtn = document.getElementById("idea-btn");
const text = document.getElementById("text");

fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        ideaBtn.addEventListener("click", function () {
            text.textContent = data.activity;
        });
    });
