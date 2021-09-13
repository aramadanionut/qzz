import { useState } from 'react';

const useModal = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    function toggle() {
        setIsVisible(!isVisible);
    }

    function hide() {
        setIsVisible(false);
    }

    function show() {
        setIsVisible(true)
    }

    return [
        isVisible,
        show,
        hide,
        toggle
    ];
};

export default useModal;