import { motion } from "framer-motion";

function BlackButton({ text, onClick, className }) {
    return (
        <motion.button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            onTap={onClick}
            className={`select-none px-6 lg:px-8 py-2 lg:py-4 rounded-full font-Inter text-sm lg:text-xl bg-black text-[#FFFFFF] font-extrabold lg:font-semibold ${className ?? ''}`}
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
    IconBtn,
    BlackButton,
};