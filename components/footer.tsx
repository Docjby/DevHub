"use client";

import React from "react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-gray-200 bg-linear-to-b from-white via-purple-50/40 to-transparent py-6 mt-24">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-600 font-inter">
                    © {year} — Inspired and developed by{" "}
                    <span className="font-semibold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                       JB
                    </span>
                </p>
            </div>
        </footer>
    );
}
