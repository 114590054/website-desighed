// 功能 1：隨機食物產生器 (按鈕互動、陣列與 DOM 操作)
const randomBtn = document.getElementById("randomBtn");
const foodResult = document.getElementById("foodResult");

if (randomBtn) {
    randomBtn.addEventListener("click", function() {
        const foods = ["光華紅豆餅", "濟南路牛肉麵", "八德路排骨飯", "忠孝新生水餃", "華山文創簡餐"];
        const randomIndex = Math.floor(Math.random() * foods.length);
        
        // 改變 HTML 內容與樣式
        foodResult.innerText = "推薦你去吃：" + foods[randomIndex] + "！";
        foodResult.style.color = "#e74c3c";
        foodResult.style.fontWeight = "bold";
    });
}

// 功能 2：AA制分錢計算機 (讀取 Input 數值、條件判斷與 DOM 操作)
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

if (calcBtn) {
    calcBtn.addEventListener("click", function() {
        // 取得使用者輸入的字串並轉換為數字
        const total = parseFloat(document.getElementById("totalAmount").value);
        const people = parseInt(document.getElementById("peopleCount").value);

        // 簡單的防呆檢查
        if (isNaN(total) || isNaN(people) || people <= 0) {
            calcResult.innerText = "請輸入有效的金額與正確的人數！";
            calcResult.style.color = "red";
        } else {
            // 計算並取整數
            const payPerPerson = Math.ceil(total / people);
            calcResult.innerText = "計算完成！每人應付：" + payPerPerson + " 元";
            calcResult.style.color = "green";
        }
    });
}
