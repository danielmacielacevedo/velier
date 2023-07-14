import { useEffect } from 'react';

export default function Formulario() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id='agendar' className='FormContainer'>
        <div className='FormContainerDetails'>
          <span>Agenda tu cita</span>
        </div>
        <div className='FormContent'>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/velier/agendar-cita?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=000&background_color=fff"
          ></div>
        </div>
      </div>
      <style jsx>{`
        .FormContainer
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;
          justify-content: center;
          align-items: center;
          padding: 20px 20px 20px 0;
          background: var(--grey-color);
        }
        .FormContainerDetails
        {
          display: flex;
          flex-direction: column;
          width: auto;
          height: auto;
          justify-content: center;
          align-items: left;
          gap: 40px;
          text-align: left;
          {/* color: #fff; */}
        }
        .FormContainerDetails span
        {
          font-size: 40px;
          font-family: var(--primary-font);
          line-height: 4vw;
        }
        .FormContainerDetails ul
        {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          gap: 10px;
        }
        #small-text
        {
          font-style: normal;
          font-family: var(--primary-font)
        }
        .FormContent
        {
          display: flex;
          width: 600px;
          min-width: 264px;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2);
          background: #fff;
          transform: scale(.8);
          margin: -24px 0 -40px 0;
        }
        .calendly-inline-widget
        {
          width: 100%;
          min-width: 280px;
          height: 500px;
          background: none;
          border-radius: 20px;
        }
        .calendly-inline-widget::-webkit-scrollbar{
          display: none;
        }
        @media only screen and (max-width: 800px)
        {
          .FormContainer
          {
            justify-content: start;
            padding: 20px 40px 20px 0;
          }
          .FormContainerDetails
          {
            padding-left: 20px;
          }
          .FormContainerDetails span
          {
            font-size: 30px;
            line-height: 40px;
          }
          .FormContent
          {
            width: 100%;
            border-radius: 0 30px 30px 0;
            margin-left: -18vw;
            margin-top: -30px
          }

        }
        {/* @media only screen and (max-width: 350px)
        {
          .FormContent
          {
            width: 126%;
            transform: scale(0.7);
          }
        } */}
      `}</style>
    </>
  );
}
