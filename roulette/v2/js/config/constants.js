// Application constants and configuration
const CONFIG = {
    MAX_HISTORY: 100,
    MAX_UNDO: 5,
    HOT_STREAK_THRESHOLD: 5,
    MEDIUM_STREAK_THRESHOLD: 10,
    STORAGE_KEY: 'rouletteTrackerData',
    
    STREAK_CLASSES: {
        NORMAL: 'streak-normal',
        MEDIUM: 'streak-medium', 
        HIGH: 'streak-high'
    },
    
    CATEGORY_GROUPS: {
        DOZEN: 'DOZEN',
        COLUMN: 'COLUMN',
        SIZE: 'BESAR-KECIL',
        PARITY: 'GANJIL-GENAP',
        COLOR: 'HITAM-MERAH'
    }
};
