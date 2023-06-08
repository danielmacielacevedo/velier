import Link from "next/link";

export default function InfoLeft() {

  return (
    <>
      <div className='FormContainer'>
        <div className='ImageContent'>
          <img src='https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80' />
        </div>
        <div className="InfoContent">
          <div className='FormContainerDetails'>
            <span>Permite a tus clientes elegir su cita!</span> 
            <ul>
              <li><p>Ahorra tiempo valioso agendando a tus clientes.</p></li>
              <li><p>Todas las citas se van agendando en tu calendario de <i id='small-text'>Google</i>.</p></li>
              <li><p>Tus clientes podran ver las citas disponibles segun tu horario.</p></li>
            </ul>
          <Link href='/'>
            <div className="Button">
              <span>Ver templates</span>
            </div>
          </Link>
          </div>
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
        .InfoContent
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
        }
        .FormContainerDetails
        {
          display: flex;
          flex-direction: column;
          width: 100%;
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
        .ImageContent
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
        .ImageContent img
        {
          width: 100%;
          height: auto;
          object-fit: cover;
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
          .ImageContent
          {
            width: 100%;
          }

        }
      `}</style>
    </>
  );
}
