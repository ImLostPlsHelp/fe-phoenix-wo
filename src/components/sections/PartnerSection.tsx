import Marquee from "../ui/Marquee";
import { partners } from "../../data/partners";

function PartnerSection() {
    return (
        <section className="w-full bg-cream-muted py-12 md:py-12 overflow-hidden">
            <div className="max-w-300 mx-auto px-2">
                <p className="text-center font-serif text-lg md:text-xl text-heading mb-8 md:mb-10">
                    Jenama Kerjasama Kami:
                </p>

                <Marquee speed={40} ariaLabel="Daftar mitra kerjasama">
                    {partners.map((partner) => (
                        <img
                            key={partner.id}
                            src={partner.logoUrl}
                            alt={partner.name}
                            className="h-9 md:h-11 w-auto max-w-32.5 object-contain shrink-0"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

export default PartnerSection;