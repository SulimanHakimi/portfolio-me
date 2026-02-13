
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { blogs } from '../data'

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        return {
            title: 'Blog Not Found',
        }
    }

    return {
        title: `${blog.title} | Suliman Hakimi`,
        description: blog.description,
        keywords: blog.keywords,
        authors: [{ name: blog.author }],
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: 'article',
            publishedTime: blog.date,
            authors: [blog.author],
            url: `https://sulimanhakimi.com/blog/${blog.slug}`,
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            siteName: 'Suliman Hakimi Portfolio',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.description,
            images: [blog.image],
            creator: '@sulimanhakimi', // Placeholder or dynamic if available
        },
        alternates: {
            canonical: `https://sulimanhakimi.com/blog/${blog.slug}`,
        }
    }
}

export default async function BlogPost({ params }) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        notFound()
    }

    // JSON-LD for Search Engine Rich Snippets
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        image: blog.image,
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
            '@type': 'Person',
            name: blog.author,
            url: 'https://sulimanhakimi.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Suliman Hakimi',
            url: 'https://sulimanhakimi.com'
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://sulimanhakimi.com/blog/${blog.slug}`
        }
    }

    return (
        <article className="min-h-screen bg-background bg-grid-pattern pt-32 pb-20 px-4 md:px-8 border-b border-black/10">
            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-accent mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Articles
                </Link>

                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono uppercase tracking-widest text-secondary">
                        {blog.category && (
                            <>
                                <span className="text-accent font-bold">{blog.category}</span>
                                <span className="text-black/20">•</span>
                            </>
                        )}
                        {blog.readingTime && (
                            <>
                                <span>{blog.readingTime}</span>
                                <span className="text-black/20">•</span>
                            </>
                        )}
                        <time dateTime={blog.date} className="text-black">{blog.date}</time>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-tight mb-6">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            {/* Placeholder for author avatar if available, otherwise generic */}
                            <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold text-black uppercase tracking-wide">By {blog.author}</span>
                    </div>
                </header>

                <div className="w-full h-px bg-black/10 mb-8"></div>

                <div className="aspect-video w-full relative overflow-hidden bg-gray-100 mb-12 border border-black/10 shadow-sm">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-p:text-secondary prose-a:text-accent prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-li:text-secondary">
                    <p className="text-xl text-black font-medium leading-relaxed mb-8 border-l-4 border-accent pl-6 italic">
                        {blog.description}
                    </p>
                    <div
                        className="text-base text-secondary leading-loose"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>

                {/* Keywords Tags */}
                {blog.keywords && blog.keywords.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-black/10">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-secondary mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {blog.keywords.map(keyword => (
                                <span key={keyword} className="px-3 py-1 bg-gray-100 text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-default">
                                    #{keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}
