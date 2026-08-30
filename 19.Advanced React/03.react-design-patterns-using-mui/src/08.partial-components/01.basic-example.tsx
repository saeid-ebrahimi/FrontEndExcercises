import MuiButton from '@mui/material/Button';
import { ComponentType } from 'react';

interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    bgColor: string;
    text: string;
    disabled?: boolean;
};

function partialComponent<
    P extends object,
    PP extends Partial<P>
>(Component: ComponentType<P>, partialProps: PP):
    ComponentType<Omit<P, keyof PP>> {
    return (props) => {
        const mergedProps = {
            ...partialProps,
            ...props,
        } as unknown as P;
        return <Component {...mergedProps} />
    }
}

export function Button({ size, bgColor, text, disabled }: ButtonProps) {
    return <MuiButton disabled={disabled} size={size} variant={"contained"}
        sx={{
            fontSize: size === 'large' ? '25px' : '16px',
            backgroundColor: bgColor,
            '&:hover': {
                backgroundColor: bgColor,
            },
        }}
    >
        {text}
    </MuiButton>
};

export const ErrorButton = partialComponent(Button, { bgColor: "crimson" })
