import React, { useState } from 'react';
import { STEP_TYPE } from '@/constants/constants';
import { StepIcon } from '@/assets/icons/index';
import { StepIconActive } from '@/assets/icons/index';

const SurveyStep = ({ title, type = STEP_TYPE.regular, step, index }) => {
    let stepBaseStyle =
        'flex flex-row items-center gap-5 font-roboto flex min-w-[300px] max-w-[400px] flex-row border-b px-10 py-8';

    if (index < step) {
        type = STEP_TYPE.finished;
    } else if (index > step) {
        type = STEP_TYPE.regular;
    } else {
        type = STEP_TYPE.active;
    }

    switch (type) {
        case STEP_TYPE.regular:
            stepBaseStyle += ' text-[#A9A9A9] bg-white border-xpertina-border';
            break;
        case STEP_TYPE.active:
            stepBaseStyle += ' font-bold text-white bg-gradient-to-r border border-blue-700 p-4 animated-gradient';
            break;
        case STEP_TYPE.finished:
            stepBaseStyle += ' text-black bg-white border-[#E3E7ED]';
            break;
        default:
            break;
    }

    const getStepIcon = () => {
        switch (type) {
            case STEP_TYPE.active:
                return null;
            case STEP_TYPE.finished:
                return <StepIcon />;
            default:
                return null;
        }
    };

    return (
        <div className={stepBaseStyle}>
            <div className="flex h-[40px] w-[40px] items-center justify-center">{getStepIcon()}</div>
            <div className="">{title}</div>
        </div>
    );
};

export default SurveyStep;
