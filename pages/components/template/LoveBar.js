export default function LoveBar(props) {
    return (
        <>
            <div className="LoveBarContainer">
                <i></i>
                <h2>Sonríe sin preocupaciones, estamos aquí para cuidar tu sonrisa.</h2>
                <p>- {props.title}</p>
                <i id="agendar"></i>
            </div>
            <style jsx>{`
                .LoveBarContainer
                {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 360px;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-top: -56px;
                    padding: 40px 20px 30px;
                    gap: 20px;
                    background: var(--background-start-rgb);
                }
            `}</style>
        </>
    )
}