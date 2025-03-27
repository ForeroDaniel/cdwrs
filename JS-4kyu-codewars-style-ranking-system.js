class User {
    static validRanks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

    constructor() {
        this._rank = -8;
        this.progress = 0;
    }

    get rank() {
        return this._rank;
    }

    incProgress(activityRank) {
        const validRanks = User.validRanks;
        if (!validRanks.includes(activityRank)) {
            throw new Error("Invalid activity rank");
        }

        if (this._rank === 8) {
            return;
        }

        const userIndex = validRanks.indexOf(this._rank);
        const activityIndex = validRanks.indexOf(activityRank);

        let points = 0;
        if (activityRank === this._rank) {
            points = 3;
        } else if (activityIndex < userIndex) {
            const difference = userIndex - activityIndex;
            if (difference === 1) {
                points = 1;
            } else {
                points = 0;
            }
        } else {
            const difference = activityIndex - userIndex;
            points = 10 * difference * difference;
        }

        this.progress += points;

        while (this.progress >= 100 && this._rank !== 8) {
            this.progress -= 100;
            const currentIndex = validRanks.indexOf(this._rank);
            const nextIndex = currentIndex + 1;

            if (nextIndex >= validRanks.length) {
                this._rank = 8;
                this.progress = 0;
                break;
            } else {
                this._rank = validRanks[nextIndex];
                if (this._rank === 8) {
                    this.progress = 0;
                    break;
                }
            }
        }
    }
}
