// Sélectionner tous les produits
const products = document.querySelectorAll('.list-products > .card-body > .card > .card-body');

// Sélectionner le span du prix total
const totalPriceElement = document.querySelector('.total');

function updateTotal() {
    let total = 0;
    products.forEach(product => {
        const quantity = parseInt(product.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(product.querySelector('.unit-price').textContent);
        total += quantity * unitPrice;
    });
    totalPriceElement.textContent = total + ' $';
}

products.forEach(product => {
    const plusBtn = product.querySelector('.fa-plus-circle');
    const minusBtn = product.querySelector('.fa-minus-circle');
    const quantitySpan = product.querySelector('.quantity');
    const trashBtn = product.querySelector('.fa-trash-alt');
    const heartBtn = product.querySelector('.fa-heart');

    // Bouton "+"
    plusBtn.addEventListener('click', () => {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        updateTotal();
    });

    // Bouton "-"
    minusBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantitySpan.textContent);
        if (currentQty > 0) {
            quantitySpan.textContent = currentQty - 1;
            updateTotal();
        }
    });

    // Bouton "supprimer"
    trashBtn.addEventListener('click', () => {
        product.remove(); 
       product.classList.add('removed'); 
    quantitySpan.textContent = 0;    
    updateTotal();     
    });

    // Bouton "like"
       if (heartBtn) {
        heartBtn.addEventListener('click', () => {
            heartBtn.classList.toggle('liked');
        });
    }
});
