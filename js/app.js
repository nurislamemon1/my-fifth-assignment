let accountBalance = 100;

function toggleSections(showDonation) {
    document.getElementById('donationSection').classList.toggle('hidden', !showDonation);
    document.getElementById('historySection').classList.toggle('hidden', showDonation);
}

document.getElementById('donationButton').onclick = function() {
    toggleSections(true);
};

document.getElementById('historyButton').onclick = function() {
    toggleSections(false);
};

function donate(cardNumber) {
    const inputField = document.getElementById(`donationInput${cardNumber}`);
    const donationAmount = parseFloat(inputField.value);
    
    if (isNaN(donationAmount) || donationAmount <= 0 || donationAmount > accountBalance) {
        alert("Invalid donation amount.");
        return;
    }

    accountBalance -= donationAmount;
    document.getElementById('accountBalance').innerText = `Balance: $${accountBalance}`;
    
    const currentAmount = document.getElementById(`amount${cardNumber}`);
    currentAmount.innerText = parseFloat(currentAmount.innerText) + donationAmount;

    addToHistory(`Donated $${donationAmount} to Donation Title ${cardNumber}`);
    
    inputField.value = '';
    showModal();
}

function addToHistory(message) {
    const historyList = document.getElementById('historyList');
    
    const dateTime = new Date().toLocaleString();
    const listItem = document.createElement('li');
    listItem.innerText = `${dateTime}: ${message}`;
    
    historyList.appendChild(listItem);
}


