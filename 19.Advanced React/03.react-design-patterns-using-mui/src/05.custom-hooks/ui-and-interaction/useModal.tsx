import { useCallback, useState } from "react"


export const useModal = (initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => { setIsOpen(true) }, []);
    const close = useCallback(() => { setIsOpen(false) }, []);
    return { isOpen, open, close };
}

// Sometimes, developers write a useLoginModal that returns the UI component itself so they can drop it wherever they need it.
// Why this is dirty:

// 1. Massive memory waste: If you use this hook in 10 different components, React creates 10 separate instances of the login form in the background.

// 2. State isn't shared: If you open the modal from the Navbar, the one in Checkout doesn't know about it.

// 3. Z - Index Nightmares: Modals rendered deep inside nested components(like a Navbar) often get trapped by CSS overflow: hidden or z - index stacking rules, causing them to render underneath other elements.