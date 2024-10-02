import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Don't Trust, Verify.</h1>
      <p className={styles.disc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandsImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;