// ищем кнопк
const navBtn = document.querySelector('.nav-icon-btn');
// ищем иконку кнопки
const navIcon = document.querySelector('.nav-icon');
// Ищем контейнер header Nav
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row-mobile');
    document.body.classList.toggle('no-scroll')
}

// =======================МАСКА ТЕЛЕФОНА====================
mask('[data-tel-input]');

// удаляем "+" в input, когда человек кликнул по нему
const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    // Для кажого из инпутов делаем след. действия
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    });

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    });
});
// =======================МАСКА ТЕЛЕФОНА====================

// =======================YANDEX API========================
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18
    });

    // Создание метки
    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928],
        {
            balloonContent: `
            <div class="ball0on">
                <div class="ballo0n__address">Пишем адрес свой</div>
                <div class="balloon__contacts">
                    Тут че хотим вставляем, даже ссылки
                </div>
            </div>
            `
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/6_map/location-pin.svg',
            icon_imagesize: [30, 42],
            iconImageOffset: [-3, -42]
        });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
// =======================YANDEX API========================

