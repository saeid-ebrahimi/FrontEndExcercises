import { Button } from './button';
import { ModalDialog } from './modal-dialog';
import { useToggleDialog } from '../hooks/useToggleDialog';

export default function ToggleButtonWithDialog() {
    const { isVisible, show, hide } = useToggleDialog();
    return (
        <>
            <Button onClick={show}>Show Dialog</Button>
            {isVisible && <ModalDialog onClose={hide} />}
        </>
    )
}
