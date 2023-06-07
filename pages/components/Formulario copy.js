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
      <div className='FormContainer'>
        <div className='FormContent'>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/velier/agendar-cita?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0065ff&background_color=fff"
          ></div>
        </div>
      </div>
      <style jsx>{`
        .FormContainer
        {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: red;
        }
        .FormContent
        {
          display: flex;
          width: 600px;
          min-width: 280px;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2);
          background: #fff;
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
      `}</style>
    </>
  );
}










