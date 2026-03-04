import { cn } from "../../lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "../ui/testimonial-card"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
    title: string
    description?: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
        time?: string
    }>
    reviewLink?: string
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    reviewLink,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-background text-textDark",
            "py-16 sm:py-24 px-0 overflow-hidden relative",
            className
        )}>
            <div className="mx-auto flex w-full flex-col items-center gap-10 sm:gap-14">
                <div className="flex flex-col items-center gap-6 px-4 text-center">
                    <h2 className="max-w-[800px] text-3xl font-heading font-extrabold sm:text-5xl text-textDark">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-lg max-w-[600px] font-sans text-textDark/70">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative flex w-full flex-col items-center justify-center">
                    <div className="group flex overflow-hidden w-full gap-6 flex-row">
                        {/* Track 1 */}
                        <div
                            className="flex shrink-0 gap-6 animate-marquee flex-row group-hover:[animation-play-state:paused]"
                            style={{ animationDuration: '30s' }}
                        >
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`a-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        {/* Track 2 (duplicate for seamless loop) */}
                        <div
                            className="flex shrink-0 gap-6 animate-marquee flex-row group-hover:[animation-play-state:paused]"
                            style={{ animationDuration: '30s' }}
                            aria-hidden="true"
                        >
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`b-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
                </div>

                {reviewLink && (
                    <a
                        href={reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.3)] transition-all transform hover:-translate-y-1"
                    >
                        <Star className="w-5 h-5 fill-current" />
                        Leave Us a Review on Google
                    </a>
                )}
            </div>
        </section>
    )
}
