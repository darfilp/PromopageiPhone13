const makeTab = function() {
    const tabs = document.querySelectorAll('.card-detail__change');
    const title = document.querySelector('.card-details__title');
    const price = document.querySelector('.card-details__price');
    const img = document.querySelector('.card__image_item');

    const tabsOptions = [ 
        {
            name: "Graphite",
            memory: '128GB',
            price: 99990,
            image: 'img/iPhone-graphite.webp',
            title: 'Графитовый'
        }, 
        {
            name: "Silver",
            memory: '512GB',
            price: 110990,
            image: 'img/iPhone-silver.webp',
            title: 'Серебристый'
        }, 
        {
            name: "Sierra Blue",
            memory: '1Tb',
            price: 150990,
            image: 'img/iPhone-sierra_blue.webp',
            title: 'Небесно-голубой'
        }];

    const changeContent = (index) => {
        console.log(tabsOptions[index].name);
        title.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} ${tabsOptions[index].name}`
        price.textContent = `${tabsOptions[index].price}₽`
        img.setAttribute('src', `${tabsOptions[index].image}`)
        document.title = `IPhone13 ${tabsOptions[index].title}`
    }

    const changeActiveTabs = (indexClick) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');
            if (indexClick === index) {
                tab.classList.add('active');
            }
        })
        changeContent(indexClick);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)})
    })

    changeContent(0);
};

makeTab();