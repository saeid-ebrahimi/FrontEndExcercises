import MuiButton from '@mui/material/Button';

interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    bgColor: string;
    text: string;
    disabled?: boolean;
};


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
}