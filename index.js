const ideaBtn = document.getElementById("idea-btn");
const text = document.getElementById("text");

ideaBtn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => text.textContent = data.activity)
});

