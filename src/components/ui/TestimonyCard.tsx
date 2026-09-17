import type { Testimony } from "../../data/testimonies";

type TestimonyCardProps = {
    testimony: Testimony;
};

function TestimonyCard({ testimony }: TestimonyCardProps) {
    const { name, eventPlace, eventYear, quote, rating } = testimony;

    return (
        <div
            role="listitem"
            className="w-80 md:w-96 shrink-0 snap-center rounded-2xl border border-gray-200 bg-white p-6"
        >
            <span className="font-serif text-4xl text-maroon leading-none">&ldquo;</span>

            <p className="mt-3 text-sm md:text-base text-body">{quote}</p>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
                    <div className="min-w-0">
                        <p className="text-heading font-semibold truncate">{name}</p>
                        <p className="text-xs text-body truncate">
                            {eventPlace} • {eventYear}
                        </p>
                    </div>
                </div>

                <div className="text-maroon text-sm shrink-0" aria-label={`Rating ${rating} dari 5`}>
                    {"★".repeat(rating)}
                    <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
                </div>
            </div>
        </div>
    );
}

export default TestimonyCard;