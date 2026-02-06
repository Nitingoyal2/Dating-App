import React from 'react'
import './DashboardCard.css'
import { CancleIcon, HeartIcon, LocationSymbol, StartIcon } from '@/utils/svg';
import { VerifiedOutlined } from '@ant-design/icons';
import { HeartSymbol } from '@/utils/svg/icons';

const DashboardCard = () => {
  const profiles = [
    {
      id: 1,
      name: 'Gabrielle',
      age: 26,
      location: "5 miles away",
      verified: true,
      image: 'https://picsum.photos/400/600?random=1',
    },
    {
      id: 2,
      name: 'Sarah',
      age: 24,
      location: "3 miles away",
      verified: false,
      image: 'https://picsum.photos/400/600?random=2',
    },

    {
      id: 3,
      name: 'Emily',
      age: 22,
      location: "2 miles away",
      verified: true,
      image: 'https://picsum.photos/400/600?random=3',
    },
    {
      id: 4,
      name: 'Olivia',
      age: 23,
      location: "1 mile away",
      verified: false,
      image: 'https://picsum.photos/400/600?random=4',
    },
    {
      id: 5,
      name: 'Ava',
      age: 21,
      location: "0.5 miles away",
      verified: true,
      image: 'https://picsum.photos/400/600?random=5',
    },
    {
      id: 6,
      name: 'Isabella',
      age: 20,
      location: "0.2 miles away",
      verified: false,
      image: 'https://picsum.photos/400/600?random=6',
    },
    {
      id: 7,
      name: 'Sophia',
      age: 19,
      location: "0.1 miles away",
      verified: true,
      image: 'https://picsum.photos/400/600?random=7',
    },
    {
      id: 8,
      name: 'Mia',
      age: 18,
      location: "0.05 miles away",
      verified: false,
      image: 'https://picsum.photos/400/600?random=8',
    },  
  ];
  return (
    <div className='discover-screen-container'>
      {profiles?.map((profile) => (
        <div key={profile.id} style={{ background: `url(${profile.image}) no-repeat center center / cover` }} className='discover-screen'>
          <div className='discover-screen-info-container'>
            <h2>{profile.name} <span><VerifiedOutlined style={{ fontSize: '16px' }} /></span></h2>
            <h6><LocationSymbol />{profile.location}</h6>
          </div>
          <div className='discover-screen-action-btn-container'>
            <div className='discover-screen-action-btn'><CancleIcon /></div>
            <div className='discover-screen-action-btn'><StartIcon /></div>
            <div className='discover-screen-action-btn'><HeartSymbol /></div>
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default DashboardCard