'use server';
import songs from "../constants/songs";
import { delay } from "./utils";

export default async function getAllSongsByCategory(category: any) {
    await delay(2000);
    const beats = songs.filter((s) => s.category === category)
    return beats;

}