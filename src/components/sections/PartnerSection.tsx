import { partners } from "../../data/partners";

function PartnerSection() {
    return (
        <section className="w-full bg-cream-muted py-12 md:py-16 overflow-hidden">
            <div className="max-w-300 mx-auto px-4">
                <p className="text-center font-serif text-lg md:text-xl text-heading mb-8 md:mb-10">
                    Jenama Kerjasama Kami:
                </p>

                <div className="relative overflow-hidden mask-fade-x">
                    <div
                        className="flex items-center gap-14 w-max animate-marquee-rtl"
                        style={{ animationDuration: "10s" }}
                        role="list"
                        aria-label="Daftar mitra kerjasama"
                    >
                        <div className="flex items-center gap-14 shrink-0">
                            {partners.map((partner) => (
                                <img
                                    key={partner.id}
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    className="h-9 md:h-11 w-auto max-w-32.5 object-contain shrink-0"
                                    role="listitem"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
