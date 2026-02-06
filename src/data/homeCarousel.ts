import { crousal1, crousal2, crousal5 } from '@assets';

export interface CarouselSlide {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const homeCarouselData: CarouselSlide[] = [
    {
        id: 1,
        image: crousal1,
        title: 'Algorithm',
        description: 'Users going through a vetting process to ensure you never match with bots.',
    },
    {
        id: 2,
        image: crousal2,
        title: 'Matches',
        description: 'We match you with people that have a large array of similar interests.',
    },
    {
        id: 3,
        image: crousal5,
        title: 'Premium',
        description: 'Sign up today and enjoy the first month of premium benefits completely free on us.',
    },
];
