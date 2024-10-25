import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subTitle}>About Akafuda</h2>
                <h1 className={styles.title}>
                    Passion Fuels Purpose!
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    src="/about.png" 
                    alt="About Image" 
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    );
};

export default AboutPage;



