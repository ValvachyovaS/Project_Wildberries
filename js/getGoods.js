const getGoods = () => {
    try {
        const renderGoods = (goods) => {
            const goodsContainer = document.querySelector('.long-goods-list');
            goodsContainer.innerHTML = '';

            goods.forEach(good => {
                const goodBlock = document.createElement('div');
                goodBlock.classList.add('col-lg-3', 'col-sm-6');
                goodBlock.innerHTML = `
            <div class="goods-card">
				<span class="label ${good.label ? '' : 'd-none'}">${good.label}</span>
				<img src="db/${good.img}" alt="image: ${good.name}" class="goods-image">
				<h3 class="goods-title">${good.name}</h3>
				<p class="goods-description">${good.description}</p>
				<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
					<span class="button-price">$${good.price}</span>
                </button>
			</div>`;
                goodsContainer.append(goodBlock);
            });
        };

        const getData = (value, field, valueSearch) => {
            fetch('/db/db.json')
                .then((res) => res.json())
                .then((data) => {
                    const array = valueSearch ? data.filter((good) => good.name.toLowerCase().includes(valueSearch.toLowerCase()))
                        : field ? data.filter((item) => item[field] === value) : data;
                    localStorage.setItem('data', JSON.stringify(array));
                    if (window.location.pathname !== '/goods.html') {
                        window.location.href = '/goods.html';
                    } else {
                        renderGoods(array);
                    }

                });
        };

        const links = document.querySelectorAll('.navigation-link');
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const linkValue = link.textContent;
                const linkDataField = link.dataset.field;
                getData(linkValue, linkDataField, '');
            });
        });

        const inputSearch = document.querySelector('.search-block > input');
        const buttonSearch = document.querySelector('.search-block > button');

        buttonSearch.addEventListener('click', () => getData('', '', inputSearch.value));

        const viewAll = document.querySelector('.more');
        if (viewAll) {
            viewAll.addEventListener('click', () => getData());
        }

        if (localStorage.getItem('data') && window.location.pathname === '/goods.html') {
            renderGoods(JSON.parse(localStorage.getItem('data')));
        }
    } catch (e) {
        console.log("Что-то пошло не так.. " + e.message);
    }
};

getGoods();
