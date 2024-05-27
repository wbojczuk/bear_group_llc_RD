"use client"

import { useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "./MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm1" onSubmit={(evt)=>{sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: Object.fromEntries(new FormData(formRef.current))
    }, formRef.current)}}>

        <h3 id="estimateFormTitle1">Ask About Our Packages</h3>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper1">
                <input required type="text" name="Name" id="name_input1" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper1">
                <input required type="tel" name="Phone_Number" id="phonenum1" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper1">
               
            <input required type="email" name="Email" id="email1" placeholder={"Email"} />
            </div>

            <div className="input-wrapper1">
                <textarea required maxLength={5000} name="Details" id="messageInput1" placeholder={"Additional details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className={`main-link`} id="estimateFormSubmit1" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
