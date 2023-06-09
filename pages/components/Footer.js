import Link from "next/link";

export default function Footer() {

  return (
    <>
        <div className="FooterContainer">
                <Link className="FlexColumn" href="/">
                    <i id="HeaderLogo"></i>
                    <p>Llega a todas esas personas que te necesitan pero que aun no lo saben.</p>
                </Link>
                <article>
                    <h3>Navegación</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/">Templates</Link></li>
                        <li><Link href="/">Contacto</Link></li>
                    </ul>
                </article>
                <article>
                    <h3>Templates</h3>
                    <ul>
                        <li><Link href="/">Belleza</Link></li>
                        <li><Link href="/">Nutrición</Link></li>
                        <li><Link href="/">Despacho</Link></li>
                        <li><Link href="/">Odontologia</Link></li>
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