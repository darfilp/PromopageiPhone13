const doScroll = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const linkChar = document.querySelector('.card-details__link-characteristics');

    const linksArray = [...links, linkChar];
    seamless.polyfill(); //кроссбраузерность

    linksArray.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth', //плавность
                    block:'start' //на самое начало секции
                })
                } else {
                    seamless.elementScrollIntoView(document.querySelector("#card"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            } 
        })
    })
}

doScroll()