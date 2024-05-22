"use client"

import styles from "./services.module.css"
import Link from "next/link"

interface serviceProps extends serviceType{
  hidden?: boolean
}

export default function Service(props: serviceProps) {
  return (
    <Link href={(props.url !== undefined) ? props.url : "/contact"} className={`${styles.service} ${(props.hidden != undefined && props.hidden == true) ? "mobile-hidden" : ""}`}>
        <div className="center">
        <div className={styles.iconWrapper}>
            {props.icon}
        </div>
        </div>
        <h5>{props.title}</h5>
        <p className={styles.serviceDescription}>{props.description}</p>
    </Link>
  )
}
