'use server';

export default async function getAllCategories() {
    const res = await fetch('http://127.0.0.1:8000/api/songs?page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Para garantir que o fetch sempre faça uma requisição fresh
    });
  
    if (!res.ok) {
      throw new Error('Falha ao buscar músicas');
    }
  
    const data = await res.json();

    const categories = Array.from(new Set(data.member.map((song: any) => song.category)));
    return categories;
}