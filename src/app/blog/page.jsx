
import React from 'react'
import { blogs } from './data'
import BlogList from './BlogList'

export const metadata = {
    title: 'Insights & Thoughts | Suliman Hakimi',
    description: 'Explore a curated collection of articles on modern web development, SEO strategies, design trends, and premium lifestyle product reviews.',
    keywords: ['Web Development', 'SEO', 'Design', 'Next.js', 'React', 'Premium Lifestyle'],
    openGraph: {
        title: 'Insights & Thoughts | Suliman Hakimi',
        description: 'Explore a curated collection of articles on modern web development, SEO strategies, design trends, and premium lifestyle product reviews.',
        type: 'website',
        siteName: 'Suliman Hakimi Portfolio',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Insights & Thoughts | Suliman Hakimi',
        description: 'Explore a curated collection of articles on modern web development, SEO strategies, design trends, and premium lifestyle product reviews.',
    },
}

export default function Page() {
    return <BlogList blogs={blogs} />
}