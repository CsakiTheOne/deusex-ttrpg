export default class Character {
    constructor(
        name = '',
        backstory = '',
        praxis = 0,
        /** @type {import('./Aug').default[]} */
        augs = [],
        /** @type {import('./Aug').default[]} */
        disabledAugs = [],
    ) {
        this.name = name;
        this.backstory = backstory;
        this.praxis = praxis;
        this.augs = augs;
        this.disabledAugs = disabledAugs;
    }
}