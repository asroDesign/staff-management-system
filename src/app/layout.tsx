import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./talent.css";
import "./calendar.css";
import "./comms.css";
export const metadata: Metadata = { title: "آبان | سامانه مدیریت سرمایه انسانی", description: "پنل یکپارچه مدیریت کارکنان، مرخصی، امکانات رفاهی و حقوق و دستمزد پارک آبی آبان" };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="fa" dir="rtl"><body>{children}</body></html>; }
