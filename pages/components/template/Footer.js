import Link from "next/link";

export default function Footer(props) {

  return (
    <>
        {/* <div className="FooterContainer">
                <Link className="FlexColumn" href="/">
                    <h1 id="HeaderLogoTemplate">{props.logo}</h1>
                    <p>Descubre el poder de una sonrisa sana y hermosa.</p>
                </Link>
                <article>
                    <h3>Navegación</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/">Agendar</Link></li>
                        <li><Link href="/">Contacto</Link></li>
                    </ul>
                </article>
                <article>
                    <h3>Social</h3>
                    <ul>
                        <li><Link href="/">Instagram</Link></li>
                        <li><Link href="/">Facebook</Link></li>
                        <li><Link href="/">TikTok</Link></li>
                    </ul>
                </article>
        </div> */}


        <div className="FooterContainer">
            <div className="FlexColumn">
                <i id="HeaderLogoDentist"></i>
                <h1 id="HeaderLogoTemplate">{props.logo}</h1>
                <p>Descubre el poder de una sonrisa sana y hermosa.</p>
            </div>
            <article>
                <h3>Navegación</h3>
                <ul>
                    <li><p >Inicio</p></li>
                    <li><p >Agendar</p></li>
                    <li><p >Contacto</p></li>
                </ul>
            </article>
            <article>
                <h3>Social</h3>
                <ul>
                    <li><p >Instagram</p></li>
                    <li><p >Facebook</p></li>
                    <li><p >TikTok</p></li>
                </ul>
            </article>
        </div>
        <style jsx>{`
            .FooterContainer
            {
                display: flex;
                width: 100%;
                height: 400px;
                padding: 40px 100px;
                justify-content: space-between;
                gap: 40px;
            }
            article
            {
                display: flex;
                flex-direction: column;
                gap: 40px;
            }
            ul
            {
                display: flex;
                flex-direction: column;
                list-style: none;
                gap: 10px;
            }
            @media only screen and (max-width: 800px)
            {
                .FooterContainer
                {
                    flex-direction: column;
                    height: fit-content;
                    padding: 40px;
                }
            }
        `}</style>
    </>
  );
}