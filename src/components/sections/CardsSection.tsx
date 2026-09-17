import { cardsData } from '../../data/cards';
import PromoCard from '../ui/PromoCard.tsx';

function CardsSection() {
  // Batasi maksimal 3 kartu agar layout tidak pernah wrap ke baris ke-2
  const visibleCards = cardsData.slice(0, 3);

  return (
    <section id='promo' className='bg-maroon'>
      <div className='max-w-300 mx-auto px-4 py-16'>
        <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12'>
          <h1 className='font-fraunces text-3xl leading-snug text-cream md:text-4xl'>
            Penawaran Spesial Untuk Hari Istimewamu
          </h1>

          <div className='flex gap-4 md:max-w-xs'>
            <span
              className='hidden w-0.5 shrink-0 bg-cream/80 md:block'
              aria-hidden='true'
            />
            <p className='font-plus-jkt text-sm text-cream/80'>
              Temukan promo dan informasi terbaru untuk membantu mempersiapkan
              pernikahan impianmu.
            </p>
          </div>
        </div>

        <div className='mt-10 flex flex-wrap justify-center border border-cream/20 divide-y sm:divide-y-0 sm:divide-x'>
          {visibleCards.map((promo) => (
            <div key={promo.id} className='w-full sm:w-1/2 lg:w-1/3'>
              <PromoCard promo={promo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;