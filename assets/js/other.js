// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//         center: [56.140565, 47.227076],
//         zoom: 14,
//         controls: ['']
//     }, {
//         searchControlProvider: 'yandex#search'
//     }),

//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//         '<div style="color: #FFFFFF; font-weight: bold; width: 100%; height: 100%; border-radius: 20px;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//         hintContent: 'Собственный значок метки',
//         balloonContent: 'Это красивая метка'
//     }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/on-map.svg',
//         // Размеры метки.
//         iconImageSize: [50, 50],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-5, -38]
//     }),

//     myPlacemarkWithContent = new ymaps.Placemark([56.141688, 47.229923], {
//         // hintContent: 'Собственный значок метки с контентом',
//         // balloonContent: 'А эта — новогодняя',
//         // iconContent: '12'
//     }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#imageWithContent',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/on-map.svg',
//         // Размеры метки.
//         iconImageSize: [50, 50],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-24, -24],
//         // Смещение слоя с содержимым относительно слоя с картинкой.
//         iconContentOffset: [15, 15],
//         // Макет содержимого.
//         iconContentLayout: MyIconContentLayout
//     });

//     myMap.geoObjects
//         .add(myPlacemarkWithContent);
// });

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.140565, 47.227076],
            zoom: 14,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([56.141688, 47.229923], {
            // hintContent: 'Собственный значок метки с контентом',
            // balloonContent: 'А эта — новогодняя',
            // iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/on-map.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent);
});