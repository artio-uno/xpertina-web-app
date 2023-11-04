import { XpertinaLogo } from '@/assets/icons/index';
import Button from '@/components/button/Button';
import { BUTTON_TYPE } from '@/constants/constants';

const SurveyNavigation = () => {
    return (
        <div className="bg-red sticky top-0 flex h-[10vh] w-[100vw] flex-row items-center justify-between border-b border-[#E3E7ED] bg-white px-10">
            <div className="">
                <XpertinaLogo />
            </div>
            <div className="flex flex-row gap-5">
                <Button text="Home Page" onClick={() => {}} type={BUTTON_TYPE.border} href="/" />
                <Button text="Speak in person" onClick={() => {}} type={BUTTON_TYPE.blue} href="/survey" />
            </div>
        </div>
    );
};

export default SurveyNavigation;
