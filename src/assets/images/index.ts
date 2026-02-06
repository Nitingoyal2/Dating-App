// ============================================
// Centralized Image Exports
// ============================================

// Carousel images
import crousal1 from './crousal1.jpg';
import crousal2 from './crousal2.jpg';
import crousal5 from './crousal5.png';

// Login images
import login1 from './login1.jpg';
import login2 from './login2.jpg';

// Icons
import coinIcon from './coin.png';
import diamondIcon from './diamond.png';
import fireIcon from './fire.png';
import pencilIcon from './pencil.png';
import settingIcon from './setting.png';
import shieldIcon from './shield.png';

// Export all images
export {
    // Carousel
    crousal1,
    crousal2,
    crousal5,
    // Login
    login1,
    login2,
    // Icons
    coinIcon,
    diamondIcon,
    fireIcon,
    pencilIcon,
    settingIcon,
    shieldIcon,
};

// Also export as a grouped object for convenience
export const Images = {
    carousel: {
        slide1: crousal1,
        slide2: crousal2,
        slide5: crousal5,
    },
    login: {
        bg1: login1,
        bg2: login2,
    },
    icons: {
        coin: coinIcon,
        diamond: diamondIcon,
        fire: fireIcon,
        pencil: pencilIcon,
        setting: settingIcon,
        shield: shieldIcon,
    },
} as const;

