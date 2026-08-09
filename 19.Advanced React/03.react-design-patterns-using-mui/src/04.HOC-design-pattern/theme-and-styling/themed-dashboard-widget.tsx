import React from 'react';
import { Paper, Box } from '@mui/material';

// 1. Define the shape of the injected theme/styling props
interface ThemeProps {
    theme: {
        mode: 'light' | 'dark';
        backgroundColor: string;
        textColor: string;
        padding: string;
    };
}

// 2. Styling HOC implementation
function withTheme<P extends object>(
    WrappedComponent: React.ComponentType<P & ThemeProps>
) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    return function ThemedComponent(props: Omit<P, keyof ThemeProps>) {
        // Simulate fetching or calculating theme preferences dynamically
        const currentTheme = {
            mode: 'dark' as const,
            backgroundColor: '#1e1e1e',
            textColor: '#ffffff',
            padding: '24px',
        };

        // Construct the injected styling props
        const injectedThemeProps: ThemeProps = {
            theme: currentTheme,
        };

        // Combine external props with the injected theme props and cast to satisfy TS
        const combinedProps = {
            ...props,
            ...injectedThemeProps,
        } as unknown as P & ThemeProps;

        return (
            <Paper
                elevation={3}
                style={{
                    backgroundColor: currentTheme.backgroundColor,
                    color: currentTheme.textColor,
                    padding: currentTheme.padding
                }}
            >
                <WrappedComponent {...combinedProps} />
            </Paper>
        );
    };
}

// --- Usage Example ---

interface DashboardWidgetProps extends ThemeProps {
    title: string;
}

// 1. Base UI Component requiring theme props
function DashboardWidget({ title, theme }: DashboardWidgetProps) {
    return (
        <Box>
            <h2>{title}</h2>
            <p>Current active theme mode: <strong>{theme.mode}</strong></p>
        </Box>
    );
}

// 2. Wrap the component with the theme HOC
// Consumers only need to pass external props like `title`, while the HOC handles the styling injection automatically.
export const ThemedDashboardWidget = withTheme(DashboardWidget);

// --- How you use it in your app ---
// <ThemedDashboardWidget title="User Statistics" />