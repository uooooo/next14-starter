import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.text}>
                Akafuda creative thoughts agency © 2024 All rights reserved
            </div>
        </div>
    );
}

export default Footer;