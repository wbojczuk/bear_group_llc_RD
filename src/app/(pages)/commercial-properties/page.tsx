import CommercialProperties from "@/app/(mainsite)/components/commercialpropertiespage/CommercialProperties/CommercialProperties"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Commercial Properties | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Commercial Properties | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
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

export default function CommercialPropertiesPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Commercial Properties" />
			<CommercialProperties />
	 	 </>
	 )
}