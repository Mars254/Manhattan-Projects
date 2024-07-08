
var basic_salary=prompt("Enter your basic salary");
var deductions=prompt("Enter your Total Deductions");
var allowance=prompt("Enter your Total Allowances");
var gross_salary = parseInt(basic_salary) + parseInt(allowance);
var tax = deductions;
var net_income = gross_salary - tax;
document.write("<br> Your Gross Pay <br> =ksh \t "+gross_salary); 
document.write("<br> Tax Deducted on Gross pay <br> =ksh \t "+tax);
document.write("<br> Your Net Salary <br> =ksh \t "+net_income);

