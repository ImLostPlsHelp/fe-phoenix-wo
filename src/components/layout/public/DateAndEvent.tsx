import {Calendar, Clock} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function DateAndEvent() {
    const [time, setTime] = useState(new Date());
    const navigate = useNavigate();

    const formattedDate = time.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTime = time.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-row px-4 py-3 bg-white justify-between gap-4 font-plus-jkt font-medium text-sm text-gray-secondary items-center w-full border-b border-gray-tertiary">
            <section className="flex flex-row gap-2 justify-between items-center">
                <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <h1>{formattedDate}</h1>
                </div>

                <div className="h-4 w-px bg-gray-tertiary" />

                <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <h1>{formattedTime}</h1>
                </div>
            </section>
            <button onClick={() => navigate('/tambah-pernikahan')} className="bg-maroon text-white px-6 py-3 rounded-lg w-fit hover:bg-maroon-dark transition-colors">
                + Tambah Acara
            </button>
        </section>
    );
}