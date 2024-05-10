export default class AugBonus {
    constructor(
        /** @type {string} */
        stat,
        /** @type {number} */
        value,
        /** @type {"+" | "*" | "%"} */
        unit,
    ) {
        this.stat = stat;
        this.value = value;
        this.unit = unit;
    }
}