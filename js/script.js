let streak = localStorage.getItem("streak") || 0;
document.getElementById("streak").innerText = streak;

function getSuggestion() {
  const mood = document.getElementById("mood").value;
  const suggestion = document.getElementById("suggestion");

  if (mood === "") {
    alert("Please select your mood");
    return;
  }

  let message = "";

  if (mood === "happy") {
    message = "Keep smiling 😊 Spread positivity today.";
  } else if (mood === "okay") {
    message = "Take a short walk and drink water 💧";
  } else if (mood === "stressed") {
    message = "Try deep breathing for 2 minutes 🌬";
  } else if (mood === "tired") {
    message = "Take rest and avoid screens for some time 😴";
  }

  suggestion.innerText = message;
}

function completeHabit() {
  streak++;
  localStorage.setItem("streak", streak);
  document.getElementById("streak").innerText = streak;
}
