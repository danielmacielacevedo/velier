

export default function Cover() {
    return (
        <>
            <div className="CoverContainer">
                <h1>Damos una nueva imagen a tu negocio</h1>
                <p>Te ayudamos a llegar a todas esas personas que te necesitan, pero que aún no lo saben.</p>
                <span>Ver demos</span>
            </div>
            <style jsx>{`
                .CoverContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 500px;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    text-align: center;
                    gap: 20px;
                    font-size: 3vh;
                }
            `}</style>
        </>
    )
}