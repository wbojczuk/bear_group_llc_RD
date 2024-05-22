"use client"

import styles from "./services.module.css"
import Service from "./Service"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Services(props: servicesModuleType) {

  const [isOnMobile, setisOnMobile] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

    const serviceElems = props.services.map((service, i)=>{
        return <Service hidden={((i+1) > 3)} {...service} key={i} />
    })

    function showMoreHandler(evt: any){

      evt.currentTarget.classList.add("hidden")

      const hiddenElems = document.querySelectorAll(`.${styles.services} .mobile-hidden`)

      hiddenElems.forEach((elem)=>{
        elem.classList.remove("mobile-hidden")
      })
      setIsHidden(false)
    }

    useEffect(()=>{
      if(typeof window !== "undefined"){
        setisOnMobile(window.matchMedia("(max-width: 649px)").matches)
      }
    }, [])

  return (
    <section className={styles.services}>
            <h4>Our Services</h4>
            <h2>See Our Different Services</h2>
            <p className={styles.desc}>At Bear Group LLC, we pride ourselves on providing a comprehensive range of services to ensure your property is always well-managed and maintained to the highest standards. Our team of experienced professionals is dedicated to taking care of every aspect of your home, so you can enjoy peace of mind knowing that your property is in excellent hands. From routine maintenance and repairs to specialized services, we have the expertise and resources to meet all your property needs. Take a look at the different categories below to see the full scope of what Bear Group LLC has to offer.</p>

            <div className={styles.servicesWrapper}>
                {serviceElems}
            </div>
            <div className={`center ${styles.ctaWrapper}`}>
              {(isOnMobile && isHidden) && 
                  <button onClick={showMoreHandler} className="main-link">Show More</button>
              }
              {(!isOnMobile || !isHidden) && 
               <Link className="main-link" href="/contact">Get a Quote!</Link>
              }
            </div>
    </section>
  )
}
