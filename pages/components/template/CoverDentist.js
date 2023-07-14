import Lottie from 'react-lottie';
import TopIcon from '/public/assets/icons/animated-icons/top-arrow-hover-light.json'

export default function CoverDentist(props) {

  return (
    <>
      <div id='inicio' className='CoverContainer'>
        <div className='LinearGradient'></div>
        <img className='FeaturedImage' src='/assets/template-images/dentist-image.png' />
        <div className='TitleCoverContainer'>
          <div className='MotionDiv'>
            {/* <Lottie
              options={{
                animationData: TopIcon,
                loop: false,
                autoplay: true,
              }}
              width='4vw'
              height='4vw'
              isClickToPauseDisabled
            /> */}
            <h1>{props.title}</h1>
            <p>Descubre el poder de una sonrisa sana y hermosa.</p>
            <a className='PrimaryButton' href='#agendar'>
              Agendar cita
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .CoverContainer
        {
          position: relative;
          z-index: 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 70svh;
          min-height: 500px;
          justify-content: end;
          align-items: center;
          background-image: linear-gradient(to bottom, var(--background-contrast), rgba(0, 0, 0, 0));
        }
        .LinearGradient
        {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40%;
          background-image: linear-gradient(to top, var(--background-start-rgb), rgba(0, 0, 0, 0));
        }
        .FeaturedImage
        {
          position: absolute;
          z-index: -1;
          bottom: 0;
          height: 56svh;
          min-height: 400px;
        }
        .TitleCoverContainer
        {
          bottom: 0;
          z-index: 2;
          display: flex;
          width: 100%;
          height: fit-content;;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .MotionDiv
        {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          gap: 20px;
        }
        .TitleCoverContainer h1
        {
          font-size: 4vw;
          font-weight: 300;
          margin-bottom: -20px;
        }
        .MotionDiv.Mobile
        {
          display: none;
        }
        @media only screen and (max-width: 800px)
        {
          .TitleCoverContainer
          {
            {/* top: 18vh; */}
          }
          .TitleCoverContainer h1
          {
            font-size: 8vw;
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
          p,
          {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};
