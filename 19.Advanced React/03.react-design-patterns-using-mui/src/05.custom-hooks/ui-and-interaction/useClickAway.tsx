import { RefObject, useEffect } from "react";

type TEvent = MouseEvent | TouchEvent
export const useClickAway =
    (ref: RefObject<HTMLElement>, handler: (event: TEvent) => void) => {
        useEffect(() => {
            const listener = (event: TEvent) => {
                if (!ref.current || ref.current.contains(event.target as Node)) return;
                handler(event)
            }

            document.addEventListener('mousedown', listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            }
        }, [ref, handler])
    }

export const useOutsideClick = useClickAway;

// Usage Example
// export const CustomPopover = () => {
//     const { isOpen, open, close } = useModal();
//     const popoverRef = useRef<HTMLDivElement>(null);

//     // Attach the hook. When a click happens outside 'popoverRef', it fires 'close'
//     useClickAway(popoverRef, close);

//     return (
//         <Box sx={{ position: 'relative', display: 'inline-block' }}>
//             <Button variant="contained" onClick={open}>
//                 Open Custom Box
//             </Button>

//             {isOpen && (
//                 <Paper
//                     ref={popoverRef} // Attach the ref here
//                     elevation={4}
//                     sx={{
//                         position: 'absolute',
//                         top: '110%',
//                         left: 0,
//                         p: 2,
//                         width: 250,
//                         zIndex: 10,
//                     }}
//                 >
//                     <Typography variant="h6">Custom Popover</Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                         Click anywhere outside this paper component to close it.
//                     </Typography>
//                 </Paper>
//             )}
//         </Box>
//     );
// };