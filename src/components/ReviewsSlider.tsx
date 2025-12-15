'use client';

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
        text: "We are the inventors of 'the Mosquito Anti-Loitering Device' which we sell worldwide via our website. Since moving to Amity Web Solutions over 10 years ago we have experienced a relationship and understanding of our business from their team that we had never experienced before.",
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
    {
        id: 6,
        author: "David R",
        rating: 5,
        text: "Great job on our new website. The team at Amity Web Solutions were professional, responsive and delivered exactly what we needed. Ongoing support has been fantastic.",
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
Individual review card component
----------------------------------------*/
function ReviewCard({ review }: { review: Review })
{
    return (
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full flex flex-col">
            <StarRating rating={review.rating} />
            <p className="mt-4 text-[var(--foreground)] leading-relaxed flex-grow">
                &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <p className="font-semibold text-[var(--foreground)]">
                    {review.author}
                </p>
                {review.company && (
                    <p className="text-sm text-[var(--muted)]">
                        {review.company}
                    </p>
                )}
            </div>
        </div>
    );
}

/*----------------------------------------
Reviews slider component using Swiper
----------------------------------------*/
export default function ReviewsSlider()
{
    return (
        <div className="reviews-slider">
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

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
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
                    },
                    1024: {
                        slidesPerView: 3,
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
