import { useEffect } from "react"
// import { useRouter } from 'next/router';

export default function Blogs() {
    // const router = useRouter();
    useEffect(() => {
        let time = setTimeout(() => {
            // router.replace('https://univest.in/blogs')
            window.location.replace('https://univest.in/blogs')
        }, 500)

        return () => clearTimeout(time)
    }, [])

    return (
        <section className='font-Inter max-w-screen-xl h-[70vh] mx-auto lg:px-8 bg-[#FFFFFF] flex justify-center'>
            <div className='self-center h-10 w-10 border-e-4 lg:h-20 lg:w-20 lg:border-e-8 border-[#00439D] animate-spin rounded-full' />
        </section>
    )
}
