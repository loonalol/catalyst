'use client';
import { Home, Cog, ChevronLeft } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="sidebar px-4 py-4 min-h-full shadow-xl dark:bg-zinc-950 overflow-y-auto relative flex w-60 flex-col">
            <div className="absolute top-4 right-4">
                <ChevronLeft />
            </div>
            <div className="pt-8">
                <button className="flex items-center text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-zinc-900">
                    <Home className="mr-2 h-4 w-4" /> Home
                </button>
                <button className="flex items-center text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-zinc-900">
                    <Cog className="mr-2 h-4 w-4" /> Settings
                </button>
            </div>
        </div>
    );
}
