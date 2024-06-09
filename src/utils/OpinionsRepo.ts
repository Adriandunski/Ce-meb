import {child, get, off, ref} from "@firebase/database";
import {databaseJson} from "@/utils/firebase";


export async function getOpinions() {
    const dbRef = ref(databaseJson);

    const snapchot = await get(child(dbRef, 'Opinions/'));

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

