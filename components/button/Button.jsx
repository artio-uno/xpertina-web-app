import React from 'react';
import { BUTTON_TYPE } from '@/constants/constants';
import Link from 'next/link';

const Button = ({ onClick, type, text, icon, visibility = true, href = '' }) => {
    let buttonClass =
        'flex w-fit flex-row items-center px-6 py-3 font-semibold font-roboto justify-center gap-2 text-base text-center';

    switch (type) {
        case BUTTON_TYPE.blue:
            buttonClass += ' text-white bg-[#4353FF] text-white ease-in-out duration-200';
            break;
        case BUTTON_TYPE.border:
            buttonClass += ' text-black bg-[#FFF] border border-[#CECECE] text-white ease-in-out duration-200';
            break;
        case BUTTON_TYPE.noborder:
            buttonClass += ' text-black border ease-in-out duration-200';
            break;
        default:
            break;
    }

    return (
        visibility && (
            <Link className={buttonClass} href={href} onClick={onClick}>
                {text}
                {icon && <span>{icon}</span>}
            </Link>
        )
    );
};

export default Button;
