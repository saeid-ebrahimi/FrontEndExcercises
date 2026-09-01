import { useState } from 'react'
import { Button } from './button';
import { ModalDialog } from './modal-dialog';

export default function ToggleButtonWithDialog() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => setVisible(true)}>Show Dialog</Button>
            {visible && <ModalDialog onClose={() => setVisible(false)} />}
        </>
    )
}
