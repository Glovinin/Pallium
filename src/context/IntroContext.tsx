"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type IntroContextType = {
    isIntroComplete: boolean;
    setIntroComplete: (value: boolean) => void;
    shouldRunIntro: boolean;
};

const IntroContext = createContext<IntroContextType>({
    isIntroComplete: true,
    setIntroComplete: () => { },
    shouldRunIntro: false,
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
    const [isIntroComplete, setIsIntroComplete] = useState(false);
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    // Only run intro on homepage and if it hasn't finished yet
    // In a real app we might want to use sessionStorage to only show it once per session
    // For now we'll reset it on homepage reload or show it every time user lands on home
    const shouldRunIntro = isHomepage && !isIntroComplete;

    useEffect(() => {
        // If not on homepage, intro is considered "complete" immediately
        if (!isHomepage) {
            // eslint-disable-next-line
            setIsIntroComplete(true);
        }
    }, [isHomepage]);

    // Lock body scroll during intro
    useEffect(() => {
        if (shouldRunIntro && !isIntroComplete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [shouldRunIntro, isIntroComplete]);

    return (
        <IntroContext.Provider value={{ isIntroComplete, setIntroComplete: setIsIntroComplete, shouldRunIntro }}>
            {children}
        </IntroContext.Provider>
    );
}

export const useIntro = () => useContext(IntroContext);
