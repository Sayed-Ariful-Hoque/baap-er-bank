
/*
1. add event with the withdraw button
2. get the withdraw amount form th withdraw inpu field 
2.5 also make sure 


*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const widthrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = widthrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithdrawAmount);

    // stpe-3:
    const withdrawTotalElement = document.getElementById('widtraw-total');
    const previousWidrawtotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWidrawtotalString);
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5
    const balanceTotalElement = document. getElementById('balanc-total')
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    
    
    // step-6
    const newBalanceTotal = previousBlanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7:
    widthrawField.value =''
})