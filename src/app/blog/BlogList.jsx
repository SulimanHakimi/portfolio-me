'use client';
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function BlogList({ blogs }) {
    return (
        <section className="min-h-screen bg-background bg-grid-pattern pt-32 pb-20 px-4 md:px-8 border-b border-black/10">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-4">
                        Insights & Thoughts
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase mb-6">
                        Latest <span className="text-accent">Articles</span>
                    </h1>
                    <div className="w-24 h-1 bg-accent mb-8"></div>
                </motion.div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative bg-white border border-black/10 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
                                        {item.category || 'Article'}
                                    </span>
                                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
                                        {item.date}
                                    </span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>

                            <h2 className="text-2xl font-bold uppercase leading-tight mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                {item.title}
                            </h2>

                            <div className="text-[10px] font-mono text-secondary/60 uppercase tracking-widest mb-4">
                                {item.readingTime}
                            </div>

                            <p className="text-secondary text-sm leading-relaxed line-clamp-3 mb-6">
                                {item.description}
                            </p>

                            <Link
                                href={`/blog/${item.slug}`}
                                className="absolute inset-0 z-10"
                            >
                                <span className="sr-only">Read {item.title}</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
