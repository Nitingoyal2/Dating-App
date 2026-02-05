import { Typography } from 'antd';
import type { WelcomeRule } from '@interfaces';

const { Text } = Typography;

export const welcomeRules: WelcomeRule[] = [
    {
        title: 'Be yourself',
        description: 'Make sure your photos, age, and bio are true to who you are.',
    },
    {
        title: 'Stay safe',
        description: (
            <>
                Don't be too quick to give out personal information.{' '}
                <Text type="danger" underline style={{ cursor: 'pointer' }}>
                    Date Safely
                </Text>
            </>
        ),
    },
    {
        title: 'Play it cool',
        description: 'Respect others and treat them as you would like to be treated.',
    },
    {
        title: 'Be Proactive',
        description: 'Always report bad behavior.',
    },
];

