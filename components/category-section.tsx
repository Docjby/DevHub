"use client"

import { motion } from "framer-motion"
import { CategorySectionProps } from "@/lib/types/types"
import { DevCardComponent } from "./dev-card"

export function CategorySection({ category, cards, onToggleFavorite }: CategorySectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    return (
        <section className="mb-16">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-outfit mb-8 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
            >
                {category}
            </motion.h2>

            <motion.div
                key={category}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {cards.map((card) => (
                    <DevCardComponent key={card.id} card={card} onToggleFavorite={onToggleFavorite} />
                ))}
            </motion.div>
        </section>
    )
}