// Function to handle food ordering
function orderFood() {
    let selectedItems = [];
    let items = document.querySelectorAll('input[name="burgerSinghItem"]:checked');
    
    items.forEach(item => {
        selectedItems.push(item.value);
    });

    if (selectedItems.length > 0) {
        localStorage.setItem("orderItems", JSON.stringify(selectedItems));
        window.location.href = "order-success.html";
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
