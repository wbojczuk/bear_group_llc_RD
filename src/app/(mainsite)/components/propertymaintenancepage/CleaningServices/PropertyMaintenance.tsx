"use client"
import Link from "next/link"
import styles from "./propertymaintenance.module.css"

export default function PropertyMaintenance() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/exterior.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Exterior Maintenance</h2>

              <p>This refers to upkeep related to a property’s exterior—also known as grounds maintenance—including cleaning of a building’s exterior, roof gutters, and drains. It also includes landscaping and gardening, repairs, snow removal in common areas, and graffiti removal.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/pest.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Pest Control</h2>

              <p>Property maintenance includes pest or rodent control and removal, as well as preventative measures (like timely trash removal—see below).</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/stair.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Common Area Maintenance</h2>

              <p>For those that own multi-unit properties, this includes the upkeep (repairs and cleanliness) of common areas such as stairways, hallways, mail rooms.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/trash.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Trash and Recycling</h2>

              <p>The separation and removal of trash and recycling is an important part of preventive maintenance for pest control. Professional property managers are experts in local management and collection laws which can save you from paying costly city waste collection fees.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/repairs.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Interior Maintenance</h2>

              <p>This includes keeping the plumbing, electrical, and HVAC systems in working order for all units and common areas, and making repairs quickly when they’re needed.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/smokedetector.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Safety Checks</h2>

              <p>Safety checks include checking and maintenance of smoke detectors and carbon monoxide detectors. They also cover proactive inspections of electrical and mechanical systems and periodic safety inspections of the property and grounds</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

    </section>
  )
}
