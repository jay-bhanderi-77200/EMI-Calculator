
function calculateEmi(){
    const loanamount = parseFloat(document.getElementById("loanamount").value);
    const interestrate = parseFloat(document.getElementById("interestrate").value)/12/100;
    const loantenure = parseInt(document.getElementById("loantenure").value);


    const X = Math.pow(1+interestrate,loantenure);
    const emi = (loanamount*interestrate*X)/(X-1);
    const totalpayment = (emi*loantenure);
    const totalinterest = (totalpayment - loanamount);



    document.getElementById("emi").innerHTML = "Monthly EMI :"    + emi.toFixed(2);
    document.getElementById("interest").innerHTML = "Total Interest :"   + totalinterest.toFixed(2);
    document.getElementById("payable").innerHTML = "Total Amount :"   +totalpayment.toFixed(2);
}