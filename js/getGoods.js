const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => localStorage.setItem('data', JSON.stringify(data)));
    };

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        });
    });

    localStorage.setItem('goods', JSON.stringify([1, 3, 6, 9]));
    console.log(localStorage);

    const goods = JSON.parse(localStorage.getItem('goods'));

    localStorage.removeItem('goods');
    console.log(localStorage);
};

getGoods();