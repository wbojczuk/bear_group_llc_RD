"use client"
import Link from "next/link"
import styles from "./commercialproperties.module.css"

export default function CommercialProperties() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/commercial.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Commercial Properties</h2>

              <p>Our Commercial Properties Services are designed to keep your business premises in pristine condition and running smoothly. We offer comprehensive safety and condition inspections on a weekly, monthly, or quarterly basis, along with regular lighting inspections to ensure your property remains well-lit and secure. Our porter services include routine cleaning and upkeep, while our bulk trash removal and wasp nest removal services help maintain a clean and safe environment.
<br /><br />
Additionally, we handle vendor management and coordination, ensuring that all external work is completed to the highest standards through our quality assurance reviews. We also take care of vacancy cleaning and coordinate tenant move-ins and move-outs, making transitions seamless and hassle-free for both you and your tenants. With our wide range of services, you can focus on running your business while we take care of the property management details.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        

    </section>
  )
}
