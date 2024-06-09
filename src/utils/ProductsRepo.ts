import {child, get, off, ref} from "@firebase/database";
import {databaseJson} from "@/utils/firebase";
import {Product} from "@/utils/product/products";


export async function getProducts(): Promise<Product[]> {
    const dbRef = ref(databaseJson);

    const snapchot = await get(child(dbRef, 'Products/'));

    if (snapchot.exists()) {
        const data = snapchot.val();
        const myObject = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        }));
        off(dbRef);
        return myObject;
    } else {
        off(dbRef);
        return [];
    }
}

export async function getProductByIdFirebse(id: number): Promise<Product[]> {
    const dbRef = ref(databaseJson);

    const snapchot = await get(child(dbRef, 'Products/'));

    if (snapchot.exists()) {
        const data = snapchot.val();
        const myObject = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        })).filter(value => value.id === id);
        off(dbRef);
            return myObject;
    } else {
        off(dbRef);
        return [];
    }
}

