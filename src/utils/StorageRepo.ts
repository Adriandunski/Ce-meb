import {storage} from "@/utils/firebase";
import {getDownloadURL, listAll, ref} from "@firebase/storage";

export async function getImage(imageUrl: string) {

    const imageRef = ref(storage, imageUrl);

    const url = await getDownloadURL(imageRef);


    return url;
}

export async function getAllFilesFromPath(folderName: string) {

    const folderRef = ref(storage, folderName);

    const fileList = await listAll(folderRef);
    return fileList.items;
}
