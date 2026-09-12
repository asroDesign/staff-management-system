"use client";
import type { Page } from "@/lib/types";
import { TalentProvider } from "./context";
import { TalentForms } from "./forms";
import { TalentDetails } from "./details";
import { TalentHub, ResearchPage } from "./hub";
import { RecruitmentPage } from "./recruitment";
import { OnboardingPage, LearningPage } from "./development";
import { PulsePage, CompensationPage } from "./insights";
export function TalentArea({ page }: { page: Page }) { return <TalentProvider>{page === "recruitment" ? <RecruitmentPage /> : page === "onboarding" ? <OnboardingPage /> : page === "learning" ? <LearningPage /> : page === "pulse" ? <PulsePage /> : page === "compensation" ? <CompensationPage /> : page === "research" ? <ResearchPage /> : <TalentHub />}<TalentForms /><TalentDetails /></TalentProvider>; }
