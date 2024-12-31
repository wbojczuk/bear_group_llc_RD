import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Affiliates from "@/app/(mainsite)/components/pestcontrolpage/Affiliates/Affiliates"
import InfiniteRibbonPest from "@/app/(mainsite)/components/pestcontrolpage/InfiniteRibbonPest/InfiniteRibbonPest"
import PestControl from "@/app/(mainsite)/components/pestcontrolpage/PestControlContent/PestControl"
import PestControlTitle from "@/app/(mainsite)/components/pestcontrolpage/PestControlTitle/PestControlTitle"
import ServiceArea from "@/app/(mainsite)/components/pestcontrolpage/ServiceAreaPest/ServiceAreaPest"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Pest Control | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Pest Control | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function PestControlPage(){
	const circleSRC = "/img/circle.webp"
	const ribbonContent = <>
  <span>Free Inspections & Estimates</span>
  <img src={circleSRC} aria-hidden />
  <span>Same-Day Service</span>
  <img src={circleSRC} aria-hidden />
  <span>QualityPro Certified Technicians</span>
  <img src={circleSRC} aria-hidden />
  <span>Offering Protection from All Pests</span>
  <img src={circleSRC} aria-hidden />
  <span>Licensed & Insured</span>
  <img src={circleSRC} aria-hidden />
  </>;
	 return(
	 	 <>
			<PageTitle pageTitle="Pest Control" />
			<PestControlTitle />
			<InfiniteRibbonPest content={ribbonContent} />
			<PestControl />
			<ServiceArea />
			<Affiliates />
	 	 </>
	 )
}