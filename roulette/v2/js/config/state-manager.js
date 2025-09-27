class StateManager {
    constructor() {
        this.streaks = this.initializeStreaks();
        this.history = [];
        this.currentNumber = null;
        this.undoStack = [];
    }

    initializeStreaks() {
        const categories = ['d0', 'd1', 'd2', 'd3', 'c0', 'c1', 'c2', 'c3', 
                           'zeroSize', 'small', 'big', 'zeroParity', 'even', 'odd', 
                           'zeroColor', 'red', 'black'];
        return Object.fromEntries(categories.map(cat => [cat, 0]));
    }

    saveStateForUndo() {
        if (this.undoStack.length >= CONFIG.MAX_UNDO) {
            this.undoStack.shift();
        }
        
        this.undoStack.push({
            streaks: {...this.streaks},
            currentNumber: this.currentNumber,
            history: [...this.history]
        });
    }

    undo() {
        if (this.undoStack.length === 0) return false;
        
        const previousState = this.undoStack.pop();
        this.streaks = {...previousState.streaks};
        this.currentNumber = previousState.currentNumber;
        this.history = [...previousState.history];
        
        return true;
    }

    reset() {
        this.streaks = this.initializeStreaks();
        this.history = [];
        this.currentNumber = null;
        this.undoStack = [];
    }
}
