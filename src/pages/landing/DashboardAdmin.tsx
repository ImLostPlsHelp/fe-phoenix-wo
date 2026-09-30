import SideBarAdmin from '../../components/layout/public/SideBarAdmin.tsx';
import DateAndEvent from '../../components/sections/DateAndEvent.tsx'
import WeddingCard from '../../components/sections/WeddingCard.tsx';

export default function DashboardAdmin() {
    return (
    <section className="flex flex-row h-screen w-full overflow-hidden bg-color-cream-color">
        <SideBarAdmin />
        <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <DateAndEvent />
        <div className="flex-1 p-8 bg-cream">
          <WeddingCard />
        </div>
        </main>
    </section>
    );
}