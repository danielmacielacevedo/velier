import Map from "./Map";

export default function Contacto(props) {
    return (
        <>
            <div className="ContactoContainer">
                <Map />
                <div className="ContactoContent">
                    <span>Contacto</span>
                    <ul>
                        <li>ejemplo@{props.username}.com</li>
                        <li><h2>(123) 456 7890</h2></li>
                        <li>Av. Ejemplo Nº 000, 12345 Monterrey, Mexico</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .ContactoContainer
                {
                    display: flex;
                }
                .ContactoContent
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 20px;
                    gap: 20px;
                    background: var(--grey-full);
                }
                ul
                {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    list-style: none;
                    gap: 20px;
                }
                li
                {
                    display: flex;
                    width: 100%;
                    height: 60px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    padding: 0 20px;
                    background-color: var(--background-start-rgb);
                }
                span
                {
                    font-size: 40px;
                    font-family: var(--primary-font);
                    line-height: 4vw;
                }
                @media only screen and (max-width: 800px)
                {
                    .ContactoContainer
                    {
                        flex-direction: column;
                    }
                    span
                    {
                        font-size: 30px;
                        line-height: 40px;
                    }
                }
            `}</style>
        </>
    )
}