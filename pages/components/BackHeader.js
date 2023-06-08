export default function BackHeader() {
    return (
      <>
        <div className="BackHeaderContainer"></div>
        <style jsx>{`
          .BackHeaderContainer {
            width: 100%;
            height: 100px;
            background: var(--primary-color);
          }
          @media only screen and (max-width: 800px)
          {
            .BackHeaderContainer {
              height: 80px;
            }
          }
        `}</style>
      </>
    );
  }