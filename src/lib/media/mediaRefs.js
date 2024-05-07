import { browser } from '$app/environment';
import backgroundRoomBelltower from '$lib/media/backgrounds/room-belltower.jpg';
import backgroundAbstractDark from '$lib/media/backgrounds/low-poly-black.jpg';

export const menuBackground = backgroundRoomBelltower;
export const panelBackground = backgroundAbstractDark;

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