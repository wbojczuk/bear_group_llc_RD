"use client"
import Link from "next/link"
import styles from "./pestcontrol.module.css"

export default function PestControl() {
  return (
    <section className={styles.section}>

<div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/tick.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Mosquito & Tick Service</h2>

              <p>Our Mosquito & Tick Service is designed to protect your outdoor space from these pesky and potentially harmful pests. With our effective treatments, we target areas where mosquitoes and ticks breed and thrive, significantly reducing their populations. Whether you're enjoying a backyard barbecue or relaxing in your garden, our service provides peace of mind, allowing you to fully enjoy your outdoor living spaces without the nuisance or worry of bites and potential diseases transmitted by these insects. Trust us to safeguard your outdoor environment, so you can make the most of your time outdoors, worry-free.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/insect.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Insect Control</h2>

              <p>Insect control services offered by Blue Village Property Services LLC are designed to safeguard your property against unwanted pests and insects. Our skilled technicians employ effective strategies to identify, treat, and prevent infestations, ensuring your home remains a safe and comfortable environment. From routine inspections to targeted treatments, we tailor our insect control services to meet the unique needs of your property, providing you with peace of mind and protection against common pests such as ants, roaches, spiders, and more. With Blue Village Property Services LLC, you can trust that your property will be free from invasive insects, allowing you to enjoy a pest-free living space year-round.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/rodent.png" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Rodent Control</h2>

              <p>Rodent control helps keep your home or business safe and healthy by addressing infestations of mice, rats, and other pests. This service includes identifying entry points, setting traps, and using safe, effective methods to eliminate rodents and prevent them from coming back. Whether you're dealing with a current problem or want to protect against future infestations, professional rodent control ensures your space stays clean, secure, and pest-free.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/termite.png" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Termite Control</h2>

              <p>Termite control is all about protecting your home or business from the damage caused by these wood-destroying pests. Our professional termite control services include thorough inspections to detect infestations, effective treatments to eliminate termites, and preventative solutions to keep them from coming back. Whether you're dealing with a current problem or looking to protect your property for the future, we use safe, proven methods to ensure long-lasting results and peace of mind.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

    </section>
  )
}
