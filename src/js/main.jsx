import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter.jsx";

let seconds = 0;
let interval = null;
let countdown = false;
let alertAt = null;

const root = ReactDOM.createRoot(document.querySelector("#root"));

function startCounter() {
    interval = setInterval(() => {
        if (countdown) {
            seconds--;
            if (seconds <= 0) {
                clearInterval(interval);
                alert("¡Cuenta regresiva terminada!");
            }
        } else {
            seconds++;
        }

        if (alertAt !== null && seconds === alertAt) {
            alert(`Has llegado al tiempo ${alertAt}`);
        }

        root.render(<SecondsCounter seconds={seconds} />);
    }, 1000);
}

function stopCounter() {
    clearInterval(interval);
}

function resetCounter() {
    seconds = 0;
    root.render(<SecondsCounter seconds={seconds} />);
}

function resumeCounter() {
    startCounter();
}

window.startCounter = startCounter;
window.stopCounter = stopCounter;
window.resetCounter = resetCounter;
window.resumeCounter = resumeCounter;

window.startCountdown = (start) => {
    countdown = true;
    seconds = start;
    startCounter();
};

window.setAlertAt = (num) => {
    alertAt = num;
};

startCounter();
