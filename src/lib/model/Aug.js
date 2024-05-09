/** @type {Aug[]} */

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
        level = "built-in",
        /** @type {"cranium" | "eyes" | "torso" | "arms" | "back" | "skin" | "legs"} */
        bodyPart = "cranium",
        praxis = 0,
        /** @type {"always-on" | "contextual" | "automatic" | "manual"} */
        activation = "always-on",
        /** @type {string[]} */
        dependencies = [],
        costOnActivation = 0,
        costPerMove = 0,
        costPerTurn = 0,
    ) {
        this.name = name;
        this.iconPath = iconPath;
        this.description = description;
        this.level = level;
        this.bodyPart = bodyPart;
        this.praxis = praxis;
        this.activation = activation;
        this.dependencies = dependencies;
        this.costOnActivation = costOnActivation;
        this.costPerMove = costPerMove;
        this.costPerTurn = costPerTurn;
    }
}

export const augLevels = ["built-in", "civilian", "vip-medical", "military", "experimental"];
export const augBodyParts = ["cranium", "eyes", "torso", "arms", "back", "skin", "legs"];
