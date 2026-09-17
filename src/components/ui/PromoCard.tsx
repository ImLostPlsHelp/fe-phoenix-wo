import type { Promo } from '../../data/cards.ts';

type PromoCardProps = {
  promo: Promo;
}

function PromoCard({ promo }: PromoCardProps) {
  return (
    <div className='aspect-4/5 bg-gray-200 flex items-center justify-center'>
      {promo.imageUrl ? (
        <img
          src={promo.imageUrl}
          alt={promo.imageAlt}
          className='h-full w-full object-cover'
        />
      ) : (
        // TODO: hapus placeholder ini setelah imageUrl diisi data asli
        <span className='text-sm text-gray-500'>Gambar promo belum tersedia</span>
      )}
    </div>
  );
}

export default PromoCard;