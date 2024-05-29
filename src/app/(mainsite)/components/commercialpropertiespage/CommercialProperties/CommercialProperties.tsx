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

              <p>At Bear Group LLC, our Commercial Property Services are designed to keep your commercial spaces safe, clean, and well-maintained. We offer comprehensive weekly, monthly, and quarterly property safety and condition inspections, ensuring your property meets all standards and remains in excellent condition. Our services include thorough lighting inspections, porter services for daily upkeep, and bulk trash removal to keep your premises clean and inviting.
<br /><br />
Additionally, we handle wasp nest removal for a safe environment, manage and coordinate with vendors to ensure seamless service delivery, and conduct quality assurance reviews of vendor work. We also provide vacancy cleaning services and coordinate tenant move-ins and move-outs to make transitions smooth and hassle-free. With Bear Group LLC, your commercial property is in capable and reliable hands.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        

    </section>
  )
}
