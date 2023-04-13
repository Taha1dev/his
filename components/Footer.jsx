import Image from 'next/image';
import styles from '@/styles/footer.module.css'
const footer = () => {
  return (
    <>
      <div
        className={`${styles.footer} py-5 text-white-50 text-center text-md-start mt-5`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.info}`}>
                <Image
                  src="/public/smallLogo.png"
                  alt=""
                  className={`${styles['footer-img']} myImage`}
                  width={46}
                  height={46}
                ></Image>
                <p className={`${styles['footer-p']}`}>
                  Leading the Way in Medical <br />
                  Execellence, Trusted Care.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className={`${styles.links}`}>
                <h5 className="text-light">Important Links</h5>
                <ul className="list-unstyled">
                  <li className={`${styles['footer-p']}`}>Appointment</li>
                  <li className={`${styles['footer-p']}`}>Doctors</li>
                  <li className={`${styles['footer-p']}`}>Services</li>
                  <li className={`${styles['footer-p']}`}>About Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className={`${styles.links}`}>
                <h5 className="text-light">Contact Us</h5>
                <ul className="list-unstyled">
                  <li className={`${styles['footer-p']}`}>Call:+681-812-255</li>
                  <li className={`${styles['footer-p']}`}>
                    Email:name@gmail.com
                  </li>
                  <li className={`${styles['footer-p']}`}>
                    Address:Some place
                  </li>
                  <li className={`${styles['footer-p']}`}>Damascus, Syria</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <h5 className="text-light">Subscribe our Newsletter</h5>
              <p className="">
                Provide a reminder to send you the latest health News
              </p>
              <form action="">
                <input
                  type="text"
                  className={`${styles['rounded-pill']} py-1 ps-2`}
                  placeholder="Enter Your Email"
                />
                <input
                  type="submit"
                  className={`${styles['submit-red']} text-light`}
                />
              </form>
            </div>
          </div>
          <hr
            className={`${styles['footer-line']} mt-5 align-items-center l`}
          />
          <p className={`${styles['footer-p']}`}>
            2022 ©<b style={{ color: 'var(--2ndColor)' }}>HIMS</b> Hospital
            Rights Reserved. Terms of Use | Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};
export default footer;
