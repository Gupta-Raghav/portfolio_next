"use client"

import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import { motion, useMotionValue } from "framer-motion"

export default function HonestHero() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext)
    const [cursorPosition, setCursorPosition] = useState<any>({ x: 1000, y: 1000 })
    useEffect(() => {
        const moveCursor2 = (e: any) => {
            setCursorPosition({
                x: e.clientX - 0.5 * window.innerWidth,
                y: e.clientY - 0.5 * window.innerHeight,
            });
        }
        window.addEventListener('mousemove', moveCursor2)
        return () => {
            window.removeEventListener('mousemove', moveCursor2)
        }

    }, [])
    const variants = {
        hovered: {
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        },
        default: {
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        }
    }

    return (
        <motion.div className="w-full h-screen bg flex items-center justify-center absolute top-0 left-0 z-10 mask2"
            style={{
                maskPosition: `${cursorPosition.x}px ${cursorPosition.y}px`,
                WebkitMaskPositionX: cursorPosition.x,
                WebkitMaskPositionY: cursorPosition.y,
                // Rest of the styles
            }}
            animate={cursorType == "hovered" ? "hovered" : "default"}
            variants={variants}
        >
                <div className='flex flex-col items-center w-fit' onMouseEnter={() => setCursorType("hovered")}
                        onMouseLeave={() => setCursorType("default")}
                >
                <p className='text-xl sm:text-2xl mb-4 dark:opacity-80 uppercase font-extralight'>Raghav Gupta</p>
                <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>Debugging </h1>
                <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold text-highlightColor'>code</h1>
                <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold text-highlightColor'>glitches</h1>
                <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>since</h1>
                <h1 className='text-6xl sm:text-7xl dark:opacity-80 uppercase font-semibold'>2020</h1>
                </div>
        </motion.div>
    )
}