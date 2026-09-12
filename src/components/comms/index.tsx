"use client";
import type { Page } from "@/lib/types";
import { CommsProvider } from "./context";
import { MessagesPage } from "./messages-page";
import { NoticesPage } from "./notices-page";
export function CommsArea({ page }: { page: Page }) { return <CommsProvider>{page === "notices" ? <NoticesPage /> : <MessagesPage />}</CommsProvider>; }
