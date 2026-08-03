const questions = [
  { q: "Decode this binary: 01001000 01001001", a: "HI" },
  { q: "Find the bug: for(var i=0;i<=5;i++){setTimeout(()=>console.log(i),1000)}", a: "Incorrect scope" }
];

let current = 0;
function showQuestion() {
  document.getElementById("game").innerHTML = `
    <p>${questions[current].q}</p>
    <input id="answer" placeholder="Your answer">
    <button onclick="checkAnswer()">Submit</button>
  `;
}
function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();
  if (ans.toUpperCase() === questions[current].a.toUpperCase()) {
    current++;
    if (current < questions.length) showQuestion();
    else document.getElementById("game").innerHTML = "<h2>🎉 You solved it! Check your gift!</h2>";
  } else alert("Try again!");
}
showQuestion();
