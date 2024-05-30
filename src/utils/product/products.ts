export class Product {
    id: number;
    category: string
    name: string;
    price: number;
    photoSrc: string;


    constructor(id: number, category: string, name: string, price: number, photoSrc: string) {
        this.id = id;
        this.category = category;
        this.price = price;
        this.name = name;
        this.photoSrc = photoSrc;
    }
}

export const products = [
    {id: 1, category: 'Krzesło', name: 'Test2', price: 120, photoSrc: '/photoProduct/1'},
    {id: 2, category: 'Krzesło', name: 'Test3', price: 120, photoSrc: '/photoProduct/2'},
    {id: 3, category: 'Krzesło', name: 'Test4', price: 120, photoSrc: '/photoProduct/3'},
    {id: 4, category: 'Krzesło', name: 'Test5', price: 120, photoSrc: '/photoProduct/4'},
    {id: 5, category: 'Krzesło', name: 'Test6', price: 120, photoSrc: '/photoProduct/5'},
    {id: 6, category: 'Sofa', name: 'Test7', price: 120, photoSrc: '/photoProduct/1'},
    {id: 7, category: 'Sofa', name: 'Test8', price: 120, photoSrc: '/photoProduct/1'},
    {id: 8, category: 'Sofa', name: 'Test9', price: 120, photoSrc: '/photoProduct/1'},
    {id: 9, category: 'Sofa', name: 'Test10', price: 120, photoSrc: '/photoProduct/1'},
    {id: 10, category: 'Sofa', name: 'Test11', price: 120, photoSrc: '/photoProduct/1'},
    {id: 11, category: 'Sofa', name: 'Test12', price: 120, photoSrc: '/photoProduct/1'},

]
