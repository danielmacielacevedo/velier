import React from 'react';

export default function SliderGalleryL() {
  const imageURL = 'https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>

        {/* SAME 9 SLIDES (DOUBLED) */}
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
        <div className="slide">
          <img src={imageURL} />
        </div>
      </div>

      <style jsx>{`
        .slider {
          height: 140px;
          position: relative;
          width: 100%;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .slide-track {
          display: flex;
          width: calc(250px * 18);
          animation: scroll 40s linear infinite;
        }

        .slide-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 9));
          }
        }

        .slide {
          height: 100px;
          width: 250px;
          display: flex;
          align-items: center;
          padding: 15px;
          perspective: 100px;
        }

        img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          transition: transform 1s;
          border-radius: 20px;
        }

        img:hover {
          transform: translateZ(10px);
        }

        .slider::before,
        .slider::after {
          background: linear-gradient(to right, var(--background-start-rgb) 0%, rgba(255, 255, 255, 0) 100%);
          content: '';
          height: 100%;
          position: absolute;
          width: 15%;
          z-index: 2;
        }

        .slider::before {
          left: 0;
          top: 0;
        }

        .slider::after {
          right: 0;
          top: 0;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};