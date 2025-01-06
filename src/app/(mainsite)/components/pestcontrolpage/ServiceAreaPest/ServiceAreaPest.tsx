import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
        
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/d/embed?mid=1mPUG0T9HA53homIvqFtN5x295NQ6p4M&ehbc=2E312F&noprof=1" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Link className='main-link main-link-light' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Call Now</Link>
 </div>
)};