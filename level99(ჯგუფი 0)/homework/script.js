const amount = document.getElementById("amount");
const year = document.getElementById("year");
const rate = document.getElementById("rate");
const amountLabe = document.getElementById("£");
const yearLabe = document.getElementById("year2");
const rateLabe = document.getElementById("rate2");
const btn = document.getElementById("btn");
const p = document.getElementById("result");
const p2 = document.getElementById("text");
const p3 = document.getElementById("text2");
const p4 = document.getElementById("money");
const p5 = document.getElementById("text3");
const p6 = document.getElementById("allmoney");
const img = document.getElementById("img");
const text = document.getElementById("texxxt");
const text2 = document.getElementById("teeeeeeext");
const div = document.querySelector(".info")
btn.addEventListener("click", () => {
    if(amount.value.length === 0 || year.value.length === 0 || rate.value.length === 0){
        amountLabe.style.backgroundColor = "red";
        yearLabe.style.backgroundColor = "red";
        rateLabe.style.backgroundColor = "red";
    } else {
        div.style.display = "flex"
        let principal = Number(amount.value);
        let annualRate = Number(rate.value) / 100;
        let years = Number(year.value);
        let monthlyRate = annualRate / 12;
        let numberOfMonths = years * 12;
        
        let numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths);
        let denominator = Math.pow(1 + monthlyRate, numberOfMonths) - 1;
        let emi = numerator / denominator;
        let totalRepayment = emi * numberOfMonths;

        p.textContent = "Your result";
        p2.textContent = "Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'calculate repayments' again";
        p3.textContent = "Your monthly repayments";
        p4.textContent = "£" + emi.toFixed(2);
        p5.textContent = "Total you'll repay over the term";
        p6.textContent = "£" + totalRepayment.toFixed(2);
        img.parentNode.removeChild(img);
        text.parentNode.removeChild(text);
        text2.parentNode.removeChild(text2);
    }
});