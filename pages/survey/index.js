import SurveyStepsSideBar from '@/components/survey/steps_indicator/SurveyStepsSideBar';
import SurveyNavigation from '@/components/survey/navigation/SurveyNavigation';
import SurveyContentLayout from '@/components/survey/survey_layout/SurveyContentLayout';
import SurveyHeading from '@/components/survey/survey_typography/SurveyHeading';
import SurveyDescription from '@/components/survey/survey_typography/SurveyDescription';
import SurveySubheading from '@/components/survey/survey_typography/SurveySubheading';
import InputField from '@/components/input/InputField';
import Select from '@/components/select/Select';
import Rocket from '@/assets/icons/Rocket';
import Calculator from '@/assets/icons/Calculator';
import Case from '@/assets/icons/Case';
import Users from '@/assets/icons/Users';
import SurveyStepNavigation from '@/components/survey/survey_navigation/SurveyStepNavigation';

export default function Survey() {
    return (
        <div className="flex h-fit w-fit flex-col">
            <SurveyNavigation />
            <div className="flex flex-row">
                <SurveyStepsSideBar />
                <SurveyContentLayout>
                    <div className="flex flex-col gap-5">
                        <SurveyHeading text="Fill in your requirements and terms" />
                        <SurveyDescription>
                            All companies need to manage the ongoing accounting in one way or another, and it can be
                            just as important to supplement with a good invoicing program and payroll program to create
                            the right basis in accordance with current laws and regulations. This category is for those
                            who want to see which bookkeeping programs are available on the market or for those who
                            simply want a good solution for their invoicing or payroll .
                        </SurveyDescription>
                    </div>
                    <div className="flex flex-col gap-5">
                        <SurveySubheading text="Basic Informations" />
                        <div className="flex w-fit flex-wrap gap-8">
                            <InputField label={'Name'} />
                            <InputField label={'Email'} />
                            <InputField label={'Company Number'} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <SurveySubheading text="Filters" />
                        <div className="flex w-fit flex-wrap gap-8">
                            <Select text="All in one" icon={<Rocket />} />
                            <Select text="Annual report and financial statements" icon={<Calculator />} />
                            <Select text="Agency package" icon={<Case />} />
                            <Select text="Accounting" icon={<Users />} />
                        </div>
                    </div>
                    <SurveyStepNavigation />
                </SurveyContentLayout>
            </div>
        </div>
    );
}
