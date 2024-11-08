document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        let foodItem = e.target.textContent;
        localStorage.setItem('foodItem', foodItem);
        window.location.href = 'order.html';
    });
});
