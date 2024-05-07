import { browser } from '$app/environment';
import backgroundRoomBelltower from '$lib/media/backgrounds/room-belltower.jpg';

export const menuBackground = backgroundRoomBelltower;

/**
 * @param {string} imageUrl
*/
export function setBackgrounImage(imageUrl) {
    if (!browser) return;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}