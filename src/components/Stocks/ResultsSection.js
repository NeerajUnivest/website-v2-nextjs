import { BlackButton } from "@/elements/Button/Button";
import results_background from '../../assets/images/results_background.png';
export default function ResultsSection() {
    return (
        <section className='my-16 font-Inter'>
            <div className="max-w-screen-xl mx-auto lg:px-8">
                <p className="text-center text-2xl lg:text-3xl font-semibold text-[#414141]">
                    Stay updated on the <br className="lg:hidden" />
                    <span className="text-[#0862BC] font-extrabold">Upcoming & Declared</span>
                    <br className="lg:hidden" /> results in your demat
                </p>
                <div className="h-[500px] lg:[h-600px] w-full bg-no-repeat bg-center bg-cover flex items-end justify-center" style={{ backgroundImage: `url(${results_background.src})` }} >

                    {/* TODO */}
                    <BlackButton text='View latest results' className='mb-4 px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' onClick={() => null} />
                </div>
            </div>
        </section>
    )
}
