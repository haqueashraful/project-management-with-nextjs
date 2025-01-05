import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical";
}

export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotSize = "2",
    gapSize = "6",
    direction = "horizontal",
}: DottedSeparatorProps) => {

    const isHorizontal = direction === "horizontal";
    return (
        <div
            className={cn(
                "flex",
                isHorizontal ? "w-full items-center" : "h-full flex-col items-center",
                className,
            )}
        >
            {/* {Array.from({ length: 10 }).map((_, index) => ( */}
                <div
                   className={isHorizontal ? "flex-grow" : "flex-grow-0"}
                    style={{
                        height: isHorizontal ? height : "100%",
                        width: isHorizontal ? "100%" : height,
                        backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                        backgroundSize: isHorizontal ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` : `${height} ${parseInt(gapSize) + parseInt(dotSize)}px`,
                        backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                        backgroundPosition: "center",
                    }}
                />
            {/* ))} */}
        </div>
    );
};      