import type { ReactNode } from "react";

type HorizontalScrollerProps = {
    children: ReactNode;
    gapClassName?: string;
    ariaLabel?: string;
};

function HorizontalScroller({ children, gapClassName = "gap-6", ariaLabel }: HorizontalScrollerProps) {
    return (
        <div className="relative mask-fade-x">
            <div
                className={`flex items-stretch overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth ${gapClassName}`}
                role="list"
                aria-label={ariaLabel}
                tabIndex={0}
            >
                {children}
            </div>
        </div>
    );
}

export default HorizontalScroller;