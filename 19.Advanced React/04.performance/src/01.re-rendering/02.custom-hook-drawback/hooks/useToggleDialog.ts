import { useState } from "react"

export const useToggleDialog = () => {
    const [visible, setVisible] = useState(false);

    return {
        isVisible: visible,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }
}