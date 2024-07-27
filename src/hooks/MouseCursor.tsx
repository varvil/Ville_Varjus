import { useEffect, useState } from 'react'

export const MouseCursor = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null});

    useEffect (() => {
        const mouseMoveHandler = (e:any) => {
            const {clientX, clientY} = e;
            setMousePosition({x: clientX, y:clientY});
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler)
        }
    }, [])

    return mousePosition;
}