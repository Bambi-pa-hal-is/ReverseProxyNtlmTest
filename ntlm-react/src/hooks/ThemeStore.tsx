import { createTheme, Shadows, Theme, ThemeOptions } from '@mui/material/styles';
import { create } from "zustand";

interface ThemeState {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];

const lightTheme = createTheme({
    shadows: defaultShadows.map(() => 'none') as Shadows,
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                rounded: {
                    borderRadius: "0px"
                }
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#3c4656',
        },
        secondary: {
            main: '#4b4458',
        },
        background: {
            default: '#ebebeb',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#000000',
        },
        error: {
            main: '#e57373',
        },
    },
});


const darkTheme = createTheme({
    shadows: defaultShadows.map(() => 'none') as Shadows,
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                rounded: {
                    borderRadius: "0px"
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#203044',
        },
        secondary: {
            main: '#4c4659',
        },
        background: {
            default: '#1e2d42',
            paper: '#2e3646',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#ffffff',
        },
        error: {
            main: '#d32f2f',
        },
    },
});

const getPreferredTheme = () => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'light' ? lightTheme : darkTheme;
    }

    // Fallback to OS preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? darkTheme : lightTheme;
};

const useThemeStore = create<ThemeState>((set) => ({
    theme: getPreferredTheme(),
    toggleTheme: () => set((state) => {
        const newTheme = state.theme.palette.mode === 'light' ? darkTheme : lightTheme;
        localStorage.setItem('theme', newTheme.palette.mode); // Save new preference
        return { theme: newTheme };
    }),
}));

export default useThemeStore;