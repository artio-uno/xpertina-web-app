const SurveyContentLayout = ({ children }) => {
    return (
        <div className="bg-red container flex h-fit min-h-[100vh] w-fit flex-col gap-16 border-l border-[#E3E7ED] p-20">
            {children}
        </div>
    );
};

export default SurveyContentLayout;
