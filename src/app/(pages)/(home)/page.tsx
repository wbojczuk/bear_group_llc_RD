import GetItDone from "@/app/(mainsite)/components/homepage/GetItDone/GetItDone";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import serviceAreaData from "@/app/(mainsite)/data/serviceAreaData";


export default function Home() {

  const circleSRC = "/img/circle.png"

  const ribbonContent = <>
  <span>Pest Control</span>
  <img src={circleSRC} aria-hidden />
  <span>Seasonal House Cleaning</span>
  <img src={circleSRC} aria-hidden />
  <span>House Maintenance</span>
  <img src={circleSRC} aria-hidden />
  <span>Landscaping Maintenance</span>
  <img src={circleSRC} aria-hidden />
  <span>Handyman Services</span>
  <img src={circleSRC} aria-hidden />
  <span>Debris Removal</span>
  <img src={circleSRC} aria-hidden />
  </>;

  const myServices: servicesModuleType = {
    services: [
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg>,
        title: "Property Management",
        description: "Property management involves taking care of all the day-to-day tasks needed to keep your property in top condition. This service includes everything from handling repairs and maintenance to managing tenants and ensuring your property stays in great shape."
      },
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm1 15h-2v-2h2zm0-4h-2V8h2z"></path></svg>,
        title: "Foreclosure Services ",
        description: "Our foreclosure services provide comprehensive support during the foreclosure process, helping to manage and maintain properties until they are sold. We handle everything from securing the property to necessary repairs, ensuring it remains in optimal condition."
      },
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2.385 21v-8.154h3V21zM14 21.808l-7.616-2.225v-6.737h2.38l7.352 2.712v1.596h-3l-2.597-.925l-.311.752l2.869.942H21V19.5zm.865-8.735l-5.73-2.112H5.903q.098-1.62 1.23-2.69t2.732-1.287V4h-1.5V3h5q.58 0 1.138.15t1.048.452l-.733.733q-.35-.162-.709-.248Q13.753 4 13.367 4h-2.5v2.985q1.705.215 2.852 1.481q1.148 1.267 1.148 2.996zM18.5 9.616q-.633 0-1.066-.434T17 8.116q0-.48.339-1.195Q17.677 6.206 18.5 5q.823 1.206 1.162 1.912T20 8.116q0 .632-.434 1.066q-.433.434-1.066.434"></path></svg>,
        title: "Cleaning services",
        description: "Our cleaning services ensure your home is spotless and hygienic, giving you a clean and comfortable living space. From regular housekeeping to deep cleaning, our team handles all your cleaning needs with care and professionalism."
      },
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="currentColor" d="m91.963 80.982l.023-.013l-7.285-12.617h2.867v-.013c.598 0 1.083-.484 1.083-1.082c0-.185-.059-.351-.14-.503l.019-.011l-6.737-11.669h1.639v-.009a.773.773 0 0 0 .773-.772a.758.758 0 0 0-.1-.359l.013-.008l-9.802-16.979l-.01.006a1.322 1.322 0 0 0-1.186-.754c-.524 0-.968.311-1.185.752l-.005-.003l-9.802 16.978l.002.001a.75.75 0 0 0-.105.366c0 .426.346.772.773.772v.009h1.661l-6.737 11.669l.003.001a1.06 1.06 0 0 0-.147.513c0 .598.485 1.082 1.083 1.082v.013h2.894l-2.1 3.638l-8.399-14.548h4.046v-.018c.844 0 1.528-.685 1.528-1.528c0-.26-.071-.502-.186-.717l.015-.009l-9.507-16.467h2.313v-.012a1.09 1.09 0 0 0 1.091-1.092c0-.186-.059-.353-.141-.506l.019-.011L36.4 13.125l-.005.003a1.873 1.873 0 0 0-1.683-1.06c-.758 0-1.408.452-1.704 1.1L19.201 37.082l.003.002a1.06 1.06 0 0 0-.148.516a1.09 1.09 0 0 0 1.09 1.092v.012h2.345l-9.395 16.272a1.516 1.516 0 0 0-.316.92c0 .844.685 1.528 1.528 1.528v.018h4.084L8.252 75.007c-.24.314-.387.702-.387 1.128c0 1.032.838 1.87 1.871 1.87v.021h19.779v8.43c0 .815.661 1.477 1.476 1.477h7.383c.815 0 1.477-.661 1.477-1.477v-8.43h16.12l-1.699 2.943l.003.002c-.104.189-.18.396-.18.628c0 .732.593 1.325 1.325 1.325v.015h14.016v3.941c0 .578.469 1.046 1.046 1.046h5.232c.578 0 1.046-.468 1.046-1.046v-3.941h14.05v-.015c.732 0 1.326-.593 1.326-1.325a1.295 1.295 0 0 0-.173-.617"></path></svg>,
        title: "Landscape services",
        description: "Our landscaping services ensure your outdoor spaces are beautiful and well-maintained year-round. From lawn care and garden design to tree trimming and seasonal cleanups, we handle all aspects of landscaping to enhance your property’s curb appeal."
      },
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h.6l1.975-6.575q.2-.65.738-1.037T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18h.6q.425 0 .713.288T19 19t-.288.713T18 20zm5-13V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m5.25 1.35l2.125-2.125q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.125 2.15q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713M19 13h3q.425 0 .713.288T23 14t-.288.713T22 15h-3q-.425 0-.712-.288T18 14t.288-.712T19 13M6.35 9.75L4.225 7.625q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l2.15 2.125q.3.3.3.7t-.3.7t-.712.3t-.713-.3M2 15q-.425 0-.712-.288T1 14t.288-.712T2 13h3q.425 0 .713.288T6 14t-.288.713T5 15z"></path></svg>,
        title: "Emergency Services",
        description: "Our emergency services are available 24/7 to address urgent issues like plumbing leaks, electrical problems, and storm damage. We're committed to providing quick and reliable solutions to keep your home safe and functional at all times."
      },
      {
        url: "/services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6.2C10 4.3 8.8 2.6 7 2v3.7H4V2c-1.8.6-3 2.3-3 4.2s1.2 3.6 3 4.2v11c0 .4.2.6.5.6h2c.3 0 .5-.2.5-.5v-11c1.8-.6 3-2.3 3-4.3M16 8s-.1 0 0 0c-3.9.1-7 3.2-7 7c0 3.9 3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m-1-9v5l3.6 2.2l.8-1.2l-2.9-1.7V11z"></path></svg>,
        title: "Property Maintenance",
        description: "Property maintenance involves the regular upkeep and repair of a property to ensure it remains safe, functional, and attractive. This service covers everything from fixing minor issues to conducting routine inspections and preventative care to keep your property in top condition."
      },

    ]
  }


  return (
    <>
      <Header />
      <InlineReviews />
      <GetItDone />
      <InfiniteRibbon content={ribbonContent}/>
      <Services services={myServices.services} />
      <StatsRibbon />
      <PastWork />
      <ServiceArea areaData={serviceAreaData} mapURL="https://www.google.com/maps/d/u/0/embed?mid=1NOFeblz7l_O4dbprE9lnyeK1ls8KHI0&ehbc=2E312F" />
    </>
  )
}
