'use client'
import {useState, useEffect} from 'react';


const useChangeTheme = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [color, setColor] = useState('black');

    const toggleTheme = () => {
        setBackgroundColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
        setColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
    };

    return { backgroundColor, color, toggleTheme };
};

export default useChangeTheme;


//     useEffect(() => {
//         const ChangeTheme() => {
//             backgroundHandler();
//             textcolorHandler();
//         };

//         window.addEventListener('click', ChangeTheme);

//         return () => {
//             window.removeEventListener('click', ChangeTheme);
//         };
//     }, []);

//     const backgroundHandler = () => {
//         setBackgroundColor(prevColor => (prevColor === 'white' ? 'black' : 'white'));
//     }

//     const textcolorHandler = () => {
//         setColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
//     }

//     return { backgroundColor, color };
// }

// export default useChangeTheme;

