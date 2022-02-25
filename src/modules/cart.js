export const cart = function () {
    const cartBtn = document.querySelector('.button-cart');

    cartBtn.addEventListener('click', function () {
        console.log('open');
    });

    const cartModal = document.getElementById('modal-cart');

    cartBtn.addEventListener('click', function () {
        cartModal.style.display = 'flex';
    });

    const closeBtn = cartModal.querySelector('.modal-close');

    closeBtn.addEventListener('click', function () {
        cartModal.style.display = '';
        console.log('close');
    });
};
