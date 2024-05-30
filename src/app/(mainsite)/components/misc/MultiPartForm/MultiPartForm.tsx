"use client"

import styles from "./multipartform.module.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import DisplaySteps from "./styling/DisplaySteps/DisplaySteps"
import MessageStatus from "../../contactpage/MessageStatus/MessageStatus"
import { useRef, useState, ReactNode, useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import serviceData from "@/app/(mainsite)/data/serviceData"

interface sectionProps{
        elements: ReactNode,
        title?: string,
        subtitle?: string
}

interface multiPartFormProps {
    sections: sectionProps[],
    displaySteps?: boolean,
    displayStepsSize?: number,
    onSubmit?: any
    
}

export default function MultiPartForm() {

    // ----- States

    const [status, setStatus] = useState("none")
    const [sectionTitle, setSectionTitle] = useState("")
    const [sectionSubtitle, setSectionSubtitle] = useState("")
    const [currentSection, setCurrentSection] = useState(0)
    const [isLastSection, setIsLastSection] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)



    // ----- Refs

    const formRef: any = useRef()
    const formDataObjectRef: any = useRef()
    const sectionRefs: any = useRef()
    const forwardButtonRef: any = useRef()
    const backButtonRef: any = useRef()
    const swiperRef: any = useRef()

    const serviceElems = serviceData.map((data, i)=>{
        return(
        <div key={i} data-class='checkbox'>
            <input id={data} name={data} type="checkbox" placeholder={data.replaceAll("_", " ")} />
            <label htmlFor={data}>{data.replaceAll("_", " ")}</label>
        </div>
        )
    })

    const sections: multiPartFormSection[] = [
        {
          title: "Contact Us",
          subtitle: "Your Details!",
          elements:
          <>
            <input required name="Name" type="text" placeholder="Name" />
            <input required name="Phone_Number" type="tel" placeholder="Phone Number" />
            <input name="Email" type="email" placeholder="Email" />
          </>
        },
        {
          title: "What Services?",
          subtitle: "Choose some services",
          elements: <>
          {serviceElems}
         </>,
        },
        {
          title: "Any Details",
          subtitle: "List any details that may be needed",
          elements: <>
           <textarea name="Additional_Details" id="Details" placeholder="Additional Details..."></textarea>
          
         </>
        }
    ]



    // ----- Static-ish Variables


    const sectionsAmt = sections.length

    const displaySteps =  true


    let displayStepsSize: any = 0

    let displayStepsConnectorWidth: number = 0


    const sectionElems = sections.map((data, i)=>{
        return(
            <SwiperSlide style={{width: "100%"}} className={`${styles.section} swiper-no-swiping`} key={i} id={`multiPartFormSection${i}`}>
                {data.elements}
            </SwiperSlide>
        )
    })



    // ----- Event Handlers

    function forwardButtonHandler(){
        if(checkCurrentSectionValidity()){

            saveFormData()

            if(isLastSection){
                formRef.current.requestSubmit()
            }else{
                swiperRef.current.swiper.slideNext()

                setCurrentSection((oldVal)=>{
                    return ++oldVal
                })
            }

        }

    }

    function backButtonHandler(){
        saveFormData()

       if(currentSection > 0){
            swiperRef.current.swiper.slidePrev()

            setCurrentSection((oldVal)=>{
                return --oldVal
            })
        }
    }


    // ----- Helper Functions

    function saveFormData(){
        formDataObjectRef.current = Object.fromEntries(new FormData (formRef.current))
    }

    function checkCurrentSectionValidity(){
        let invalidAmt = 0

        // @ts-ignore
        const elemsToCheck = Array.from(document.getElementById(`multiPartFormSection${currentSection}`)?.querySelectorAll("input:not(input[type='submit']):not(input[type='hidden']), section:not(section[type='hidden']), textarea:not(textarea[type='hidden'])")).reverse()
        elemsToCheck?.forEach((elem, i)=>{
            //@ts-ignore
            elem.setCustomValidity("")
            //@ts-ignore
            if(!elem.checkValidity()){
                //@ts-ignore
                elem.setCustomValidity(elem.validationMessage)
                //@ts-ignore
                elem.reportValidity()
                ++invalidAmt
            }else{
               //@ts-ignore
               elem.setCustomValidity("")
                //@ts-ignore
                elem.reportValidity()
            }
        })
        return (invalidAmt == 0)
    }



    // ----- Hooks


    // OnSectionChange
    useEffect(()=>{
        if((currentSection + 1) === sectionsAmt){
            setIsLastSection(true)
        }else{
            setIsLastSection(false)
        }

        //@ts-ignore
        setSectionTitle((sections[currentSection].title != null) ? sections[currentSection].title : "")

        //@ts-ignore
        setSectionSubtitle((sections[currentSection].subtitle != null) ? sections[currentSection].subtitle : "")

        if(currentSection === 0){
            backButtonRef.current.classList.add(styles.disabled)
        }else{
            backButtonRef.current.classList.remove(styles.disabled)
        }

    }, [currentSection])



    //----- Init -----


    if(displaySteps){
        displayStepsSize = 15
        displayStepsConnectorWidth = (100 - (displayStepsSize as number * sectionsAmt)) / (sectionsAmt - 1)
    }
    

    useEffect(()=>{
        saveFormData()

        const tempSectionRefs = []
        for(let i = 0; i < sectionsAmt; ++i){
            tempSectionRefs.push(document.getElementById(`multiPartFormSection${i}`))
        }
        sectionRefs.current = tempSectionRefs


        formRef.current.querySelectorAll("div[data-class='select']>select").forEach((elem: HTMLSelectElement)=>{
            window.addEventListener("click", (evt)=>{
                if((evt.target != elem)){elem.setAttribute("data-isopen", "false")}
                
            })
            elem.setAttribute("data-isopen", "false");
            elem.onclick = (evt: any)=>{
                //@ts-ignore
                if((evt.currentTarget.getAttribute("data-isopen") === "false")){evt.currentTarget.setAttribute("data-isopen", "true")}else{evt.currentTarget.setAttribute("data-isopen", "false")}
            }
        })

    }, [])



  return (
    <>
        <MessageStatus status={status} setStatus={setStatus}/>

        <form className={styles.form} ref={formRef} id="multiPartForm" onSubmit={(evt: any)=>{
            const data = Object.fromEntries(new FormData(formRef.current))
            const objKeys = Object.keys(data)
            let services = ""
            
            serviceData.forEach((data1, i)=>{
                if(objKeys.includes(data1)){
                    if(services !== ""){
                        services += `, ${data1.replaceAll("_", " ")}`
                    }else{
                        services += data1.replaceAll("_", " ")
                    }
                }
                delete data[`${data1}`]
            })
            data.Services_Selected = services

            sendEmail(evt, setStatus,{
                receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
                data: data
            }, formRef.current); swiperRef.current.swiper.slideTo(0); setCurrentSection(0) }}>

            {/* ----- Top Header */}
            <div className={styles.header}>
                {(displaySteps)&&
                    <DisplaySteps
                    displayStepsConnectorWidth={displayStepsConnectorWidth}
                    displayStepsSize={displayStepsSize}
                    currentSection={currentSection}
                    sectionsAmt={sectionsAmt}
                    />
                }
                <h2>{sectionTitle}</h2>
                <h4>{sectionSubtitle}</h4>
            </div>

            {/*  ----- Content  */}
            <div className={styles.contentWrapper}>
            <Swiper
            ref={swiperRef}
            speed={600}
            slidesPerView={"auto"}
            spaceBetween={20}
            onSlideChangeTransitionEnd={()=>{setIsAnimating(false)}}
            onSlideChangeTransitionStart={()=>{setIsAnimating(true)}}
            centeredSlides
            className={styles.swiper}>
                {sectionElems}
            </Swiper>
            </div>

            {/*  ----- Bottom Nav  */}
            <div className={styles.navButtonsWrapper}>
                <a ref={backButtonRef} onClick={(isAnimating) ? ()=>{}: (evt)=>{evt.preventDefault(); backButtonHandler()}} className={`${styles.backButton} ${styles.navButton}`}>Back</a>
                <a ref={forwardButtonRef} onClick={(isAnimating) ? ()=>{}: (evt)=>{evt.preventDefault(); forwardButtonHandler()}} className={`${styles.forwardButton} ${styles.navButton}`}>{(isLastSection) ? "Submit" : "Continue"}</a>
            </div>
        </form>
    </>
  )
}
