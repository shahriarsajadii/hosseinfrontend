import { motion } from "framer-motion"

const variants = {
    left: {
        hidden: { opacity: 0, x: -300 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0 },
    },
    bottom: {
        hidden: { opacity: 0, y: 120 },
        visible: { opacity: 1, y: 0 },
    },
}

export default function AnimatedSection({
    children,
    direction = "bottom",
}) {
    return (
        <motion.section
            variants={variants[direction]}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.35
            }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 16,
            }}
        >
            {children}
        </motion.section>
    )
}
