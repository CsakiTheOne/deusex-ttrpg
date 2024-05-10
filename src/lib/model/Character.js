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
            poisionResistance: 0,
            toxicGasResistance: 0,
        },
        /** @type {{[key: string]: number}} */
        inventory = {},
        units = 0,
        praxis = 0,
        /** @type {"built-in" | "civilian" | "vip-medical" | "military" | "experimental"} */
        augAccessLevel = "civilian",
        /** @type {string[]} */
        augs = [],
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
        this.augAccessLevel = augAccessLevel;
        this.augs = augs;
        this.disabledAugs = disabledAugs;
        this.notes = notes;
        this.tags = tags;
    }
}