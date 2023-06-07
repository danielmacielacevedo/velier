import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = [ 'tu clínica', 'tu consultorio', 'tu salón', 'tu estudio', 'tu agencia', 'tu despacho'];

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
          <h1>POTENCIAMOS</h1>
          {/* <h1>Potenciamos</h1> */}
          <div className='MotionDiv Desktop'>
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
                  textShadow: '5px 5px 100px rgba(0, 0, 0, 0.5)' 
                }}
              > 
              {words[index]}
              </motion.div>
            </div>
          </div>
          <div className='MotionDiv Mobile'>
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
                  textShadow: '5px 5px 100px rgba(0, 0, 0, 0.5)' 
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
          height: 80vh;
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
        }
        .MotionDiv.Mobile
        {
          display: none;
        }
        @media only screen and (max-width: 800px)
        {
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
