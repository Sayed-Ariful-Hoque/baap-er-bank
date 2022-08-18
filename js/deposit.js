// set-1 add event listener to the deposiy button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 get the deposit amount from the deposit input fild
    // For input use.value to the value inside the inpu field

    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-3: get the cuttent deposit total
    // for none-input(element other than input, textarea) use innerText to get the text

    const depositTotalEement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalEement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalEement.innerText = currentDepositTotal


    // step-5 get ballance cuttent total

    const balanceTotalElement = document.getElementById('balanc-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const prviousBalanceTotal = parseFloat(previousBlanceTotalString);





    // step-6: ca;cu;ate vuttent total blance
    const currentBlanceTotal = prviousBalanceTotal + newDepositAmount;
     balanceTotalElement.innerText = currentBlanceTotal;



    // set-7: clear the deposit field

    depositFiled.value = '';
})