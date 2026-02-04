import type { StepSuccessProps } from '@interfaces';
import { SuccessScreen } from '@components/SuccessScreen';
import { ProstoLogo } from '@svg';

const StepSuccess = ({ onComplete }: StepSuccessProps) => {
    return (
        <SuccessScreen
            icon={<ProstoLogo size={80} />}
            title="Yaaay you Made It"
            description="Start matching with singles near you"
            buttonText="Continue"
            onButtonClick={onComplete}
            showHearts={true}
        />
    );
};

export default StepSuccess;
