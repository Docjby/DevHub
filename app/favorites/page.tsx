"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { DevCardComponent } from "@/components/dev-card"
import { initialCards } from "@/lib/data/cards-data"
import { DevCard } from "@/lib/types/types"

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<DevCard[]>(() => {
        // Initialize state with saved favorites
        if (typeof window !== 'undefined') {
            const savedFavorites = localStorage.getItem("devHubFavorites")
            if (savedFavorites) {
                try {
                    const favoriteIds = JSON.parse(savedFavorites) as string[]
                    return initialCards.filter(card => favoriteIds.includes(card.id))
                } catch (error) {
                    console.error("Error loading favorites:", error)
                }
            }
        }
        return []
    })

    const toggleFavorite = (id: string) => {
        setFavorites(prevFavorites => {
            const updated = prevFavorites.filter(card => card.id !== id)
            const favoriteIds = updated.map(card => card.id)
            localStorage.setItem("devHubFavorites", JSON.stringify(favoriteIds))
            return updated
        })
    }

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <div className="px-4 py-12 md:px-8 lg:px-16 pt-32">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-outfit text-4xl font-bold text-gray-900 md:text-5xl mb-2">Your Favorites</h1>
                    <p className="font-inter text-gray-600 mb-12">
                        {favorites.length === 0
                            ? "No favorites yet. Start adding tools to your collection!"
                            : `You have ${favorites.length} favorite${favorites.length !== 1 ? "s" : ""}`}
                    </p>

                    {favorites.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {favorites.map((card) => (
                                <DevCardComponent key={card.id} card={card} onToggleFavorite={toggleFavorite} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-20"
                        >
                            <div className="text-center">
                                <p className="font-inter text-gray-500 mb-4">Start exploring and add your favorite tools!</p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </main>
    )
}