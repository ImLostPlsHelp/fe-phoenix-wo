import SideBarAdmin from '../../components/layout/public/SideBarAdmin.tsx';
import DateAndEvent from '../../components/sections/DateAndEvent.tsx'

export default function DashboardAdmin() {
    return (
    <section className="flex flex-row min-h-screen">
        <SideBarAdmin />
        <section className="flex flex-col flex-1">
        <DateAndEvent />
        </section>
    </section>
    );
}