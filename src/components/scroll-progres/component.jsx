import { useEffect, useRef, useCallback } from "react";

export const ScrollProgress = ({element = document}) => {
    const barRef = useRef(null);

    useEffect(() => {
        const calcProgress = (e) => e.scrollTop * 100 / (e.scrollHeight - e.clientHeight);

        const onScroll = (event) => {
            const progress = calcProgress(
                element === document ?
                    document.documentElement :
                    element
            );

            barRef.current.style.width = `${progress}%`;
        };

        element.addEventListener('scroll', onScroll);

        return () => {
            element.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div style={{top: 0, position: 'sticky'}}>
            <div ref={barRef} style={{position: 'absolute', width: 0, height: '3px', backgroundColor: '#f00'}}></div>
        </div>
    );
};
