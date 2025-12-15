'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

/*----------------------------------------
Review interface
----------------------------------------*/
interface Review
{
    id: number;
    author: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
    avatarBgColor?: string;
}

/*----------------------------------------
Sample reviews from Google Reviews
----------------------------------------*/
const reviews: Review[] = [
    {
        id: 1,
        author: "Howard Stapleton",
        date: "15/03/2023",
        rating: 5,
        text: "We are the inventors of 'the Mosquito Anti-Loitering Device' which we sell worldwide via our website. Since moving to Amity Web Solutions over 10 years ago we have experienced a relationship and understanding of our business from their team that we had never experienced before.",
        avatarBgColor: "bg-blue-600",
    },
    {
        id: 2,
        author: "Sarah M",
        date: "12/01/2024",
        rating: 5,
        text: "This is my first website and on recommendation I contacted Amity Web Solutions. Laurence and the team were very approachable and made the entire process easy and user friendly. I am over the moon with the end results!",
        avatarBgColor: "bg-purple-500",
    },
    {
        id: 3,
        author: "Welsh Costume Centre",
        date: "08/11/2023",
        rating: 5,
        text: "Amity have been our trusted web solutions partner for over 15 years. They have helped us build 3 ecommerce websites during this time. They've understood what we've wanted to achieve and enhanced features we wouldn't have thought of.",
        avatarBgColor: "bg-teal-500",
    },
    {
        id: 4,
        author: "Matthew Cope",
        date: "27/02/2022",
        rating: 5,
        text: "Amity Web Solutions have been brilliant! They deliver a great product when they say they will. Always on hand for help. Thoroughly recommend.",
        avatarBgColor: "bg-amber-700",
    },
    {
        id: 5,
        author: "Jenny Bowen",
        date: "25/02/2022",
        rating: 5,
        text: "Amity Web Solutions have hosted my website since I started my business in 2005. They provide an extremely reliable and very prompt service. Since then they have built my new website which I am over the moon with. The ongoing assistance and support is exceptional.",
        avatarBgColor: "bg-amber-600",
    },
    {
        id: 6,
        author: "Dragan Mladenovic",
        date: "24/02/2022",
        rating: 5,
        text: "Amity provide a huge amount to support and advice before our website development and the results have been above our expectations. Amity offer a professional, friendly and quick response to any questions or queries we may have.",
        avatarBgColor: "bg-green-700",
    },
    {
        id: 7,
        author: "Callum Pethick",
        date: "28/02/2022",
        rating: 5,
        text: "Great to work with Amity Web on the redevelopment of our entire website. Laurence and Kiran are both extremely efficient, friendly and all round a great team to work with.",
        avatarBgColor: "bg-sky-500",
    },
    {
        id: 8,
        author: "Craig Maybank",
        date: "10/06/2021",
        rating: 5,
        text: "As a self employed musician I needed a website to showcase my work. Amity Web Solutions designed and built a fantastic website for me. They were professional, friendly and the end result was exactly what I wanted.",
        avatarBgColor: "bg-red-500",
    },
];

const TOTAL_REVIEWS = 22;

/*----------------------------------------
Star rating component - larger golden stars
----------------------------------------*/
function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' })
{
    const sizeClass = size === 'lg' ? 'w-8 h-8' : 'w-4 h-4';
    
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`${sizeClass} ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
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
Verified badge component (blue tick)
----------------------------------------*/
function VerifiedBadge()
{
    return (
        <svg className="w-4 h-4 text-blue-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );
}

/*----------------------------------------
Google icon (small G)
----------------------------------------*/
function GoogleIcon()
{
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
    );
}

/*----------------------------------------
Avatar component - shows initial or image
----------------------------------------*/
function Avatar({ name, avatar, bgColor }: { name: string; avatar?: string; bgColor?: string })
{
    /* Get first initial */
    const initial = name.charAt(0).toUpperCase();
    
    /* Default color if none provided */
    const bg = bgColor || 'bg-gray-500';
    
    if (avatar)
    {
        return (
            <img 
                src={avatar} 
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
            />
        );
    }
    
    return (
        <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-white font-semibold text-lg`}>
            {initial}
        </div>
    );
}


/*----------------------------------------
Individual review card component
Matches Google reviews style
----------------------------------------*/
function ReviewCard({ review }: { review: Review })
{
    const [expanded, setExpanded] = useState(false);
    const maxLength = 200;
    const isLong = review.text.length > maxLength;
    const displayText = expanded || !isLong ? review.text : review.text.slice(0, maxLength) + '...';

    return (
        <div className="bg-white border border-[var(--border)] rounded-xl p-6 h-full flex flex-col shadow-sm">
            {/* Header: Avatar, Name, Date, Google icon */}
            <div className="flex items-start gap-3 mb-3">
                <Avatar name={review.author} avatar={review.avatar} bgColor={review.avatarBgColor} />
                <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-[var(--foreground)] truncate">
                            {review.author}
                        </p>
                        <GoogleIcon />
                    </div>
                    <p className="text-sm text-[var(--muted)]">
                        {review.date}
                    </p>
                </div>
            </div>

            {/* Star rating with verified badge */}
            <div className="flex items-center mb-3">
                <StarRating rating={review.rating} />
                <VerifiedBadge />
            </div>

            {/* Review text */}
            <p className="text-[var(--foreground)] leading-relaxed flex-grow text-sm">
                {displayText}
            </p>

            {/* Read more link */}
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-[var(--muted)] hover:text-[var(--primary)] text-sm mt-2 text-left transition-colors"
                >
                    {expanded ? 'Show less' : 'Read more'}
                </button>
            )}
        </div>
    );
}

/*----------------------------------------
Google logo component (large)
----------------------------------------*/
function GoogleLogo()
{
    return (
        <svg className="h-10" viewBox="0 0 272 92">
            <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
            <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
            <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
            <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
        </svg>
    );
}


/*----------------------------------------
Reviews slider component using Swiper
Styled to match Google reviews widget
----------------------------------------*/
export default function ReviewsSlider()
{
    return (
        <div className="reviews-slider">
            {/* Header: EXCELLENT, Stars, Based on X reviews, Google logo */}
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-wide mb-3">
                    EXCELLENT
                </h3>
                <div className="flex justify-center mb-2">
                    <StarRating rating={5} size="lg" />
                </div>
                <p className="text-sm text-[var(--muted)] mb-4">
                    Based on <span className="font-semibold">{TOTAL_REVIEWS} reviews</span>
                </p>
                <div className="flex justify-center">
                    <GoogleLogo />
                </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="pb-12"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="h-auto">
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
