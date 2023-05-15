export default function ScreenersSection() {
    return (
        <section className='font-Inter max-w-screen-xl mx-auto lg:px-8'>
            <p className="my-8 lg:my-4 text-center text-xl lg:text-3xl font-extrabold text-black">
                Powered by robust algorithms built by a highly experienced research team.
            </p>
            <div className="mx-4 p-[1px] rounded-3xl bg-gradient-to-br to-[#ABC7ED] from-[#F1F6F8]">
                <p className="mt-6 lg:mt-16 ml-4 lg:ml-8 text-base lg:text-3xl font-semibold text-primary">
                    Popular screeners
                </p>
                <div className="h-[312px] lg:h-[232px]" />
                <p className="mb-11 text-center text-sm lg:text-xl font-semibold text-black">
                    <span className="text-aap-red font-extrabold">New</span> screeners added every month
                </p>
            </div>
        </section>
    )
}
