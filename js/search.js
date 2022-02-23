const search = function () {
    const inputSearch = document.querySelector('.search-block > input');
    const buttonSearch = document.querySelector('.search-block > button');

    inputSearch.addEventListener('click', (event) => {
        console.log(event.target.value);
    });
};

search();