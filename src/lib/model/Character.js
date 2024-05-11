import augs from "$lib/static-data/augs.json";

export default class Character {
    constructor(
        name = '',
        backstory = '',
        health = {
            current: 0,
            max: 0,
        },
        energy = {
            current: 0,
            max: 0,
        },
        attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            charisma: 0,
        },
        skills = {
            athletics: 0,
            deception: 0,
            hacking: 0,
            history: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            religion: 0,
            sleightOfHand: 0,
            stealth: 0,
            survival: 0,
            technology: 0,
        },
        stats = {
            armorClass: 0,
            speed: 0,
            initiative: 0,
            poisionResistance: 0,
            toxicGasResistance: 0,
            hackingFortify: 0,
            hackingStealth: 0,
        },
        /** @type {{[key: string]: number}} */
        inventory = {},
        units = 0,
        praxis = 0,
        /** @type {"built-in" | "civilian" | "vip-medical" | "military" | "experimental"} */
        augClassAccess = "civilian",
        /** @type {string[]} */
        augs = [],
        /** @type {{[key: string]: number}} */
        augLevels = {},
        /** @type {string[]} */
        disabledAugs = [],
        /** @type {string[]} */
        notes = [],
        /** @type {string[]} */
        tags = [],
    ) {
        this.name = name;
        this.backstory = backstory;
        this.health = health;
        this.energy = energy;
        this.attributes = attributes;
        this.skills = skills;
        this.stats = stats;
        this.inventory = inventory;
        this.units = units;
        this.praxis = praxis;
        this.augClassAccess = augClassAccess;
        this.augs = augs;
        this.augLevels = augLevels;
        this.disabledAugs = disabledAugs;
        this.notes = notes;
        this.tags = tags;
    }
}

const baseCharacter = new Character(
    'Test Character',
    'This is a test character.',
    { current: 10, max: 10 },
    { current: 10, max: 10 },
    { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, charisma: 10 },
    { athletics: 0, deception: 0, hacking: 0, history: 0, investigation: 0, medicine: 0, nature: 0, perception: 0, religion: 0, sleightOfHand: 0, stealth: 0, survival: 0, technology: 0 },
    { armorClass: 10, speed: 30, initiative: 0, poisionResistance: 0, toxicGasResistance: 0, hackingFortify: 0, hackingStealth: 0 },
    {},
    0,
    10,
    'civilian',
    augs.filter(aug => aug.augClass === "built-in").map(aug => aug.name),
    {},
    [],
    [],
    [],
);

export { baseCharacter };