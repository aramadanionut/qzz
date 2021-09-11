import { useRef, useEffect, useState } from 'react';

export default function useFocus() {
    const [ value, setValue ] = useState(false);
    
    const ref = useRef(null);
    
    const handleFocus = () => setValue(true);
    const handleBlur = () => setValue(false);
    
    useEffect(
        () => {
            const node = ref.current;
            
            if (node) {
                node.addEventListener('focus', handleFocus);
                node.addEventListener('blur', handleBlur);
                return () => {
                    node.removeEventListener('focus', handleFocus);
                    node.removeEventListener('blur', handleBlur);
                };
            }
        }
    );

    return [ ref, value ];
}