
import Image from "next/image";

export interface TeamMember {
    name: string;
    role: string;
    email: string;
    bio: string;
    initial: string;
    image?: string;
}

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
    return (
        <div className="group flex flex-col items-center text-center w-full">
            {/* Image Container - Refined size & Frame effect */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] mb-10">
                {/* Decorative Frame Border */}
                <div className="absolute -inset-4 border border-[#810E47]/10 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-95 group-hover:scale-100" />

                <div className="relative w-full h-full overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
                    {member.image ? (
                        <>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 400px"
                                priority={index < 4}
                            />
                            {/* Inner border for definition */}
                            <div className="absolute inset-0 border border-black/5 pointer-events-none z-20" />

                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                        </>
                    ) : (
                        <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden group-hover:bg-[#810E47] transition-colors duration-700">
                            <div className="relative z-10">
                                <span className="font-[var(--font-playfair)] text-7xl text-white font-medium block">
                                    {member.initial}
                                </span>
                            </div>
                            {/* Decorative Background Letter */}
                            <span className="font-[var(--font-playfair)] text-[12rem] text-white/5 font-black absolute -bottom-16 -right-10 leading-none select-none transition-transform duration-700 group-hover:scale-110">
                                {member.initial.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section - Minimalist Centered */}
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                <div className="flex flex-col items-center gap-3">
                    <p className="text-[#810E47] text-[10px] font-bold uppercase tracking-[0.25em] bg-[#810E47]/5 px-3 py-1 rounded-full">
                        {member.role}
                    </p>

                    <h3 className="text-3xl font-[var(--font-playfair)] text-neutral-900 leading-tight font-medium group-hover:text-[#810E47] transition-colors duration-500">
                        {member.name}
                    </h3>
                </div>

                <div className="w-12 h-px bg-neutral-200 my-2 group-hover:w-24 group-hover:bg-[#810E47]/30 transition-all duration-700" />

                <p className="text-neutral-500 text-sm leading-relaxed font-light text-center line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {member.bio}
                </p>

                <div className="pt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 group/link hover:bg-neutral-50 px-4 py-2 rounded-full transition-colors duration-300"
                    >
                        <span className="text-neutral-400 group-hover/link:text-[#810E47] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </span>
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest group-hover/link:text-neutral-900 transition-colors duration-300">
                            Email
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
