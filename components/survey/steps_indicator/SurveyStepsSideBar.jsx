import { useState } from 'react';
import SurveyStep from '../step/SurveyStep';
import { STEPS } from '@/constants/constants';

const SurveyStepsSideBar = () => {
    const [stepNumber, setStep] = useState(0);
    return (
        <div className="sticky top-24 flex h-full w-fit flex-col">
            {STEPS.map((step, index) => (
                <SurveyStep key={index} title={step} step={2} index={index} />
            ))}
        </div>
    );
};

export default SurveyStepsSideBar;
