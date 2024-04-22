export const SAMPLE_PRODUCTS_FROM_API = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
]
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        images: [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        images: [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
    }
];
export const SAMPLE_PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    }
];

export const SAMPLE_USER = {
    username: "atuny0",
    firstName: "Terry",
    lastName: "Medhurst",
    avatar: "https://robohash.org/Terry.png?set=set4",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL1RlcnJ5LnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMzYxMTU2OSwiZXhwIjoxNzEzNjE1MTY5fQ.hhTg1bXOvzWkYZ0OEjEll10u9KyCrqI6m2DTotyRx-w"
}

export const SAMPLE_USER_FROM_API = {
    id: 1,
    username: "atuny0",
    firstName: "Terry",
    lastName: "Medhurst",
    image: "https://robohash.org/Terry.png?set=set4",
    gender: "male",
    email: "atuny0@sohu.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL1RlcnJ5LnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMzYxMTU2OSwiZXhwIjoxNzEzNjE1MTY5fQ.hhTg1bXOvzWkYZ0OEjEll10u9KyCrqI6m2DTotyRx-w"
}

export const SAMPLE_INVALID_CREDENTIALS = {
    message: 'Invalid credentials'
}

export const SAMPLE_CART = {
    grandTotal: 549,
    productList: [
       SAMPLE_PRODUCTS[0]
    ]
}

export const SAMPLE_LOGIN_REQUEST = {
    username: 'atuny0',
    password: '9uQFF1Lh'
}

export const SAMPLE_INVALID_LOGIN_REQUEST_1 = {
    username: '',
    password: '9uQFF1Lh'
}

export const SAMPLE_INVALID_LOGIN_REQUEST_2 = {
    username1: 'atuny0',
    password: '9uQFF1Lh'
}

export const SAMPLE_ADD_CART_REQUEST = {
   productId: 1
}