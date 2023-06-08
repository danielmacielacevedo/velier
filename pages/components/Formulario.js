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
        <div className='FormContainerDetails'>
          <span>Permite a tus clientes elegir su cita!</span> 
          <ul>
            <li><p>Todas las citas se van agendando en tu calendario de <i id='small-text'>Google</i> automaticamente.</p></li>
            <li><p>Tus clientes podran ver las citas disponibles segun tu calendario y horario de servicio.</p></li>
            <li><p>Enviamos mensajes SMS a tus clientes antes de la cita agendada como recordatorio.</p></li>
            <li><p>Ahorra tiempo valioso.</p></li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .FormContainer
        {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: start;
          align-items: center;
          padding: 20px 20px 20px 0;
          gap: 40px;
          background: var(--velier-color);
        }
        .FormContainerDetails
        {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: auto;
          justify-content: center;
          align-items: left;
          gap: 40px;
          text-align: left;
          color: #fff;
        }
        .FormContainerDetails span
        {
          font-size: 4vw;
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
          border-radius: 0 30px 30px 0;
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
        @media only screen and (max-width: 800px)
        {
          .FormContainer
          {
            flex-direction: column-reverse;
            padding: 20px 40px 20px 0;
          }
          .FormContainerDetails
          {
            width: 100%;
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
          }

        }
      `}</style>
    </>
  );
}
