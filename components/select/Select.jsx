import { useState } from 'react';

const Select = ({ icon, onClick, text }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-row">
            <div className="flex w-fit items-center justify-center border p-10">{icon}</div>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="font-roboto flex flex-row items-center justify-center border-y border-r p-10 text-base font-semibold"
            >
                {text}
            </div>
        </div>
    );
};

export default Select;
