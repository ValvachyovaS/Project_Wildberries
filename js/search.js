const search = function () {
    const inputSearch = document.querySelector('.search-block > input');
    const buttonSearch = document.querySelector('.search-block > button');

    inputSearch.addEventListener('input', (event) => {
        console.log('typing');
        console.log(event.target.value);
    });
};

search();