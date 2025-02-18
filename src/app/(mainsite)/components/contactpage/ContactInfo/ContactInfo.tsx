import styles from "./contactinfo.module.css"
import MultiPartForm from "../../misc/MultiPartForm/MultiPartForm"
export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.formWrapper}>
          <h2>Get in touch</h2>
          <p>Contact us to get started. We’re always happy to provide a free quote and help out with any questions you may have.</p>
          <MultiPartForm />
        </div>
        <div className={styles.imgWrapper}>

            <div className={styles.contentWrapper}>
              <h5>Email</h5>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>

            <div className={styles.contentWrapper}>
              <h5>Phone Number</h5>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>

            {/* <div className={`${styles.contentWrapper} ${styles.facebook}`}>
            <a href={`https://www.facebook.com/profile.php?id=61561162895173`} target="_blank">
              <h5><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg> Facebook</h5>
            </a>
            </div> */}

            <img src="/img/contact-img.webp" alt="house background" className="bg-img" />
            <div className="shader"></div>
        </div>
    </section>
  )
}
