import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import TopIcon from '../../public/assets/icons/animated-icons/top-arrow-hover.json'

const words = [ 'Tu clínica', 'Tu consultorio', 'Tu salón', 'Tu estudio', 'Tu agencia', 'Tu despacho'];
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
            {/* <h1>POTENCIAMOS</h1> */}
            <h1>...potenciamos</h1>
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
                  color: 'var(--velier-color)', 
                  marginTop: '-4vw', 
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
            {/* <h1>POTENCIAMOS</h1> */}
            <h1>...potenciamos</h1>
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
                  color: 'var(--velier-color)', 
                  marginTop: '-4vw', 
                  textShadow: '5px 5px 100px rgba(0, 0, 0, .4)' 
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .CoverContainer
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 40vh;
          min-height: 400px;
          justify-content: center;
          align-items: center;
        }
        .TitleCoverContainer
        {
          display: flex;
          width: 100%;
          height: fit-content;;
          flex-direction: column;
          gap: 8px;
          justify-content: center;
          align-items: center;
        }
        .TitleCoverContainer h1
        {
          font-size: 4vw;
          font-weight: 300;
          margin-top: -2vw;
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
        @media only screen and (max-width: 800px)
        {
          .CoverContainer
          {
            min-height: 300px;
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
      `}</style>
    </>
  );
};
