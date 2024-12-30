"use client"
import Link from "next/link"
import styles from "./landscapingservices.module.css"

export default function LandscapingServices() {
  return (
    <section className={styles.section}>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/aeration.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Aeration</h2>

              <p>Aeration is a vital service in lawn care, involving the process of perforating the soil with small holes to allow air, water, and nutrients to penetrate the grassroots. This helps alleviate soil compaction and promotes healthier root growth, resulting in a lusher and more vibrant lawn. At Blue Village Property Services LLC, our aeration service is conducted with precision and expertise, using specialized equipment to ensure optimal results for your lawn's overall health and appearance. Whether your lawn is struggling to thrive or you simply want to maintain its beauty, our aeration service is a key component of our comprehensive property maintenance offerings.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/dethatch.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>De-thatching</h2>

              <p>De-thatching is a vital service in lawn care aimed at removing the layer of dead grass, roots, and debris that can accumulate on the soil surface, known as thatch. This layer can prevent water, air, and nutrients from reaching the grassroots, leading to unhealthy grass growth and potential lawn problems. By effectively de-thatching, either through mechanical means like raking or using specialized equipment, the lawn can breathe better, promoting healthier grass growth and overall lawn vitality. This service is typically performed as part of regular lawn maintenance routines to ensure the longevity and vibrancy of the lawn.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/fertilizer.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Fertilizing</h2>

              <p>Fertilizing is a crucial aspect of property maintenance, essential for promoting healthy growth and vibrant appearance in lawns, gardens, and landscaping. Our fertilizing services at Blue Village Property Services LLC are designed to provide your green spaces with the nutrients they need to thrive, resulting in lush, green lawns and vibrant, blooming plants. With our expertise in selecting the right fertilizers and applying them at optimal times, we ensure that your property receives the nourishment it needs to flourish throughout the year, enhancing its overall appeal and value. Trust Blue Village Property Services LLC to keep your outdoor spaces looking their best with our professional fertilizing services.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/lawn_install.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Lawn Installation & Restoration</h2>

              <p>At Blue Village Property Services LLC, we specialize in Lawn Installation & Restoration services designed to transform your outdoor space into a lush and inviting landscape. Whether you're starting from scratch or rejuvenating an existing lawn, our expert team will work with you to create a customized plan tailored to your property's specific needs. From soil preparation and seed selection to irrigation system installation and ongoing maintenance, we handle every aspect of the process with precision and care. With our dedication to quality and attention to detail, you can trust Blue Village Property Services LLC to deliver exceptional results that enhance the beauty and value of your property for years to come.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/hedge.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Hedge Trimming</h2>

              <p>Our hedge trimming service at Blue Village Property Services LLC is designed to keep your property looking neat, tidy, and well-manicured. Our team of skilled professionals utilizes the latest tools and techniques to trim hedges to perfection, enhancing the overall aesthetic appeal of your outdoor space. Whether you have unruly bushes that need shaping or intricate topiaries that require precision trimming, we have the expertise to handle any hedge trimming job with efficiency and care. With our meticulous attention to detail, you can trust us to deliver exceptional results that exceed your expectations, leaving your property looking pristine and inviting.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        {/*  */}

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/weeds.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Weed Control</h2>

              <p>Our Weed Control services at Blue Village Property Services LLC encompass both yard and driveway maintenance, ensuring your property maintains its pristine appearance. With specialized techniques and environmentally friendly solutions, we effectively eliminate unsightly weeds that can detract from the beauty of your outdoor spaces. Whether it's reclaiming your yard from invasive plants or keeping your driveway weed-free, our expert team tackles weed control with precision and care, leaving your property looking neat and well-maintained.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

    </section>
  )
}
