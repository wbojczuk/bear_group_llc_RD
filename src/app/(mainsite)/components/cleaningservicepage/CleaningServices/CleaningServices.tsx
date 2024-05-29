"use client"
import Link from "next/link"
import styles from "./cleaningservices.module.css"

export default function CleaningServices() {
  return (
    <section className={styles.section}>

        {/* <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/financial.webp" width={360} height={600} aria-hidden />
          </div> */}

          {/* <div className={styles.content}>
              <h2>Financial Institution</h2>

              <p>We offer specialized cleaning services tailored for banks and financial institutions. Our dedicated team of caretakers ensures a pristine environment by sweeping, vacuuming, and mopping floors with meticulous attention to detail. 
<br /><br />
By maintaining a clean and professional atmosphere, we help create a welcoming space for clients and staff alike. Trust us to uphold the highest standards of cleanliness, reflecting the professionalism and integrity of your institution.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/healthcare.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Healthcare Institution</h2>

              <p>We offer reliable healthcare institution cleaning services designed to promote a cleaner, healthier, and safer environment for patients, staff, and visitors. Our specialized cleaning protocols adhere to the highest industry standards, ensuring that every area of your facility is meticulously sanitized and disinfected to reduce the risk of infections and enhance overall hygiene.
<br /><br />
Our trained cleaning professionals use advanced equipment and eco-friendly products to effectively clean and disinfect patient rooms, surgical suites, waiting areas, and other critical spaces. By maintaining a pristine and sanitary environment, we help healthcare institutions provide the best possible care while ensuring the well-being of everyone who enters their doors.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/carpet.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Carpet and Upholstery</h2>

              <p>Enhance the longevity and appearance of your carpets and upholstery with our regular cleaning services. At Bear Group LLC, we use specialized techniques and equipment to deep clean and rejuvenate your fabrics, removing dirt, stains, and allergens. Our floor maintenance services ensure that all types of flooring in your home are kept in pristine condition, from hardwood to tile and everything in between. Call us today to schedule an appointment and experience the difference professional care can make for your home.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div> */}

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/dealership.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Car Dealership</h2>

              <p>We offer specialized car dealership cleaning services designed to keep your showroom and facilities spotless and inviting. Our comprehensive services include trash takeouts, ensuring all waste is properly disposed of, and thorough cleaning of common areas to maintain a welcoming environment for your customers. Additionally, we focus on meticulous floor cleaning to ensure your dealership always looks its best, providing a pristine setting for showcasing your vehicles. Let us handle the cleaning so you can focus on delivering exceptional customer service.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>


        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/restroom.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Commercial Restroom Cleaning</h2>

              <p>Our commercial restroom cleaning service ensures that your business's restrooms are spotless, hygienic, and welcoming for all users. We thoroughly clean and sanitize all surfaces, including toilets, sinks, floors, and fixtures, to eliminate germs and odors. Our professional team uses high-quality cleaning products and techniques to maintain a pristine and safe environment, reflecting the high standards of your business.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>
        

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/office.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Office Cleaning</h2>

              <p>Our customizable office cleaning plans are designed to meet the unique needs of your workspace. We offer a variety of services including thorough carpet cleaning, restroom disinfection, and many other cleaning solutions to ensure a spotless and healthy environment. Whether you need daily, weekly, or monthly cleaning, we tailor our services to fit your schedule and specific requirements, ensuring your office always looks its best.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
          <img className={styles.img} src="/img/services/residential.webp" width={360} height={600} aria-hidden />
          </div>

          <div className={styles.content}>
              <h2>Residential Cleaning</h2>

              <p>Count on us for thorough and reliable cleaning services for your vacation homes. Our team is dedicated to ensuring your property is spotless and well-maintained, providing you with a clean and comfortable living environment. Contact us today to schedule a cleaning and experience the difference our professional services can make.</p>
              <Link className='main-link main-link-outline' href='/contact'>Contact Us</Link>
          </div>
        </div>

    </section>
  )
}
