import MetaSection from "@/elements/MetaSection/MetaSection"
import { Mixpanel } from "@/elements/Mixpanel"
import Link from "next/link"
import { useEffect } from "react"

export default function PageNotFound() {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': '404',
            }
        )
    }, [])
    return (
        <section className='font-Inter max-w-screen-xl h-[70vh] mx-auto lg:px-8 bg-[#FFFFFF] flex justify-center'>
            <MetaSection />
            <div className="self-center flex flex-col">
                <div className=" text-slate-300 text-xl lg:text-4xl font-semibold text-center mb-2">Un Oh! 404</div>
                <div className=" text-slate-400 text-2xl lg:text-5xl font-semibold">Page not found</div><br />
                <Link href='/' className=" text-primary text-sm lg:text-lg text-center font-semibold cursor-pointer">Go to Home Page</Link>
            </div>
        </section>
    )
}
