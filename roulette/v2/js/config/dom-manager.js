class DOMManager {
    constructor() {
        this.elements = this.cacheElements();
    }

    cacheElements() {
        return {
            currentNumber: document.getElementById('currentNumber'),
            numberInput: document.getElementById('numberInput'),
            addNumberBtn: document.getElementById('addNumberBtn'),
            resetBtn: document.getElementById('resetBtn'),
            undoBtn: document.getElementById('undoBtn'),
            undoCounter: document.getElementById('undoCounter'),
            hotContent: document.getElementById('hotContent'),
            historyGrid: document.getElementById('historyGrid'),
            verticalHistory: document.getElementById('verticalHistory')
        };
    }

    updateStreakValue(elementId, value) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const formattedValue = value.toString().padStart(2, '0');
        element.textContent = formattedValue;
        
        // Update streak class
        element.className = 'streak-value ' + this.getStreakClass(value);
    }

    getStreakClass(value) {
        if (value > CONFIG.MEDIUM_STREAK_THRESHOLD) return CONFIG.STREAK_CLASSES.HIGH;
        if (value > CONFIG.HOT_STREAK_THRESHOLD) return CONFIG.STREAK_CLASSES.MEDIUM;
        return CONFIG.STREAK_CLASSES.NORMAL;
    }
}
