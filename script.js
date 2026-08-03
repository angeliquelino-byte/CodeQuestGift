function checkAnswer2() {
  const input = document.getElementById("answer2").value.toLowerCase();
  if (input === "e" || input.includes("letter e")) {
    alert("Correct! The answer is the letter 'e'.");
  } else {
    alert("Try again!");
  }
}
