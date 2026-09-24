export default function PricePlanSection() {
  const plans = [
    {
      name: "Repudiandae Sintae",
      desc: "Duis aute irure dolor reprehenderit in voluptate cillum dolore.",
      features: [
        "Consequuntur magni",
        "Quis autem vel",
        "Magnam aliquam",
        "Mommodo consequat",
      ],
      isPopular: false,
    },
    {
      name: "Lorem Ipsum",
      desc: "Duis aute irure dolor reprehenderit in voluptate cillum dolore.",
      features: [
        "Consequuntur magni",
        "Quis autem vel",
        "Magnam aliquam",
        "Mommodo consequat",
        "Placeat facere",
        "Expedita distinctio",
      ],
      isPopular: true,
      badge: "Penawaran Terbaik!",
    },
    {
      name: "Omnis Voluptas",
      desc: "Duis aute irure dolor reprehenderit in voluptate cillum dolore.",
      features: [
        "Consequuntur magni",
        "Quis autem vel",
        "Magnam aliquam",
        "Mommodo consequat",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="bg-[#FAF7F5] py-20 px-6 font-fraunces">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl text-[#6d1f2b] mb-4">
            Pilih Paket Untuk Hari Bahagiamu
          </h2>
          <p className="font-plus-jkt text-sm md:text-base text-stone-600 leading-relaxed">
            Temukan pilihan paket yang dapat disesuaikan dengan kebutuhan dan
            konsep pernikahanmu.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex-1 w-full max-w-sm bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "border border-[#6d1f2b] shadow-2xl lg:-translate-y-2 z-10"
                  : "border border-stone-200/70 shadow-sm"
              }`}
            >
              {/* Badge Khusus Paket Populer */}
              {plan.badge && (
                <div className="absolute -top-4 left-6 bg-[#6d1f2b] text-white text-xs font-plus-jkt font-semibold px-3 py-1 rounded-md shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Title & Description */}
                <h3 className="text-2xl text-stone-900 mb-2">{plan.name}</h3>
                <p className="font-plus-jkt text-xs md:text-sm text-stone-500 mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-stone-200 mb-6" />

                {/* Feature List */}
                <ul className="font-plus-jkt space-y-3.5 mb-8 text-stone-700 text-xs md:text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#6d1f2b] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 rounded-xl font-plus-jkt text-sm font-medium transition-colors ${
                  plan.isPopular
                    ? "bg-[#6d1f2b] text-white hover:bg-[#571822]"
                    : "border border-[#6d1f2b] text-[#6d1f2b] hover:bg-rose-50"
                }`}
              >
                Tanya Paket
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="font-plus-jkt text-xs md:text-sm text-stone-500 text-center mt-14">
          Setiap paket dapat disesuaikan, layanan di atas merupakan paket dan
          bukan daftar tetap.
        </p>
      </div>
    </div>
  );
}