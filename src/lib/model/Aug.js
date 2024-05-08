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

const augsBuiltIn = [
    new Aug(
        "Retinal HUD",
        "$lib/media/icons/augs/Icon_Retinal_Hud.png",
        "Displays information on your surroundings in augmented reality.",
        "built-in",
        "eyes",
        0,
        "manual",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Infolink",
        "$lib/media/icons/augs/Icon_Infolink.png",
        "Allows you to communicate without a physical device.",
        "built-in",
        "cranium",
        0,
        "automatic",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Sentinel RX Health System",
        "$lib/media/icons/augs/Icon_Sentinel_Rx_Health_System.png",
        "Automatically administers medical care out of intense situations.",
        "built-in",
        "torso",
        0,
        "always-on",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Cybernetic Arm Prosthesis",
        "$lib/media/icons/augs/Icon_Cybernetic_Arm_Prosthesis.png",
        "Enhances your strength and combat capabilities.",
        "built-in",
        "arms",
        0,
        "always-on",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Cybernetic Leg Prosthesis",
        "$lib/media/icons/augs/Icon_Cybernetic_Leg_Prosthesis.png",
        "Enhances your movement capabilities.",
        "built-in",
        "legs",
        0,
        "always-on",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Factory Default Biocells",
        "$lib/media/icons/augs/Icon_Sarif_Series_8_Energy_Converter.png",
        "Your energy source for augmentations. Replenished by biocells. Also recharges while resting for a long time.",
        "built-in",
        "torso",
        0,
        "always-on",
        [],
        0,
        0,
        0,
    ),
];
const augsCivilian = [
    new Aug(
        "Sarif Series 8 Energy Converter",
        "$lib/media/icons/augs/Icon_Sarif_Series_8_Energy_Converter.png",
        "A better energy source for augmentations. Replenished by biocells. Also recharges while resting for a short time and partially regenerates out of combat.",
        "civilian",
        "torso",
        2,
        "always-on",
        [],
        0,
        0,
        0,
    ),
    new Aug(
        "Camera Domination",
        "$lib/media/icons/augs/Icon_Camera_Domination.png",
        "Allows you to view and control cameras.",
        "civilian",
        "cranium",
        1,
        "automatic",
        ["Hacking Capture"],
        0,
        0,
        0,
    ),
];
const augsVipMedical = [

];
const augsMilitary = [

];
const augsExperimental = [

];

const augs = [
    augsBuiltIn,
    augsCivilian,
    augsVipMedical,
    augsMilitary,
    augsExperimental,
].flat();

export { augsBuiltIn, augsCivilian, augsVipMedical, augsMilitary, augsExperimental, augs };