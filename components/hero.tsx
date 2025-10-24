"use client"

import { motion } from "framer-motion"
import { ContainerTextFlip } from "@/components/container-text-flip"

export function Hero() {
    const words = ["Libraries", "Frameworks", "AI Dev Tools"]

    return (
        < section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-16 pt-32 md:pt-52 md:pb-24 bg-linear-to-b from-indigo-100 via-purple-100 to-white" >

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-4xl text-center"
            >
                <h1 className="font-outfit text-balance text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                    Discover the Best Free
                    
                </h1>
                <h3 className="bg-linear-to-r mt-6 from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-flex items-center">
                    <ContainerTextFlip
                        words={words}
                        interval={2500}
                        animationDuration={800}
                        textClassName="text-purple-600 "
                    />
                </h3>

                <p className="font-inter mt-6 text-lg text-gray-600 md:text-xl">
                 Find resources that help you code faster, build smarter, and stay ahead in tech.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-16 flex flex-col items-center justify-center"
                >
                    {/* Mouse scroll icon */}
                    <div className="relative w-7 h-12 rounded-full border-2 border-purple-400 flex items-start justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                        <motion.div
                            animate={{ y: [2, 22, 2], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shadow-[0_0_6px_rgba(168,85,247,0.6)]"
                        />
                    </div>

                    {/* Glowing scroll text */}
                    <motion.p
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mt-4 text-sm font-medium text-purple-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                    >
                        Scroll down
                    </motion.p>
                </motion.div>


            </motion.div>

            {/* Floating blur background animations */}
            {/* Floating gradient blobs */}
            <motion.div
                className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-linear-to-br from-indigo-400 via-purple-400 to-fuchsia-500 opacity-30 blur-3xl mix-blend-multiply"
                animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
                className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-linear-to-tr from-pink-300 via-purple-400 to-indigo-400 opacity-30 blur-3xl mix-blend-multiply"
                animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-purple-300 via-indigo-200 to-transparent opacity-25 blur-[120px] mix-blend-overlay"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity }}
            />
            {/* Smooth bottom fade to white */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-white to-transparent" />

        </section>
    )
}
