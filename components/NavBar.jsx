import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'
const NavBar = () => {
  return (
    <>
      <div className={`${styles.container} mt-2`}>
      <div className={`row align-items-center d-sm-flex justify-content-center mb-sm-2`}>
        <div className={`col-lg-8 col-md-3 d-sm-flex  mb-sm-2 `}>
          <div>
            <Image
              className={`${styles.logoImg} myImage`}
              src="/smallLogo.png"
              alt=""
              width={100}
              height={100}
            />
            <p className={`l-title ms-4 mb-0`}>
              <b>HIS</b> © We Live once
            </p>
          </div>
        </div>
        <div className={`btn log col-lg-1 col-md-3 col-sm-4 `}>Login</div>
        <div className={`btn log col-lg-1 col-md-3 col-sm-4 `}>Signup</div>
        <div className={`col-lg-1 col-md-3 col-sm-4 dropdown `}>
          {/* <div className="lan dropdown-toggle " id="language" data-toggle="dropdown">English</a></div>
        <div className="dropdown-menu" aria-labelledby="language">
          <a href="#" className="lan dropdown-item">Arabic</a> */}
        </div>
      </div>
      {/* NavBar Start  */}
      <nav className={`navbar navbar-expand-lg  mt-2 ${styles.navBar}`}>
        <Link
          href="#navshow"
          data-toggle="collapse"
          className={`navbar-toggler ${styles.navBarToggler}`}
        >
          <span className={`navbar-toggler-icon`}></span>{' '}
        </Link>
        <div id="navshow" className={`collapse navbar-collapse`}>
          <ul className={`navbar-nav m-auto ${styles.navbarNav}`}>
            <li className={`nav-item p-2 px-lg-3 active`}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Home <span className={`sr-only`}></span>{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                News{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Appointment{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Events{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Departments{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Doctors{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                About{' '}
              </Link>
            </li>
            <li className={`nav-item p-2 px-lg-3 `}>
              <Link className={`nav-link ${styles.navLink}`} href="#">
                {' '}
                Contact us{' '}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* NavBar End  */}
    </div>
    </>
  );
};
export default NavBar;
