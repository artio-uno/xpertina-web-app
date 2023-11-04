import SurveyStepsSideBar from '@/components/survey/steps_indicator/SurveyStepsSideBar';
import SurveyNavigation from '@/components/survey/navigation/SurveyNavigation';
import SurveyContentLayout from '@/components/survey/survey_layout/SurveyContentLayout';
import SurveyHeading from '@/components/survey/survey_typography/SurveyHeading';
import SurveyDescription from '@/components/survey/survey_typography/SurveyDescription';
import SurveySubheading from '@/components/survey/survey_typography/SurveySubheading';
import InputField from '@/components/input/InputField';

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
                </SurveyContentLayout>
            </div>
        </div>
    );
}
