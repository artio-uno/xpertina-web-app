import React from 'react';

const InputField = ({ label, icon }) => {
    let inputClass =
        'min-w-[300px] bg-red w-fit px-5 py-3 border border-xpertina-border outline-none hover:border-xpertina-blue focus:border-xpertina-blue duration-100 ease-in-out';

    return (
        <div className="text-xpertina-label flex flex-col gap-1 text-base tracking-tight ">
            <label className="">{label}</label>
            <input className={inputClass} />
        </div>
    );
};

export default InputField;
