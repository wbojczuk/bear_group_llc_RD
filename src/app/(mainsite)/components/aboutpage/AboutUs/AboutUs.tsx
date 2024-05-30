import Link from 'next/link';
import styles from './aboutus.module.css';

export default function AboutUs(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Who We Are</h4>
        <h2>About Us</h2>
        <p>Our journey began as a landscaping company, but over the years, we have adapted and expanded our services to meet the evolving needs of our clients. We now offer a comprehensive range of interior and exterior property services. We are a local, family-owned, and operated company with more than 35 years of dedicated experience, we’ve earned the trust from many customers. What sets us apart is our extensive experience in the field. We are dedicated professionals who are experts in our respective areas, ensuring that we deliver top-notch services to our customers.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/getitdone.png" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};