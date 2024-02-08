//task 1
function calculateMoney(ticketSold){
    const ticketIncome = ticketSold * 120;
    const dailyCost = 500 + (8 * 50);
    const totalMoney = ticketIncome - dailyCost;
    return totalMoney;
}


//task 2
function checkName(name) {
    const lowerCaseName = name.toLowerCase();
    const endsWithValidLetter = /[a y i e o u w]$ /i.test(lowerCaseName);
    const optionName = lowerCaseName.endsWith("tonoy") || lowerCaseName.endsWith("utsho") || lowerCaseName.endsWith("roide") || lowerCaseName.endsWith("shanto");
    
    if (endsWithValidLetter && !optionName) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

//task 3
function deleteInvalids(array) {
    return array.filter (item => typeof item === 'number' && !isNaN(item));
}


//task 4
function password(info) {
    const websiteName = info.sitename[0].toUppercase() + info.sitename.slice(1);
    const userName = info.name;
    const birthYear = "@" + info.birthYear;

    return websiteName + "#" + userName +birthYear;
}


//task 5
function monthlySavings(payments, livingCost) {
    const bankTax = 0.2;
    const totalIncome = payments.reduce((acc, cur) => acc + cur * (1 - bankTax), 0);
    const savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    }else {
        return " earn more"
    }
        
}