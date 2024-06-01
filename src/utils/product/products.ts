export class Product {
    id: number;
    category: string
    name: string;
    price: number;
    photoSrc: string;
    measure: string[][];


    constructor(id: number, category: string, name: string, price: number, photoSrc: string, measure: string[][]) {
        this.id = id;
        this.category = category;
        this.price = price;
        this.name = name;
        this.photoSrc = photoSrc;
        this.measure = measure;
    }
}

export const products = [
    {id: 1, category: 'Krzesło', name: 'KLASYCZNE KRZESŁO KUBEŁKOWE DĘBOWE - BOMAR - SANN DĄB', price: 849.01, photoSrc: '/photoProduct/1', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wusokość siedziska', '47 cm']]},
    {id: 2, category: 'Krzesło', name: 'NOWOCZESNY DREWNIANY STÓŁ ROZKŁADANY - BOMAR - WONK 100 CM', price: 4370.00, photoSrc: '/photoProduct/2'},
    {id: 3, category: 'Krzesło', name: 'KRZESŁO AVOLA A-1411 DĄB FAMEG', price: 986.00, photoSrc: '/photoProduct/3'},
    {id: 4, category: 'Krzesło', name: 'NOWOCZESNY NAROŻNIK Z FUNKCJĄ SPANIA BENIX - LIVIO', price: 5499.00, photoSrc: '/photoProduct/4'},
    {id: 5, category: 'Krzesło', name: 'Test6', price: 120, photoSrc: '/photoProduct/5'},
    {id: 6, category: 'Sofa', name: 'Test7', price: 120, photoSrc: '/photoProduct/1'},
    {id: 7, category: 'Sofa', name: 'Test8', price: 120, photoSrc: '/photoProduct/1'},
    {id: 8, category: 'Sofa', name: 'Test9', price: 120, photoSrc: '/photoProduct/1'},
    {id: 9, category: 'Sofa', name: 'Test10', price: 120, photoSrc: '/photoProduct/1'},
    {id: 10, category: 'Sofa', name: 'Test11', price: 120, photoSrc: '/photoProduct/1'},
    {id: 11, category: 'Sofa', name: 'Test12', price: 120, photoSrc: '/photoProduct/1'},
]
