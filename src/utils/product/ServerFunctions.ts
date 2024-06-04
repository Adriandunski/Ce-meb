'use server'
import fs from 'fs';
import path from "node:path";

export async function countFiles(productId: number) {
    const publicDirectory = path.join(process.cwd(), 'public');
    const photoNames = await fs.promises.readdir(`${publicDirectory}/photoProduct/${productId}`)
    return photoNames.map(value => {return `/photoProduct/${productId}/${value}`})
}

export async function countRenowacje() {
    const publicDirectory = path.join(process.cwd(), 'public');
    return await fs.promises.readdir(`${publicDirectory}/renowacje/siteRenowacje`)
}
