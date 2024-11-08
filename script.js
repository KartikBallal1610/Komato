// Function to handle food ordering
function orderFood() {
    let selectedItems = [];
    
    // Burger Singh items
    let burgerItems = document.querySelectorAll('input[name="burgerSinghItem"]:checked');
    burgerItems.forEach(item => {
        selectedItems.push(item.value);
    });

    // Coffee Ka Khauf items
    let coffeeItems = document.querySelectorAll('input[name="coffeeKaKhaufItem"]:checked');
    coffeeItems.forEach(item => {
        selectedItems.push(item.value);
    });

    // Sardarbucks items
    let sardarItems = document.querySelectorAll('input[name="sardarbucksItem"]:checked');
    sardarItems.forEach(item => {
        selectedItems.push(item.value);
    });

    // Check if any items were selected
    if (selectedItems.length > 0) {
        localStorage.setItem("orderItems", JSON.stringify(selectedItems));
        window.location.href = "order.html";  // Redirect to order.html
    } else {
        alert("Please select at least one item.");
    }
}

// Function to display ordered items on the Order Successful page
window.onload = function() {
    let orderItems = JSON.parse(localStorage.getItem("orderItems"));
    let orderList = document.getElementById("orderList");

    if (orderItems && orderItems.length > 0) {
        orderItems.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            orderList.appendChild(li);
        });
    } else {
        orderList.innerHTML = "No items ordered.";
    }
};
