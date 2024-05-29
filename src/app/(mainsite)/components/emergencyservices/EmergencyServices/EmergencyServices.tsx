"use client"
import Link from "next/link"
import styles from "./emergencyservices.module.css"

export default function EmergencyServices() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/emergency.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Emergency Services</h2>

              <p>At Bear Group LLC, we understand that emergencies can happen at any time, which is why we offer 24/7 emergency response services to address urgent issues promptly. Our on-call maintenance team is always ready to handle a wide range of emergencies, including leaking roofs, water emergencies, frozen pipes, HVAC failures, and more. 
<br /><br />
Our comprehensive emergency services also cover minor leaks, noise complaints, heating problems, electrical issues, and power outages. We are equipped to handle critical situations such as carbon monoxide leaks, gas leaks, fires, flooding, sewer backups, and appliance malfunctions. Whether it's a broken lock, clogged toilet, broken water line, or parking dispute, Bear Group LLC is here to ensure your property remains safe and functional at all times.
              </p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        

    </section>
  )
}
