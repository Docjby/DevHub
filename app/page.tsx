"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { CategorySection } from "@/components/category-section"
import { Navbar } from "@/components/navbar"
import { FilterSidebar } from "@/components/filter-sidebar"
import { initialCards, categories } from "@/lib/data/cards-data"
import { DevCard } from "@/lib/types/types"
import { Footer } from "@/components/footer"

export default function Home() {
  const [cards, setCards] = useState<DevCard[]>(() => {
    // Initialize state with saved favorites
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem("devHubFavorites")
      if (savedFavorites) {
        try {
          const favoriteIds = JSON.parse(savedFavorites) as string[]
          return initialCards.map(card => ({
            ...card,
            isFavorite: favoriteIds.includes(card.id),
          }))
        } catch (error) {
          console.error("Error loading favorites:", error)
        }
      }
    }
    return initialCards
  })

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const toggleFavorite = (id: string) => {
    setCards(prevCards => {
      const updatedCards = prevCards.map(card =>
        card.id === id ? { ...card, isFavorite: !card.isFavorite } : card
      )

      // Save to localStorage
      const favoriteIds = updatedCards.filter(card => card.isFavorite).map(card => card.id)
      localStorage.setItem("devHubFavorites", JSON.stringify(favoriteIds))

      return updatedCards
    })
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <div className="px-4 py-12 md:px-8 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-8">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex-1">
            {selectedCategory === "All" ? (
              categories.map((category) => (
                <CategorySection
                  key={category}
                  category={category}
                  cards={cards.filter((card) => card.category === category)}
                  onToggleFavorite={toggleFavorite}
                />
              ))
            ) : (
              <CategorySection
                category={selectedCategory}
                cards={cards.filter((card) => card.category === selectedCategory)}
                onToggleFavorite={toggleFavorite}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}