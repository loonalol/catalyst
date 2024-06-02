import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

export default function Header() {
    return(
<div className="flex flex-row h-[8vh] px-8 py-2 shadow-xl dark bg-inhert overflow-y-auto relative min-w-full z-[9999]">
    <div className="flex gap-1">
    <LucideArrowLeft />
    <LucideArrowRight />
</div>
    <h1 className="pl-4">Unknown</h1>
</div>

    );
}