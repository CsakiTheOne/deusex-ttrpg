import augs from "$lib/static-data/augs.json";

/**
 * Sources:
 * - https://deusex.fandom.com/wiki/Augmentations_(DXMD)
 * - https://mankinddivided-archive.fandom.com/wiki/Augmentations
 */

export default class Aug {
    constructor(
        name = "",
        iconPath = "",
        description = "",
        /** @type {"built-in" | "civilian" | "vip-medical" | "military" | "experimental"} */
        augClass = "built-in",
        /** @type {"cranium" | "eyes" | "torso" | "arms" | "back" | "skin" | "legs"} */
        bodyPart = "cranium",
        maxLevel = 1,
        praxis = 0,
        upgradePraxis = 0,
        /** @type {"always-on" | "contextual" | "automatic" | "manual"} */
        activation = "always-on",
        /** @type {string[]} */
        children = [],
        costOnActivation = 0,
        costPerMove = 0,
        costPerTurn = 0,
        /** @type {import('./AugBonus').default[]} */
        bonuses = [],
        /** @type {string[]} */
        tags = [],
    ) {
        this.name = name;
        this.iconPath = iconPath;
        this.description = description;
        this.augClass = augClass;
        this.bodyPart = bodyPart;
        this.maxLevel = maxLevel;
        this.praxis = praxis;
        this.upgradePraxis = upgradePraxis;
        this.activation = activation;
        this.children = children;
        this.costOnActivation = costOnActivation;
        this.costPerMove = costPerMove;
        this.costPerTurn = costPerTurn;
        this.bonuses = bonuses;
        this.tags = tags;
    }
}

export const augClasses = ["built-in", "civilian", "vip-medical", "military", "experimental"];
export const augBodyParts = ["cranium", "eyes", "torso", "arms", "back", "skin", "legs"];


/**
 * @param {import("$lib/model/Character").default} character
 * @param {import("$lib/model/Aug").default} aug
 */
export function getAugState(character, aug) {
    if (character.disabledAugs.includes(aug.name)) return "disabled";
    if (character.augs.includes(aug.name)) {
        /** @type {Array<import("$lib/model/Aug").default>} */
        const children = aug.children.map((childName) =>
            augs.find((aug) => aug.name === childName),
        );
        if (
            aug.children.length < 1 ||
            children.every((child) => getAugState(character, child) === "full")
        ) {
            return "full";
        }
        return "partial";
    }
    return "inactive";
}