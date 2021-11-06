const { Product } = require('../models');

const productData = [{
        product_name: 'Plain T-Shirt',
        price: 16.99,
        stock: 15,
        category_id: 1,
    },
    {
        product_name: 'Running Sneakers',
        price: 80.0,
        stock: 35,
        category_id: 5,
    },
    {
        product_name: 'Branded Baseball Hat',
        price: 24.99,
        stock: 15,
        category_id: 4,
    },
    {
        product_name: 'Top 40 Music Compilation Vinyl Record',
        price: 15.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Cargo Shorts',
        price: 19.99,
        stock: 20,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;