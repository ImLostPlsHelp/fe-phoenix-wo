// TODO
export default function PricePlanSection() {
    return (
        <div className="bg-cream-muted font-fraunces">
            <section className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col gap-8 items-center justify-center text-center">
                <h2 className="text-4xl font-regular text-maroon">Pilih Paket Untuk Hari Bahagiamu</h2>
                <section className="flex flex-row gap-8 items-center justify-center flex-wrap">
                    <div className="bg-white rounded-2xl hover:shadow-lg hover:scale-115 transition-all duration-300 p-6 md:w-[300px]">
                        <h3 className="text-2xl font-semibold text-maroon mb-4">Paket A</h3>
                        <ul className="text-gray-600 mb-4 list-inside text-left font-plus-jkt">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl hover:shadow-lg hover:scale-115 transition-all duration-300 p-6 md:w-[300px]">
                        <h3 className="text-2xl font-semibold text-maroon mb-4">Paket B</h3>
                        <ul className="text-gray-600 mb-4 list-inside text-left font-plus-jkt">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl hover:shadow-lg hover:scale-115 transition-all duration-300 p-6 md:w-[300px]">
                        <h3 className="text-2xl font-semibold text-maroon mb-4">Paket C</h3>
                        <ul className="text-gray-600 mb-4 list-inside text-left font-plus-jkt">
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    )
}