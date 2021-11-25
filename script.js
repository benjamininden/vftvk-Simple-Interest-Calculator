function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
	<!-- Read variables from input and check for validity -->
    p = document.getElementById("principal").value;
    if(p <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
	}
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	<!-- Use simple interest equation (although in my opinion, the compound interest equation would make more sense) -->
    var interest = principal * years * rate /100;
	<!-- Calculate year of receipt of money -->
    var year = new Date().getFullYear() + parseInt(years);
	<!-- Produce output -->
    document.getElementById("result").innerHTML = "If you deposit <mark>" +
     principal + "</mark>,<br>" + "at an interest rate of <mark>" + rate + "</mark>.<br>" +
     "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
     "in the year <mark>" + year +"</mark>";
}
        
