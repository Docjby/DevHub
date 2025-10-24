"use client"

import { motion } from "framer-motion"

interface FilterSidebarProps {
    categories: string[]
    selectedCategory: string
    onSelectCategory: (category: string) => void
}

export function FilterSidebar({ categories, selectedCategory, onSelectCategory }: FilterSidebarProps) {
    const filterOptions = ["All", ...categories]

    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-48 md:sticky md:top-24 md:h-fit"
        >
            <div className="rounded-lg border border-gray-200 bg-white p-4 md:p-6">
                <h3 className="font-outfit mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">Categories</h3>
                <nav className="flex flex-wrap gap-2 md:flex-col md:gap-0">
                    {filterOptions.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 md:w-full md:text-left ${selectedCategory === category
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </nav>
            </div>
        </motion.aside>
    )
}
