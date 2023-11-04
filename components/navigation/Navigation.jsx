import { XpertinaLogo } from '@/assets/icons/index';
import Button from '@/components/button/Button';
import { BUTTON_TYPE } from '@/constants/constants';
import NavigationLinks from './NavigationLinks';

const Navigation = () => {
    return (
        <div className="bg-red flex h-[100px] w-[100vw] flex-row items-center justify-between border-b border-[#E3E7ED] px-10">
            <div className="flex flex-row gap-10">
                <XpertinaLogo />
                <NavigationLinks />
            </div>
            <div className="flex flex-row gap-5">
                <Button text="Home Page" onClick={() => {}} type={BUTTON_TYPE.border} href="/" />
                <Button text="Personal Assitent" onClick={() => {}} type={BUTTON_TYPE.blue} href="/survey" />
            </div>
        </div>
    );
};

export default Navigation;
