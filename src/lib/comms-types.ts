export interface Contact { userId: string; employeeId: string | null; name: string; role: string; department: string; avatar: string; lastMessageAt: string | null; lastMessageBody: string; lastMessageMine: boolean; unreadCount: number }
export interface ChatMessage { id: string; senderId: string; recipientId: string; body: string; attachment: string; createdAt: string; readAt: string | null }
export interface Notice { id: string; title: string; body: string; image: string; createdBy: string; createdAt: string; readAt: string | null; readCount: number; audienceCount: number }
export interface NoticeReader { userId: string; name: string; role: string; department: string; readAt: string | null }
export interface CommsData { contacts: Contact[]; messages: ChatMessage[]; notices: Notice[]; canBroadcast: boolean; unreadMessages: number; unreadNotices: number }
export const roleShortLabels: Record<string, string> = { admin: "مدیر سیستم", manager: "مدیر واحد", finance: "واحد مالی", employee: "همکار" };
