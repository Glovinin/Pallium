"use client";

import { usePathname } from "next/navigation";
import { Chatbot } from "@/components/chat/Chatbot";
import { useIntro } from "@/context/IntroContext";

export function ChatbotWrapper() {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    // Intro context
    const { isIntroComplete, shouldRunIntro } = useIntro();
    const isHidden = shouldRunIntro && !isIntroComplete;

    if (isLoginPage || isHidden) return null;

    return <Chatbot />;
}
