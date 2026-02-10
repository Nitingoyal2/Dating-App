import { useRef, useState } from 'react'
import './DashboardCard.css'
import { CancleIcon, HeartSymbol, LocationSymbol, StartIcon } from '@/utils/svg';
import { VerifiedOutlined } from '@ant-design/icons';

const SWIPE_THRESHOLD = 30;

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

const DashboardCard = () => {

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<string>("");

  const cardRef = useRef<HTMLDivElement | null>(null);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);


  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    cardRef.current?.classList.add("dragging");
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !cardRef.current) return;

    currentX.current = e.clientX - startX.current;
    const rotate = currentX.current * 0.1;

    cardRef.current.style.transform = `translateX(${currentX.current}px) rotate(${rotate}deg)`;
  };

  const onPointerUp = () => {
    if (!cardRef.current) return;

    isDragging.current = false;
    cardRef.current.classList.remove("dragging");

    if (Math.abs(currentX.current) > SWIPE_THRESHOLD) {
      const direction = currentX.current > 0 ? "right" : "left";
      setDir(direction);

      setTimeout(() => {
        setDir("");
        setIndex((prev) => prev + 1);
        cardRef.current!.style.transform = "";
      }, 300);
    } else {
      // Snap back
      cardRef.current.style.transform = "translateX(0) rotate(0)";
    }

    currentX.current = 0;
  };

  const handleSwipe = (dir: string) => {
    setDir(dir);
    setTimeout(() => {
      setDir("");
      setIndex((prev) => {
        if (dir === "left") {
          if (prev === 0) return prev + 1;
          return prev - 1;
        } else {
          if (prev === profiles.length - 1) return prev - 1;
          return prev + 1;
        }
      });
    }, 1000);
  }

  const profile = profiles[index];

  if (!profile) return <h2>No more profiles</h2>;
  return (
    <div className='discover-screen-container'>
      {/* {profiles?.map((profile) => ( */}
      <div ref={cardRef}
        className={`discover-screen ${dir}`}
        style={{
          background: `url(${profile.image}) no-repeat center / cover`,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className='discover-screen-info-container'>
          <h2>{profile.name} <span><VerifiedOutlined style={{ fontSize: '16px' }} /></span></h2>
          <h6><LocationSymbol />{profile.location}</h6>
        </div>
        <div className='discover-screen-action-btn-container'>
          <div className='discover-screen-action-btn' onClick={() => handleSwipe('left')}><CancleIcon /></div>
          <div className='discover-screen-action-btn'><StartIcon /></div>
          <div className='discover-screen-action-btn' onClick={() => handleSwipe('right')}><HeartSymbol /></div>
        </div>
      </div>
      {/* ))
      } */}
    </div >
  )
}

export default DashboardCard