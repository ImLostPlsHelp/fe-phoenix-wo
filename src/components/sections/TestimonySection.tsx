import HorizontalScroller from "../ui/HorizontalScroller";
import TestimonyCard from "../ui/TestimonyCard";
import { testimonies } from "../../data/testimonies";

function TestimonySection() {
    return (
        <section className="w-full bg-cream py-16 md:py-20">
            <div className="max-w-300 mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-maroon">
                        Kenangan Indah Bersama Klien Kami
                    </h2>
                    <p className="mt-3 text-body">
                        Kepercayaan setiap pasangan menjadi bagian terpenting dari perjalanan kami.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <span className="h-px w-20 bg-gray-300" />
                        <span className="h-2 w-2 rotate-45 border border-maroon" />
                        <span className="h-px w-20 bg-gray-300" />
                    </div>
                </div>

                <HorizontalScroller gapClassName="gap-6" ariaLabel="Testimoni klien">
                    {testimonies.map((testimony) => (
                        <TestimonyCard key={testimony.id} testimony={testimony} />
                    ))}
                </HorizontalScroller>
            </div>
        </section>
    );
}

export default TestimonySection;
