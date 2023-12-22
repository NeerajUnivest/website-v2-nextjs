import Loading from "@/elements/Loading/Loading";
import MetaSection from "@/elements/MetaSection/MetaSection"
import { Mixpanel } from "@/elements/Mixpanel"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function PageNotFound() {
    const location = usePathname();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (location.includes('/stocks') || location.includes('/screeners')) {
            Mixpanel.pageView(
                {
                    'page': '404',
                }
            )
        } else {
            window.open(`https://univest.in/blogs${location}`, '_self')
        }
        setTimeout(() => setLoading(false), 200);
    }, [])
    return (
        <section className='font-Inter max-w-screen-xl h-[70vh] mx-auto lg:px-8 bg-[#FFFFFF] flex justify-center'>
            <MetaSection />
            {loading ?
                <Loading />
                : <div className="self-center flex flex-col">
                    <div className=" text-slate-300 text-xl lg:text-4xl font-semibold text-center mb-2">Un Oh! 404</div>
                    <div className=" text-slate-400 text-2xl lg:text-5xl font-semibold">Page not found</div><br />
                    <Link href='/' className=" text-primary text-sm lg:text-lg text-center font-semibold cursor-pointer">Go to Home Page</Link>
                </div>}
        </section>
    )
}
