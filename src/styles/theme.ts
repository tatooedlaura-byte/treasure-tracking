// Theme colors matching iOS app (from Theme.swift)

export const colors = {
  // Primary brand colors
  appPrimary: 'rgb(51, 89, 115)',      // #335973 - Deeper slate blue
  appSecondary: 'rgb(230, 115, 102)',  // #E67366 - Stronger coral
  appAccent: 'rgb(51, 166, 140)',      // #33A68C - Vibrant teal

  // Light mode backgrounds
  appBackground: 'rgb(240, 237, 230)', // #F0EDE6 - Warm cream
  cardBackground: '#FFFFFF',

  // Dark mode colors
  darkBackground: 'rgb(20, 26, 31)',   // #141A1F
  darkCardBackground: 'rgb(36, 41, 46)', // #24292E
  tanText: 'rgb(242, 224, 191)',       // #F2E0BF - Warm tan

  // Status colors
  appSuccess: 'rgb(51, 166, 140)',     // Same as accent
  appWarning: 'rgb(230, 115, 102)',    // Same as secondary

  // Icon colors
  iconTeal: 'rgb(51, 166, 140)',       // Vibrant teal
  iconCoral: 'rgb(230, 115, 102)',     // Stronger coral
  iconSlate: 'rgb(51, 89, 115)',       // Deeper slate
  iconMint: 'rgb(102, 191, 166)',      // Richer mint
  iconPeach: 'rgb(242, 153, 128)',     // Richer peach

  // Collection type colors
  currency: 'rgb(217, 166, 51)',       // #D9A633 - Rich gold
  stamps: 'rgb(230, 115, 102)',        // #E67366 - Strong coral
  cards: 'rgb(51, 166, 140)',          // #33A68C - Vibrant teal
  dvds: 'rgb(51, 89, 115)',            // #335973 - Deep slate
  vinyl: 'rgb(38, 51, 64)',            // #263340 - Dark slate
  books: 'rgb(77, 140, 166)',          // #4D8CA6 - Stronger teal-blue
  comics: 'rgb(230, 128, 102)',        // #E68066 - Vivid coral
  toys: 'rgb(242, 179, 26)',           // #F2B31A - Bright Lego yellow
  other: 'rgb(115, 122, 115)',         // #737A73 - Darker gray

  // Condition colors
  conditionMint: 'rgb(255, 214, 0)',      // Gold
  conditionNearMint: 'rgb(153, 204, 51)', // Lime
  conditionExcellent: 'rgb(77, 191, 102)',// Green
  conditionVeryGood: 'rgb(77, 179, 230)', // Blue
  conditionGood: 'rgb(128, 128, 230)',    // Purple
  conditionFair: 'rgb(242, 153, 51)',     // Orange
  conditionPoor: 'rgb(230, 77, 77)',      // Red
};

// Spacing scale
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

// Border radius
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
};

// Shadows
export const shadows = {
  card: '0 4px 8px rgba(0, 0, 0, 0.08)',
  cardHover: '0 8px 16px rgba(0, 0, 0, 0.12)',
  button: '0 2px 4px rgba(51, 166, 140, 0.4)',
};

// Transitions
export const transitions = {
  fast: '0.15s ease-in-out',
  normal: '0.25s ease-in-out',
  slow: '0.35s ease-in-out',
};

// Font sizes
export const fontSizes = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  md: '1rem',      // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  xxl: '1.5rem',   // 24px
  title: '2.125rem', // 34px
};

// Font weights
export const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  modal: 200,
  toast: 300,
};
