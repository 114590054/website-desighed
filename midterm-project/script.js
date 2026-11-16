const randomBtn = document.getElementById("randomBtn");
const foodResult = document.getElementById("foodResult");

if (randomBtn) {
    randomBtn.addEventListener("click", function() {
        const foods = ["光華紅豆餅", "濟南路牛肉麵", "八德路排骨飯", "忠孝新生水餃", "華山文創簡餐"];
        const randomIndex = Math.floor(Math.random() * foods.length);
        
        foodResult.innerText = "推薦你去吃：" + foods[randomIndex] + "！";
        foodResult.style.color = "#e74c3c";
        foodResult.style.fontWeight = "bold";
    });
}

const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

if (calcBtn) {
    calcBtn.addEventListener("click", function() {
        const total = parseFloat(document.getElementById("totalAmount").value);
        const people = parseInt(document.getElementById("peopleCount").value);

        if (isNaN(total) || isNaN(people) || people <= 0) {
            calcResult.innerText = "請輸入有效的金額與正確的人數！";
            calcResult.style.color = "red";
        } else {
            const payPerPerson = Math.ceil(total / people);
            calcResult.innerText = "計算完成！每人應付：" + payPerPerson + " 元";
            calcResult.style.color = "green";
        }
    });
}
