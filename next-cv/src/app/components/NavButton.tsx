"use client";
import { useState } from 'react';

type ButtonProps = {
    isActive: boolean;
    onClick: () => void;
    label: string;
};

export default function NavButton({isActive, onClick, label}: ButtonProps) {
    const [isEnter, setIsEntered] = useState(false);

    function handleMouseEnter() {
        setIsEntered(true)
    }

    function handleMouseLeave() {
        setIsEntered(false)
    }

    return(
        <button onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`h-[73.6px] transition duration-300 ${isActive ? `bg-primary` : 'bg-white'}  ${isEnter ? `bg-primary` : `bg-white`}`}>
            <p className={`px-2 ${isEnter ? 'text-white' : `text-greyLink`}`}>{label}</p>
        </button>
    );
}