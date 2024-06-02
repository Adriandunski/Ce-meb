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
    {id: 1, category: 'Krzesło', name: 'KLASYCZNE KRZESŁO KUBEŁKOWE DĘBOWE - BOMAR - SANN DĄB', price: 849.01, photoSrc: '/photoProduct/1', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
    {id: 2, category: 'Krzesło', name: 'NOWOCZESNY DREWNIANY STÓŁ ROZKŁADANY - BOMAR - WONK 100 CM', price: 4370.00, photoSrc: '/photoProduct/2', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
    {id: 3, category: 'Krzesło', name: 'KRZESŁO AVOLA A-1411 DĄB FAMEG', price: 986.00, photoSrc: '/photoProduct/3', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
    {id: 4, category: 'Krzesło', name: 'NOWOCZESNY NAROŻNIK Z FUNKCJĄ SPANIA BENIX - LIVIO', price: 5499.00, photoSrc: '/photoProduct/4', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
    {id: 4, category: 'Krzesło', name: 'NOWOCZESNY NAROŻNIK Z FUNKCJĄ SPANIA BENIX - LIVIO', price: 5499.00, photoSrc: '/photoProduct/4', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
    {id: 4, category: 'Krzesło', name: 'NOWOCZESNY NAROŻNIK Z FUNKCJĄ SPANIA BENIX - LIVIO', price: 5499.00, photoSrc: '/photoProduct/4', measure: [['Wysokość','120 cm'], ['Szerokość','180 cm'], ['Glębokość','180 cm'], ['Wysokość siedziska', '47 cm']]},
]
