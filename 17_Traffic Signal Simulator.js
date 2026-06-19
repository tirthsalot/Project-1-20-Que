const result = document.getElementById("result");

document.getElementById("redBtn").addEventListener("click", () => {
    result.innerHTML = "🛑 STOP";
    result.style.color = "#ff3b3b";
});

document.getElementById("yellowBtn").addEventListener("click", () => {
    result.innerHTML = "⚠ READY";
    result.style.color = "#ffd60a";
});

document.getElementById("greenBtn").addEventListener("click", () => {
    result.innerHTML = "✅ GO";
    result.style.color = "#00ff6a";
});