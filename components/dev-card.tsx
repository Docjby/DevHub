"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUpRight } from "lucide-react"
import { DevCard } from "@/lib/types/types";
import Image from "next/image"

interface DevCardComponentProps {
    card: DevCard
    onToggleFavorite: (id: string) => void
}

export function DevCardComponent({ card, onToggleFavorite }: DevCardComponentProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    const handleVisit = () => {
        window.open(card.url, "_blank", "noopener,noreferrer")
    }

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100"
        >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 flex items-start justify-between gap-3">
                    {/* Circular image */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-indigo-200 flex items-center justify-center overflow-hidden p-2">
                        <Image
                            src={card.imageUrl}
                            alt={`${card.name} logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Favorite button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onToggleFavorite(card.id)}
                        className="ml-auto shrink-0 rounded-lg p-2 transition-colors hover:bg-indigo-50"
                        aria-label={card.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart
                            size={18}
                            className={`transition-all duration-200 ${card.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
                                }`}
                        />
                    </motion.button>
                </div>

                {/* Title and description */}
                <div className="mb-4">
                    <h3 className="font-outfit text-lg font-semibold text-gray-900">{card.name}</h3>
                    <p className="font-inter mt-1 text-sm text-gray-600">{card.description}</p>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Visit button */}
                <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleVisit}
                    className="font-inter inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition-all duration-200 hover:bg-indigo-100"
                >
                    Visit
                    <ArrowUpRight size={16} />
                </motion.button>
            </div>
        </motion.div>
    )
}