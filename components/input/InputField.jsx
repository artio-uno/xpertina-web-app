import React from 'react';

const InputField = ({ label, icon }) => {
    let inputClass =
        'min-w-[300px] bg-red w-fit px-5 py-3 border border-[#E3E4EC] outline-none hover:border-[#4353FF] focus:border-[#4353FF] duration-100 ease-in-out';

    return (
        <div className="flex flex-col gap-1 text-base tracking-tight text-[#424242] ">
            <label className="">{label}</label>
            <input className={inputClass} />
        </div>
    );
};

export default InputField;
