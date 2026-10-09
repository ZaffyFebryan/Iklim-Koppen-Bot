import { router } from "@inertiajs/react";
import { useState } from "react";

export default function CompleteModuleButton({
    moduleNumber,
    completed = false,
}) {
    const [processing, setProcessing] = useState(false);

    const handleComplete = () => {
        if (completed || processing) {
            return;
        }

        setProcessing(true);

        router.post(
            route("student.modul.complete", moduleNumber),
            {},
            {
                preserveScroll: true,
                onFinish: () => {
                    setProcessing(false);
                },
            }
        );
    };

    return (
        <button
            type="button"
            onClick={handleComplete}
            disabled={completed || processing}
            className={`w-full rounded-2xl px-6 py-4 text-sm font-bold transition ${
                completed
                    ? "cursor-default bg-[#e3f4ee] text-[#16805f]"
                    : "bg-[#087b70] text-white hover:bg-[#06675e]"
            }`}
        >
            {completed
                ? `✓ Modul ${moduleNumber} Selesai`
                : processing
                ? "Menyimpan..."
                : `✓ Tandai Modul ${moduleNumber} Selesai`}
        </button>
    );
}