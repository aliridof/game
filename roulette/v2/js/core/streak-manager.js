class StreakManager {
    static getNumberCategories(number) {
        return {
            dozen: this.getDozen(number),
            column: this.getColumn(number),
            size: this.getSize(number),
            parity: this.getParity(number),
            color: this.getColor(number)
        };
    }

    static getDozen(number) {
        if (number === 00) return 'D0';
        if (number === 0) return 'D0';
        if (number >= 1 && number <= 12) return 'D1';
        if (number >= 13 && number <= 24) return 'D2';
        if (number >= 25 && number <= 36) return 'D3';
        return '-';
    }

    // ... methods lainnya
}
