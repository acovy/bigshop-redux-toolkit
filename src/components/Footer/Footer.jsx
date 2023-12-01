import React from 'react';
import styles from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by <a 
        href="https://github.com/acovy"
        target='_blank'
        rel='noreferrer'>
          Acovy
        </a>
      </div>
      <div className={styles.socials}>
        <a 
          href="https://www.instagram.com/acovyyyy/"
          target='_blank'
          rel='noreferrer'>
            <svg className={styles['icon']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
            </svg>
        </a>
        <a 
          href="https://www.facebook.com/acovyyyy/"
          target='_blank'
          rel='noreferrer'>
            <svg className={styles['icon']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
            </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer;