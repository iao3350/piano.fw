const daySelect = document.getElementById("day");

const timeSelect = document.getElementById("time");

const lessonTimes = {
    monday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
    tuesday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
    wednesday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
    thursday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:30", "18:00", "18:30", "19:00", "19:30"],
    friday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
    saturday: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
};

daySelect.addEventListener("change", function(event) {

    const times = lessonTimes[event.target.value];

    timeSelect.innerHTML = "";
    if (!times) {
        const option = document.createElement("option");
        option.textContent = "先に曜日を選択してください";
        timeSelect.appendChild(option);
        return;
    }

    times.forEach(function(time) {
        const option = document.createElement("option");
        option.textContent = time;
        timeSelect.appendChild(option);
    });
});

const form = document.getElementById("trial-form");

const result = document.getElementById("result");

const trialCard = document.querySelector(".trial-card");

const resultCard = document.querySelector(".result-card");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
        method: "POST",
        headers: {
            "accept": "application/json"
        },
        body: formData
    })
    .then(function(response){
        if (!response.ok) {
            throw new Error("送信エラー");
        }
        trialCard.style.display = "none";
        resultCard.style.display = "flex";
        result.innerHTML = "申し込みが完了しました！";
    })
    .catch(function(error){
        alert("送信できませんでした。お手数ですが、LINEか電話でお申し込みをお願いいたします");
    });
});