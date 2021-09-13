import { useState, useEffect } from "react";

import { MOBILE_BREAKPOINT } from "utils/constants";

export default function useWindowSize() {
    const [ windowSize, setWindowSize ] = useState({
        width: undefined,
        height: undefined,
        isMobile: false,
    });
    
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < MOBILE_BREAKPOINT
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};