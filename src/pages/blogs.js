import Loading from "@/elements/Loading/Loading"
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

    return (<Loading />)
}
