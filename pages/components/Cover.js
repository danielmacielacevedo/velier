import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import TopIcon from '../../public/assets/icons/animated-icons/top-arrow-hover-light.json'
import BenefitsSmall from '../components/BenefitsSmall'

const words = [ 'CLÍNICA', 'CONSULTORIO', 'SALÓN', 'ESTUDIO', 'AGENCIA', 'DESPACHO'];
// const words = [ 'Tu clínica', 'Tu consultorio', 'Tu salón', 'Tu estudio', 'Tu agencia', 'Tu despacho'];
// const words = [ 'tu clínica', 'tu consultorio', 'tu salón', 'tu estudio', 'tu agencia', 'tu despacho'];

export default function Cover() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='CoverContainer'>
        <div className='TitleCoverContainer'>
          <div className='MotionDiv Desktop'>
            <Lottie
              options={{
                animationData: TopIcon,
                loop: false,
                autoplay: true,
              }}
              width='4vw'
              height='4vw'
              isClickToPauseDisabled
            />
            <p>...potenciamos tu</p>
            <div>
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  fontSize: '9vw', 
                  fontFamily: 'Poppins', 
                  fontWeight: '700',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)' 
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
          </div>
          <div className='MotionDiv Mobile'>
            <Lottie
              options={{
                animationData: TopIcon,
                loop: false,
                autoplay: true,
              }}
              width='8vw'
              height='8vw'
              isClickToPauseDisabled
            />
            <p>...potenciamos tu</p>
            <div>
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  fontSize: '12vw', 
                  fontFamily: 'Poppins', 
                  fontWeight: '700',
                  color: '#fff', 
                  marginTop: '-2vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)' 
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
          </div>
          <BenefitsSmall />
        </div>
      </div>
      <style jsx>{`
        .CoverContainer
        {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 70vh;
          min-height: 500px;
          justify-content: end;
          align-items: center;
          background-image: url(https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }
        .TitleCoverContainer
        {
          bottom: 0;
          display: flex;
          width: 100%;
          height: fit-content;;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .TitleCoverContainer h1
        {
          font-size: 4vw;
          font-weight: 300;
        }
        .MotionDiv
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .MotionDiv.Mobile
        {
          display: none;
        }
        p
        {
          color: #fff;
        }
        @media only screen and (max-width: 800px)
        {
          .CoverContainer
          {
            height: 90vh;
            min-height: 200px;
          }
          .TitleCoverContainer
          {
            {/* top: 18vh; */}
          }
          .TitleCoverContainer h1
          {
            font-size: 6vw;
          }
          .MotionDiv.Desktop
          {
            display: none;
          }
          .MotionDiv.Mobile
          {
            display: flex;
          }
        }
        @media only screen and (max-width: 350px)
        {
          .CoverContainer
          {
            justify-content: center;
          }
          p,
          {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};
