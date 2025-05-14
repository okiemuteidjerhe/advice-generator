const adviceNumber = document.getElementById("advice-number");
const adviceContent = document.getElementById("advice");

function updateContent(number, advice){
    adviceNumber.textContent = number;
    adviceContent.textContent = advice;
}

async function getAdvice(){
    const response = await fetch(`https://api.adviceslip.com/advice`, {
        method: "GET"
    });
    const data = await response.json();
    const {slip} = data;
    const {id, advice} = slip;
    updateContent(id, advice);
}
getAdvice()