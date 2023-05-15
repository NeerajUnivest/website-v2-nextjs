
const Tooltip = ({
    title, message, children
}) => {
    return (
        <div className="self-center hidden relative lg:flex flex-col items-center group ">
            {children}
            <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                <div className="max-w-[448px] min-w-[448px] relative z-10 p-4  bg-[#EFF6FF] shadow rounded-md font-medium font-Inter text-[12px] leading-[18px]">
                    <div className='mb-2'>{title}</div>
                    <div className='text-[#8E8E93]'>
                        {message}
                    </div>
                </div>
                <div className="z-10 w-4 h-4 -mt-2 rotate-45 bg-[#EFF6FF] shadow-sm"></div>
            </div>
        </div>
    );
};
export default Tooltip;