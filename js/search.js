const search = function () {
    const inputSearch = document.querySelector('.search-block > input');
    const buttonSearch = document.querySelector('.search-block > button');

    buttonSearch.addEventListener('click', () => {
        console.log(inputSearch.value);
    });
};

search();