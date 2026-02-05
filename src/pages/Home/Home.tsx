import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { Routes } from '@/types';
import { PrimaryButton } from '@components/Button';
import { homeCarouselData } from '@/data';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (current: number) => {
    setCurrentSlide(current);
  };

  const goToSlide = (index: number) => {
    carouselRef.current?.goTo(index);
  };

  return (
    <div className="onboarding-screen">
      {/* Carousel Container */}
      <div className="carousel-wrapper">
        <Carousel
          ref={carouselRef}
          dots={false}
          effect="fade"
          afterChange={handleSlideChange}
          autoplay
          autoplaySpeed={4000}
        >
          {homeCarouselData.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <div className="slide-image-container">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                />
                <div className="slide-image-overlay" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="onboarding-content">
        <h1 className="onboarding-title">{homeCarouselData[currentSlide].title}</h1>
        <p className="onboarding-description">
          {homeCarouselData[currentSlide].description}
        </p>
      </div>

      {/* Custom Pagination Dots */}
      <div className="carousel-dots">
        {homeCarouselData.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="onboarding-actions">
        <PrimaryButton onClick={() => navigate(Routes.LOGIN)}>
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Home;
