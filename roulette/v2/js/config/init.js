// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize error handling first
        ErrorHandler.init();
        
        // Create main application instance
        window.rouletteApp = new RouletteTracker();
        
        console.log('Roulette Tracker initialized successfully');
    } catch (error) {
        console.error('Failed to initialize application:', error);
        ErrorHandler.handleError(error);
    }
});
