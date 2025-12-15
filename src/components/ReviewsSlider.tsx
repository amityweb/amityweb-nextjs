'use client';

import { useState, useEffect } from 'react';

/*----------------------------------------
Google Reviews data structure
----------------------------------------*/
interface Review
{
    id: number;
    author: string;
    rating: number;
    text: string;
    date: string;
}

/*----------------------------------------
Sample reviews from your Google Reviews
Replace with actual Google Reviews API integration or static data
----------------------------------------*/
const reviews: Review[] = [
    {
        id: 1,
        author: "Compound Security",
        rating: 5,
        text: "We are the inventors of 'the Mosquito Anti-Loitering Device' which we sell worldwide via our website. Since moving to Amity Web Solutions over 10 years ago we have experienced a relationship and understanding of our business from their team that we had never experienced before. Nothing is too much trouble.",
        date: "2024"
    },
    {
        id: 2,
        author: "Sarah M",
        rating: 5,
        text: "This is my first website and on recommendation I contacted Amity Web Solutions. Laurence and the team were very approachable and made the entire process easy and user friendly. I am over the moon with the end results, my website is fantastic!",
        date: "2024"
    },
    {
        id: 3,
        author: "David R",
        rating: 5,
        text: "Amity Web did a great job designing our website, very pleased with the end result and ongoing support.",
        date: "2024"
    },
    {
        id: 4,
        author: "Welsh Costume Centre",
        rating: 5,
        text: "Amity have been our trusted web solutions partner for over 15 years. During this time, we have built a very strong relationship of understanding as our business has grown and evolved. Amity have helped us build 3 ecommerce websites during this time.",
        date: "2024"
    },
    {
        id: 5,
        author: "Mark T",
        rating: 5,
        text: "Amity Web Solutions have been brilliant! They deliver a great product when they say they will. Always on hand for help. Thoroughly recommend.",
        date: "2024"
    },
    {
        id: 6,
        author: "Janet W",
        rating: 5,
        text: "Amity Web Solutions have hosted my website since I started my business in 2005. They provide an extremely reliable and very prompt service. The ongoing assistance and support is exceptional.",
        date: "2024"
    },
    {
        id: 7,
        author: "Chris P",
        rating: 5,
        text: "Amity provide a huge amount of support and advice before our website development and the results have been above our expectations.",
        date: "2024"
    }
];

/*----------------------------------------
Star rating component
----------------------------------------*/
function StarRating({ rating }: { rating: number })
{
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
Reviews slider component with auto-scroll
----------------------------------------*/
export default function ReviewsSlider()
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    /* Auto-advance the slider */
    useEffect(() =>
    {
        if (!isAutoPlaying) return;

        const timer = setInterval(() =>
        {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) =>
    {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        /* Resume auto-play after 10 seconds of inactivity */
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrev = () =>
    {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () =>
    {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="relative">
            {/* Google Rating Header */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="text-center">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[var(--secondary)]">5.0</span>
                        <StarRating rating={5} />
                    </div>
                    <p className="text-sm text-[var(--muted)]">Based on Google Reviews</p>
                </div>
            </div>

            {/* Review Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-3xl">
                <div className="min-h-[200px] flex flex-col justify-between">
                    <div>
                        <StarRating rating={reviews[currentIndex].rating} />
                        <p className="mt-4 text-lg text-[var(--foreground)] italic">
                            &ldquo;{reviews[currentIndex].text}&rdquo;
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-[var(--secondary)]">
                                {reviews[currentIndex].author}
                            </p>
                            <p className="text-sm text-[var(--muted)]">
                                {reviews[currentIndex].date}
                            </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                            <span>Verified by Google</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
                aria-label="Previous review"
            >
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
                aria-label="Next review"
            >
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
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
