import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function HeaderGeneral() {
  const menuButtonRef = useRef(null);
  const menuContentRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();

  function handleBurgerClick() {
    menuButtonRef.current.classList.toggle("Open");

    menuContentRef.current.classList.toggle("Open");

    headerRef.current.classList.toggle("Open")

    logoRef.current.classList.toggle('Open')

  }

  return (
    <>
      <nav className="NavContainer">
        {/* <div className="NavAvisos">
            <p>Sitio en desarrollo.</p>
            <a href="/noticias">Más info</a>
        </div> */}
        <div ref={headerRef} className="NavFull">
          <Link href="/">
            <i ref={logoRef} id="HeaderLogo"></i>
          </Link>

          <div className="NavNavigation">
            <div className="NavSwitch">
              <div className="NavLinksContainer">
                <ul className="NavLinks">
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li>
                    <Link href="/">Templates</Link>
                  </li>
                  <li>
                    <Link href="/">Contacto</Link>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleBurgerClick}
                ref={menuButtonRef}
                className="MenuButton"
              >
                <div className="MenuButtonBurger"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="MenuMobileContainer">
          <div ref={menuContentRef} className="MenuMobileBackground">
            <div className="MenuMobileLinksContainer">
              <ul className="MenuMobileLinks">
                <li>
                  <Link onClick={handleBurgerClick} href="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link onClick={handleBurgerClick} href="/">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link onClick={handleBurgerClick} href="/">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}