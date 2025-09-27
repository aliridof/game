class RouletteTracker {
    constructor() {
        this.stateManager = new StateManager();
        this.domManager = new DOMManager();
        this.historyManager = new HistoryManager();
        this.hotCategoriesManager = new HotCategoriesManager();
        
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.updateDisplay();
    }

    setupEventListeners() {
        this.domManager.elements.addNumberBtn.addEventListener('click', () => this.addNumber());
        this.domManager.elements.resetBtn.addEventListener('click', () => this.resetAll());
        this.domManager.elements.undoBtn.addEventListener('click', () => this.undo());
        
        this.domManager.elements.numberInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addNumber();
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                e.preventDefault();
                this.undo();
            }
        });
    }

    addNumber() {
        try {
            const inputValue = this.domManager.elements.numberInput.value;
            const number = Validator.validateNumber(inputValue);
            
            this.stateManager.saveStateForUndo();
            this.processNumber(number);
            this.domManager.elements.numberInput.value = '';
            
        } catch (error) {
            Notification.showError(error.message);
        }
    }

    processNumber(number) {
        // ... logic processing number
        this.updateDisplay();
    }

    updateDisplay() {
        this.updateCurrentNumber();
        this.updateStreaksDisplay();
        this.hotCategoriesManager.update(this.stateManager.streaks);
        this.historyManager.update(this.stateManager.history);
        this.updateUndoButton();
    }

    // ... methods lainnya
}
