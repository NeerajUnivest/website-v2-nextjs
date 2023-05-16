import { motion } from "framer-motion";

function BlackButton({ text, onClick, className }) {
    return (
        <motion.button
            type="button"
            onTap={onClick}
            className={`select-none rounded-full font-Inter bg-black text-[#FFFFFF] ${className ?? 'px-6 lg:px-8 py-2 lg:py-4 text-sm lg:text-xl font-extrabold lg:font-semibold '}`}
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
            type="button"
            onTap={onClick}
            className={`select-none px-5 whitespace-nowrap py-2 rounded-lg font-Inter text-[12px] lg:text-sm border bg-white border-primary text-primary font-extrabold ${className ?? ''}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
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


export {
    ScreenerCategoryChip,
    IconBtn,
    BlackButton,
};