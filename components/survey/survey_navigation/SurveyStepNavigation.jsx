import Button from '@/components/button/Button';
import { BUTTON_TYPE } from '@/constants/constants';

const SurveyStepNavigation = ({ step = 0 }) => {
    return (
        <div className="flex flex-row items-center justify-end gap-4">
            <p>
                By pressing next, I accept <a href="#">the terms</a>
            </p>
            {step === 0 && <Button type={BUTTON_TYPE.blue} text="Next" onClick={() => {}} />}
            {step > 0 && step < 4 && <Button type={BUTTON_TYPE.noborder} text="Previous" onClick={() => {}} />}
            {step > 0 && step < 4 && <Button type={BUTTON_TYPE.blue} text="Next" onClick={() => {}} />}
            {step === 4 && <Button type={BUTTON_TYPE.blue} text="Submit" onClick={() => {}} />}
        </div>
    );
};

export default SurveyStepNavigation;
