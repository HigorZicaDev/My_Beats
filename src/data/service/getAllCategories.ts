'use server';
import songs from "../constants/songs";
import { delay } from "./utils";

export default async function getAllCategories() {
    await delay(2000);
    const categories = Array.from(new Set(songs.map(song => song.category)));

    return categories;

}