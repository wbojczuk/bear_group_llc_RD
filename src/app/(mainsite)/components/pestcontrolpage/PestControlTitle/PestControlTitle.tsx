import Link from 'next/link';
import styles from './getitdone.module.css';

export default function PestControlTitle(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Pest Control</h2>
        <p>Blue Village Property Services is your trusted partner in pest management solutions across the scenic landscapes of Rhode Island. We have a team of professionals, committed to ensuring your home, business, or institution remains a sanctuary, free from pesky intruders, ultimately promoting a healthier and more comfortable environment.
<br /><br />
At Blue Village Property Services, we hold our heads high in our unwavering commitment to eco-friendly pest control practices. We deeply grasp the importance of safeguarding our environment while ensuring your property remains an uninviting space for unwanted guests. 
<br /><br />
Our array of services spans a wide spectrum of pests that Rhode Islanders often encounter—persistent ants, resilient ticks, notorious mosquitoes, wood-hungry termites, elusive bed bugs, and the menacing wasp nests. Whether you’re faced with a minor nuisance or a full-blown infestation, our team of experienced technicians, armed with comprehensive knowledge and cutting-edge tools, stands ready to resolve your pest predicaments promptly and efficiently</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/pest.png" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};