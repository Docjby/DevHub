"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
    const pathname = usePathname()

    const navItems = [
        { label: "Tools", href: "/" },
        { label: "Favorites", href: "/favorites" },
    ]

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex  items-center gap-24 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-6 md:px-16 py-3 shadow-lg"
        >
            <Link href="/" className="font-outfit font-bold text-lg text-gray-900 over">
                DevHub
            </Link>

            <div className="flex items-center gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="relative font-inter text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        {item.label}
                        {pathname === item.href && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                ))}
            </div>
        </motion.nav>
    )
}
