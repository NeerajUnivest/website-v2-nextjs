import { BlackButton } from "@/elements/Button/Button";
import results_background from '../../assets/images/results_background.webp';
import declared_results from '../../assets/images/declared_results.webp';
import Image from "next/image";

export default function ResultsSection() {
    return (
        <section id="Results" className='my-16 lg:my-4 font-Inter'>
            <div className="py-0 lg:py-10 max-w-screen-xl mx-auto lg:px-8 h-[500px] lg:h-[666px] w-full bg-no-repeat bg-center bg-cover flex flex-col justify-between" style={{ backgroundImage: `url(${results_background.src})` }} >
                <p className="text-center text-2xl lg:text-3xl font-semibold text-[#414141]">
                    Stay updated on the <br className="lg:hidden" />
                    <span className="text-[#0862BC] font-extrabold">Upcoming & Declared</span>
                    <br className="lg:hidden" /> results in your demat
                </p>
                <Image
                    placeholder="blur"
                    src={declared_results}
                    className='h-[280px] lg:h-[400px] object-contain mx-auto'
                    alt='demo image'
                />
                {/* TODO */}
                <div className="w-full flex justify-center">
                    <BlackButton text='View latest results' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' onClick={() => null} />
                </div>
            </div>
        </section>
    )
}
