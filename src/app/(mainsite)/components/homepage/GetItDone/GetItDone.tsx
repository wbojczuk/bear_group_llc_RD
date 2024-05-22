import Link from 'next/link';
import styles from './getitdone.module.css';

export default function GetItDone(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>What We Do</h4>
        <h2>Let’s Get It Done</h2>
        <p>At Bear Group LLC, we believe in turning your property maintenance needs into a hassle-free experience. Our team is dedicated to delivering top-notch service with efficiency and professionalism. No task is too big or too small for us—whether it's routine upkeep or a major repair, we’re ready to tackle it all. Let's get it done right the first time, so you can enjoy a well-maintained property without the stress. Trust Bear Group LLC to keep your property in prime condition, every day.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/getitdone.png" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};