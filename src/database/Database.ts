import { CartContent, Product } from "../types";

export class Database {
    private readonly products: Product[];
    private readonly cart: Record<number, CartContent>;

    constructor() {
        this.products = [];
        this.cart = {}
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id)
    }
    getCart(userId: number): CartContent {
        return this.cart[userId];
    }

    setProducts(products: Product[])  {
        this.products.push(...products)
    }

    updateCart(userId: number, product: Product, grandTotal: number) {
        if(!this.cart[userId]) {
            this.cart[userId] = {
                grandTotal: 0,
                productList: []
            }
        }
        this.cart[userId].grandTotal = grandTotal;
        if(product) {
            this.cart[userId].productList.push(product)
        }
    }
}