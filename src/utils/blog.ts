import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Obtiene la fecha actual en la zona horaria de España/Europa (formato YYYY-MM-DD)
 */
export function getSpainTodayString(): string {
  return new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Madrid' });
}

/**
 * Filtra y devuelve solo los posts publicados (cuya fecha de publicación sea anterior o igual a hoy en España)
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getCollection('blog');
  const spainToday = getSpainTodayString();
  
  return allPosts.filter(post => {
    const pubDate = post.data.pubDate || post.data.date;
    if (!pubDate) return true; // Si no hay fecha, se publica por defecto
    
    // Astro parsea las fechas como medianoche UTC, por lo que toISOString().split('T')[0] devuelve YYYY-MM-DD
    const pubDateStr = pubDate.toISOString().split('T')[0];
    return pubDateStr <= spainToday;
  });
}
