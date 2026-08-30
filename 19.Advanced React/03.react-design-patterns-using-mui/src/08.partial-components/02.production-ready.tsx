import { ComponentType } from 'react';
import MuiButton from '@mui/material/Button';

// The partial utility higher-order function
function partial<P extends object, PP extends Partial<P>>(
    Component: ComponentType<P>,
    partialProps: PP
) {
    type InjectedKeys = keyof PP;
    type RequiredProps = Omit<P, InjectedKeys>;

    // Extract means: Give me the things that exist in both types.
    type OptionalProps = Partial<Pick<P, Extract<InjectedKeys, keyof P>>>;
    type TargetProps = RequiredProps & OptionalProps;

    const PartialComponent = (props: TargetProps) => {
        return <Component {...(partialProps as PP)} {...(props as unknown as P)} />;
    };

    const componentName = Component.displayName || Component.name || 'Component';
    PartialComponent.displayName = `Partial(${componentName})`;

    return PartialComponent;
}

// 1. Create specialized variants of MUI's Button by pre-binding props
export const PrimaryButton = partial(MuiButton, {
    variant: 'contained',
    color: 'primary',
});

export const DeleteButton = partial(MuiButton, {
    variant: 'outlined',
    color: 'error',
    size: 'small',
});

// 2. Consume them cleanly in your views
export function ActionPanel() {
    return (
        <div className="flex gap-4 p-4">
            {/* PrimaryButton only requires remaining props like 'children' or 'onClick' */}
            <PrimaryButton onClick={() => console.log('Saved!')}>
                Save Changes
            </PrimaryButton>

            <DeleteButton onClick={() => console.log('Deleted!')}>
                Delete Item
            </DeleteButton>
        </div>
    );
}