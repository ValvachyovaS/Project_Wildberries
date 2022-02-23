const cart = function () {
    console.log('Hello, world!');

    const cartBtn = document.querySelector('.button-cart'); //class

    // cartBtn.onclick = function () { //only one function! don't use
    //     console.log('click'); 
    // }

    cartBtn.addEventListener('click', function () { // many functions!
        console.log('open');
    });

    console.dir(cartBtn); //dir show all info about obj


    // const cartModal = document.querySelector('#modal-cart'); //or
    const cartModal = document.getElementById('modal-cart'); // faster

    cartBtn.addEventListener('click', function () {
        cartModal.style.display = 'flex';
    });

    const closeBtn = cartModal.querySelector('.modal-close');

    closeBtn.addEventListener('click', function () {
        cartModal.style.display = '';
        console.log('close');
    });
};

cart();
