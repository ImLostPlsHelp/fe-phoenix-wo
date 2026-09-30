import { Check } from "lucide-react";

interface StepItem {
  id: number;
  label: string;
  title: string;
  description: string;
}

interface TambahAcaraBarProps {
  currentStep?: number;
}

const STEPS_DATA: StepItem[] = [
  {
    id: 1,
    label: "Manajemen Akun",
    title: "Tambah Pernikahan Baru",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    label: "Manajemen Keluarga",
    title: "Tambah Anggota Keluarga",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    label: "Manajemen Acara",
    title: "Tambah Detail Acara",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    label: "Manajemen Vendor",
    title: "Tambah Rekanan Vendor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function TambahAcaraBar({ currentStep = 1 }: TambahAcaraBarProps) {
  // Ambil judul dan deskripsi sesuai step aktif
  const activeStep = STEPS_DATA.find((s) => s.id === currentStep) || STEPS_DATA[0];

  return (
    <section className="flex flex-row justify-between items-center px-8 py-5 bg-white border-b border-gray-tertiary w-full font-plus-jkt">
      {/* Sisi Kiri: Judul & Subjudul Step Saat Ini */}
      <div>
        <h1 className="text-lg font-bold text-black">{activeStep.title}</h1>
        <p className="text-xs text-gray-secondary mt-0.5">{activeStep.description}</p>
      </div>

      {/* Sisi Kanan: Stepper Wizard dengan Garis Penghubung */}
      <div className="flex items-center">
        {STEPS_DATA.map((step, index) => {
          const isCurrent = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id} className="flex items-center">
              {/* Lingkaran dan Label */}
              <div className="flex flex-col items-center gap-1.5 min-w-[64px]">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    isCurrent || isCompleted
                      ? "bg-maroon text-white"
                      : "border border-gray-tertiary text-gray-secondary bg-white"
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.id}
                </div>

                <span
                  className={`text-[11px] whitespace-nowrap ${
                    isCurrent || isCompleted
                      ? "text-black font-semibold"
                      : "text-gray-secondary font-medium"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Garis Horizontal Penghubung */}
              {index < STEPS_DATA.length - 1 && (
                <div
                  className={`h-[1px] w-12 sm:w-16 -mt-5 mx-1 transition-colors ${
                    step.id < currentStep ? "bg-maroon" : "bg-gray-tertiary"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}