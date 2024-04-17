document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    const totalPriceElement = document.getElementById('total-price');
    const heartButton = document.getElementById('heartButton');


    let totalPrice = 20; // Prix initial de l'article

    // Ajoutez des événements pour les boutons "J'aime"

    heartButton.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    });

   

    // Ajoutez des événements pour les boutons "Supprimer"
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = this.parentElement.parentElement;
            item.remove();
            updateTotalPrice();
        });

        
    });

    // Ajoutez des événements pour les boutons de quantité
    quantityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = this.parentElement.parentElement;
            const quantityElement = item.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);

            if (this.textContent === '+') {
                quantity++;
            } else if (this.textContent === '-' && quantity > 1) {
                quantity--;
            }

            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    // Mettez à jour le prix total
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            const price = parseInt(item.querySelector('.item-details span:nth-child(2)').textContent.split('$')[1]);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total}`;
    }
});
