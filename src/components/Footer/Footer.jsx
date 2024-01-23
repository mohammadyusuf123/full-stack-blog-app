import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.logo}>Develop By Yusuf</div>
        <div className={styles.text}>
          Yusuf creative thoughts agency © All rights reserved.
        </div>
      </div>
    );
};

export default Footer;