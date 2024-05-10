import { browser } from '$app/environment';
import backgroundRoomBelltower from '$lib/media/backgrounds/room-belltower.jpg';
import backgroundAbstractDark from '$lib/media/backgrounds/low-poly-black.jpg';
const augIconModules = import.meta.glob("$lib/media/aug-icons/*.png");

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

/** @type {string[]} */
let augIcons = [];

for (const path in augIconModules) {
    augIconModules[path]().then((module) => {
        augIcons.push(module.default);
    });
}

/**
 * @param {import('$lib/model/Aug').default} aug
 * @returns {Promise<string>}
 */
export function getAugIcon(aug) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const icon = augIcons.find((icon) => icon.toLowerCase().includes(aug.iconPath.toLowerCase()));
            if (!icon) reject(`Icon not found for ${aug.iconPath}`);
            else resolve(icon);
        }, 200);
    });
}
