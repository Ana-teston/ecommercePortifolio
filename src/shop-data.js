const SHOP_DATA = [
    {
        title: 'Especiais',
        items: [
            {
                id: 1,
                name: 'Pizza',
                imageUrl: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80',
                price: 25,
            },
            {
                id: 2,
                name: 'Pates',
                imageUrl: 'https://images.unsplash.com/photo-1645679057638-e4…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=490&q=80',
                price: 18,
            },
            {
                id: 3,
                name: 'Novidades',
                imageUrl: 'https://images.unsplash.com/photo-1599819055803-717bba43890f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                price: 35,
            },
            {
                id: 4,
                name: 'Cafe graos',
                imageUrl: 'https://images.unsplash.com/photo-1589476915062-05701fb874c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
                price: 25,
            },
            {
                id: 5,
                name: 'cafe drinks',
                imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                price: 18,
            },
            {
                id: 6,
                name: 'Cesta Multi',
                imageUrl: 'https://images.unsplash.com/photo-1633439708933-0c7f5ec0af96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1249&q=80',
                price: 14,
            },
        ],
    },
    {
        title: 'Tradicionais',
        items: [
            {
                id: 7,
                name: 'Baguette Tradiçao',
                imageUrl: 'https://images.unsplash.com/photo-1622808516114-02a5749cd965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2333&q=80',
                price: 22,
            },
            {
                id: 8,
                name: 'Baguette Parmesan',
                imageUrl: 'https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80',
                price: 28,
            },
            {
                id: 9,
                name: 'Baguette simples',
                imageUrl: 'https://images.unsplash.com/photo-1588616279830-ef7fa0299348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
                price: 11,
            },
            {
                id: 10,
                name: 'Brioche',
                imageUrl: 'https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
                price: 36,
            },
            {
                id: 11,
                name: 'Ciabatta',
                imageUrl: 'https://images.unsplash.com/photo-1586765501508-cffc1fe200c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
                price: 160,
            },
            {
                id: 12,
                name: 'Pao Completo',
                imageUrl: 'https://images.unsplash.com/photo-1549413468-cd78edb7e75c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80',
                price: 160,
            },
            {
                id: 13,
                name: 'Pao de leite',
                imageUrl: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
                price: 190,
            },
            {
                id: 14,
                name: 'Pao de oliva',
                imageUrl: 'https://images.unsplash.com/photo-1600398138360-ae1ac2285bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                price: 200,
            },
        ],
    },
    {
        title: 'Integrais',
        items: [
            {
                id: 15,
                name: 'Integral',
                imageUrl: 'https://images.unsplash.com/photo-1582502108738-680073fd694e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
                price: 125,
            },
            {
                id: 16,
                name: 'Multigraos',
                imageUrl: 'https://images.unsplash.com/photo-1598390475281-9eb7782fb4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2160&q=80',
                price: 30,
            },
            {
                id: 17,
                name: 'Pao Preto',
                imageUrl: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3289&q=80',
                price: 30,
            },
        ],
    },
    {
        title: 'Doces',
        items: [
            {
                id: 18,
                name: 'Sonho',
                imageUrl: 'https://images.unsplash.com/photo-1630845253483-5be7414e17f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                price: 25,
            },
            {
                id: 19,
                name: 'Torta de caramelo',
                imageUrl: 'https://images.unsplash.com/photo-1547047803-fa4a5f94ffd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                price: 20,
            },
            {
                id: 20,
                name: 'Torta de limao',
                imageUrl: 'https://images.unsplash.com/photo-1657756117226-0b9cdb57a05d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
                price: 80,
            },
            {
                id: 21,
                name: 'Torta de chocolate',
                imageUrl: 'https://images.unsplash.com/photo-1645752612050-11387096849c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
                price: 80,
            },
        ],
    },
    {
        title: 'Muito +++',
        items: [
            {
                id: 22,
                name: 'Chocoloko',
                imageUrl: 'https://images.unsplash.com/photo-1585219644870-54859de47db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
                price: 325,
            },
            {
                id: 23,
                name: 'Croissant',
                imageUrl: 'https://images.unsplash.com/photo-1596131032752-fde47e18ea62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80',
                price: 20,
            },
            {
                id: 24,
                name: 'Pain au chocolat',
                imageUrl: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
                price: 25,
            },
        ],
    },
];

export default SHOP_DATA;