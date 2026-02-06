import './Spinner.css';

// Logo from public folder - accessible via root path
const logo = '/favicon.svg';

interface SpinnerProps {
    size?: 'small' | 'default' | 'large';
    fullScreen?: boolean;
    tip?: string;
}

const Spinner = ({ size = 'default', fullScreen = false, tip }: SpinnerProps) => {
    const sizeMap = {
        small: 40,
        default: 60,
        large: 80,
    };

    const spinnerSize = sizeMap[size];

    const spinner = (
        <div className="spinner-container">
            <div 
                className="spinner-logo-wrapper" 
                style={{ 
                    width: spinnerSize, 
                    height: spinnerSize 
                }}
            >
                <img 
                    src={logo} 
                    alt="Loading" 
                    className="spinner-logo"
                    style={{
                        width: spinnerSize,
                        height: spinnerSize,
                    }}
                />
            </div>
            {tip && <span className="spinner-tip">{tip}</span>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="spinner-fullscreen">
                {spinner}
            </div>
        );
    }

    return spinner;
};

export default Spinner;
