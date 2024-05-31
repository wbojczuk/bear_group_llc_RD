"use client"
import Link from "next/link"
import styles from "./propertymanagement.module.css"

export default function PropertyManagement() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/screening.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Tenant screening</h2>

              <p>Due to our effective marketing, we are able to attract many potential tenants. At this point, we begin our tenant screening process. Finding a high-quality tenant is crucial for any rental property owner. We know the task can seem daunting, and we are here to help! Our team does an extensive check on applicants' financial background, rental history, criminal records, and employment status. Only after verifying all of their records will we choose a tenant to occupy your property.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        {/* <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/maintenance.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Property Repairs / Maintenance</h2>

              <p>At Bear Group, our mission is to always keep your properties in the best condition possible.
With our frequent maintenance and inspections, you can rest assured knowing that your property is under high-quality care. Our team focuses on preventative maintenance, as small and frequent repairs are the best way to prevent larger, more costly issues that could arise in the future. We are dedicated to responding to all maintenance requests and concerns from your tenant quickly, ensuring every job is done with excellence. It is our goal to build positive relationships with your tenants, because we know that a happy tenant is more likely to stay in your property long-term.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div> */}

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/homewatch.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Home Watch</h2>

              <p>Whether you’re a weekend warrior or only find your way to your summer home for a couple weeks out of the year, from castle to cottage, you’re in experienced and most capable hands.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/storm.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Storm Follow-Up</h2>

              <p>During periods of adverse weather conditions or sustained power outages, it is not uncommon for homes to be checked multiple times in a 24 hour period. We will go out to your home and do a full inspection. 
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

       

        {/* <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/marketing.webp" width={360} height={600} aria-hidden />
          </div>

        <div className={styles.content}>
              <h2>Marketing Your Rental Property</h2>

              <p>We know that a vacant rental property will only cost you more money, as it will not generate income yet still come with various expenses. That's why, as soon as you have a vacancy, we work tirelessly to fill it with our extensive marketing strategies! When marketing your property, our goal is to attract a wide pool of potential tenants. We start by taking professional photos of your rental home. Then, our team posts the ad on many different listing websites, ensuring that your rental home is seen by as many prospective tenants as possible
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div> */}

    </section>
  )
}
