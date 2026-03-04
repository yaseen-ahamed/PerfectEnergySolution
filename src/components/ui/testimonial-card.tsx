import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    rating?: number
    time?: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    rating = 5,
    time = "6 months ago",
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "flex flex-col rounded-2xl border border-borderGrey shadow-sm",
                "bg-white",
                "p-6 text-start sm:p-8",
                "hover:shadow-md",
                "w-[320px] max-w-full sm:w-[380px] shrink-0",
                "transition-all duration-300",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start gap-1">
                    <h3 className="text-base font-bold text-textDark leading-none">
                        {author.name}
                    </h3>
                    <p className="text-sm font-medium text-textDark/60">
                        {author.handle}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={cn("w-5 h-5", i < rating ? "text-yellow-400" : "text-gray-300")}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <span className="text-sm font-medium text-textDark/50 ml-2">{time}</span>
            </div>

            <p className="mt-4 text-base font-medium text-textDark/80 leading-relaxed italic">
                "{text}"
            </p>
        </Card>
    )
}
