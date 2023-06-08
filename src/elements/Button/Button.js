import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

function BlackButton({ text, onClick, className }) {
    return (
        <motion.button
            type="button"
            onTap={onClick}
            className={`select-none rounded-full font-Inter bg-black text-[#FFFFFF] shadow-md border lg:border-2 border-white ${className ?? 'px-6 lg:px-8 py-2 lg:py-4 text-sm lg:text-xl font-extrabold lg:font-semibold '}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {text}
        </motion.button>
    );
}

function ScreenerCategoryChip({ text, onClick, className }) {
    return (
        <motion.button
            onTap={onClick}
            className={`select-none px-4 whitespace-nowrap py-2 rounded-lg font-Inter text-[12px] lg:text-sm border bg-white border-primary text-primary font-extrabold shadow-md ${className ?? ''}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {text}
        </motion.button>
    );
}

function NewsCategoryChip({ text, onClick, icon }) {
    return (
        <motion.button
            onTap={onClick}
            className={`select-none px-5 flex items-center py-2 rounded-full font-Inter text-[12px] lg:text-sm border bg-white border-primary text-black font-semibold shadow`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Image src={icon} className='mr-2 h-[20px] w-[20px]' width={20} height={20} alt='icon' />
            {text}
        </motion.button>
    );
}

function IconBtn(props) {
    return (
        <motion.button
            className={props.className}
            onTap={() => setTimeout(() => props.onClick(), 150)}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {props.children}
        </motion.button>
    );
}

function ResultButton({ active, text, onClick, className }) {
    return (
        <motion.button
            type="button"
            onTap={onClick}
            className={`select-none px-4 py-1 text-xs rounded-full font-Inter text-[#FFFFFF] shadow-md border lg:border-2  ${active ? 'text-white bg-[#1684FD] border-white' : ' text-black bg-white border-[#F5F5F5]'} ${className}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {text}
        </motion.button>
    );
}

function ExploreMore({ onClick, className }) {
    return (
        <motion.button
            type="button"
            onTap={onClick}
            className={`flex items-center text-sm lg:text-base font-semibold text-black border-2 border-black rounded-full px-6 py-2 ${className}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            Explore more
            <HiArrowRight size={16} className='ml-2' />
        </motion.button>
    );
}
export {
    NewsCategoryChip,
    ScreenerCategoryChip,
    IconBtn,
    BlackButton,
    ResultButton,
    ExploreMore,
};