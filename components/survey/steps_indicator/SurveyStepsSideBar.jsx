import SurveyStep from '../step/SurveyStep';
import { STEPS } from '@/constants/constants';

const SurveyStepsSideBar = () => {
    return (
        <div className="sticky top-24 flex h-full w-fit flex-col">
            {STEPS.map((step, index) => (
                <SurveyStep key={index} title={step} />
            ))}
        </div>
    );
};

export default SurveyStepsSideBar;
