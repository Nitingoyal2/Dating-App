import carousel1 from '@assets/images/crousal1.jpg';
import carousel2 from '@assets/images/crousal2.jpg';
import carousel3 from '@assets/images/crousal5.png';

export interface CarouselSlide {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const homeCarouselData: CarouselSlide[] = [
    {
        id: 1,
        image: carousel1,
        title: 'Algorithm',
        description: 'Users going through a vetting process to ensure you never match with bots.',
    },
    {
        id: 2,
        image: carousel2,
        title: 'Matches',
        description: 'We match you with people that have a large array of similar interests.',
    },
    {
        id: 3,
        image: carousel3,
        title: 'Premium',
        description: 'Sign up today and enjoy the first month of premium benefits completely free on us.',
    },
];
