import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import PropertyMaintenance from "@/app/(mainsite)/components/propertymaintenancepage/CleaningServices/PropertyMaintenance"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Property Maintenance | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Property Maintenance | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
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

export default function PropertyMaintenancePage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Property Maintenance" />
			<PropertyMaintenance />
	 	 </>
	 )
}