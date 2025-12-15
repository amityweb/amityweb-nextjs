'use client';

import { useState, useEffect } from 'react';

/*----------------------------------------
Review interface
----------------------------------------*/
interface Review
{
    id: number;
    author: string;
    rating: number;
    text: string;
    company?: string;
}

/*----------------------------------------
Sample reviews from Google Reviews
----------------------------------------*/
const reviews: Review[] = [
    {
        id: 1,
        author: "Howard Stapleton",
        company: "Compound Security",
        rating: 5,
        text: "We are the inventors of 'the Mosquito Anti-Loitering Device' which we sell worldwide via our website. Since moving to Amity Web Solutions over 10 years ago we have experienced a relationship and understanding of our business from their team that we had never experienced before. Nothing is too much trouble.",
    },
    {
        id: 2,
        author: "Sarah M",
        rating: 5,
        text: "This is my first website and on recommendation I contacted Amity Web Solutions. Laurence and the team were very approachable and made the entire process easy and user friendly. I am over the moon with the end results!",
    },
    {
        id: 3,
        author: "Welsh Costume Centre",
        rating: 5,
        text: "Amity have been our trusted web solutions partner for over 15 years. They have helped us build 3 ecommerce websites during this time. They've understood what we've wanted to achieve and enhanced features we wouldn't have thought of.",
    },
    {
        id: 4,
        author: "Mark T",
        rating: 5,
        text: "Amity Web Solutions have been brilliant! They deliver a great product when they say they will. Always on hand for help. Thoroughly recommend.",
    },
    {
        id: 5,
        author: "Janet W",
        rating: 5,
        text: "Amity Web Solutions have hosted my website since I started my business in 2005. They provide an extremely reliable and very prompt service. The ongoing assistance and support is exceptional.",
    },
];

/*----------------------------------------
Star rating component
----------------------------------------*/
function StarRating({ rating }: { rating: number })
{
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

/*----------------------------------------
Reviews slider component
----------------------------------------*/
export default function ReviewsSlider()
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() =>
    {
        if (!isAutoPlaying) return;

        const timer = setInterval(() =>
        {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) =>
    {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-3 mb-10">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">5.0</span>
                    <StarRating rating={5} />
                </div>
            </div>

            {/* Review Card */}
            <div className="bg-white border border-[var(--border)] rounded-2xl p-8 md:p-10 text-center">
                <StarRating rating={reviews[currentIndex].rating} />
                <p className="mt-6 text-lg text-[var(--foreground)] leading-relaxed">
                    &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
                <div className="mt-6">
                    <p className="font-semibold text-[var(--foreground)]">
                        {reviews[currentIndex].author}
                    </p>
                    {reviews[currentIndex].company && (
                        <p className="text-sm text-[var(--muted)]">
                            {reviews[currentIndex].company}
                        </p>
                    )}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                                ? 'bg-[var(--primary)] w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
