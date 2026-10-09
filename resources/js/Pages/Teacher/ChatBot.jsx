import { Head, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function ChatBot() {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "Halo, Guru! 👋 Saya GeoBot. Saya siap membantu Anda memahami materi klasifikasi iklim Köppen.",
        },
        {
            id: 2,
            sender: "bot",
            text: "Silakan tanyakan tentang kelompok iklim, kode Köppen, suhu, curah hujan, atau materi pembelajaran lainnya.",
        },
    ]);

    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const sendMessage = async (e) => {
        e.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage || loading) {
            return;
        }

        // Tambahkan pesan user ke tampilan
        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedMessage,
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setLoading(true);

        try {
            // Ambil CSRF token dari meta tag
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            // Kirim request langsung sebagai JSON
            const response = await fetch(
                route("teacher.chatbot.chat"),
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    body: JSON.stringify({
                        message: trimmedMessage,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Terjadi kesalahan saat menghubungi GeoBot."
                );
            }

            // Tambahkan jawaban chatbot
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text:
                        data.message ||
                        "Maaf, GeoBot tidak memberikan jawaban.",
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text:
                        error.message ||
                        "Maaf, terjadi kesalahan saat memproses pertanyaan.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestion = (text) => {
        setMessage(text);
    };

    return (
        <>
            <Head title="Chatbot Guru" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <TeacherSidebar />

                {/* MAIN */}
                <main className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Panel Guru
                            </p>

                            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                                Chatbot GeoBot
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Asisten pembelajaran untuk membantu memahami
                                klasifikasi iklim Köppen.
                            </p>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-[1700px] px-4 py-6 sm:px-8 lg:py-8">
                        <div className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            {/* CHAT HEADER */}
                            <div className="border-b border-[#e5efed] bg-gradient-to-r from-[#07384b] to-[#087b70] px-5 py-5 text-white sm:px-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                                        🤖
                                    </div>

                                    <div>
                                        <h2 className="font-bold">
                                            GeoBot
                                        </h2>

                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#d9f99d]" />

                                            <span className="text-xs text-teal-100">
                                                Siap membantu
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MESSAGES */}
                            <div className="h-[55vh] min-h-[420px] overflow-y-auto bg-[#f8fbfa] px-4 py-5 sm:px-6">
                                <div className="space-y-5">
                                    {messages.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`flex ${
                                                item.sender === "user"
                                                    ? "justify-end"
                                                    : "justify-start"
                                            }`}
                                        >
                                            <div
                                                className={`flex max-w-[85%] gap-3 sm:max-w-[75%] ${
                                                    item.sender === "user"
                                                        ? "flex-row-reverse"
                                                        : ""
                                                }`}
                                            >
                                                {/* AVATAR */}
                                                <div
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm ${
                                                        item.sender === "user"
                                                            ? "bg-[#d9f99d] text-[#123b49]"
                                                            : "bg-[#087b70] text-white"
                                                    }`}
                                                >
                                                    {item.sender === "user"
                                                        ? "G"
                                                        : "🤖"}
                                                </div>

                                                {/* MESSAGE */}
                                                <div
                                                    className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                                                        item.sender === "user"
                                                            ? "rounded-tr-md bg-[#087b68] text-white"
                                                            : "rounded-tl-md border border-[#dceae7] bg-white text-[#123b49] shadow-sm"
                                                    }`}
                                                >
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* LOADING */}
                                    {loading && (
                                        <div className="flex justify-start">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087b70] text-sm text-white">
                                                    🤖
                                                </div>

                                                <div className="rounded-2xl rounded-tl-md border border-[#dceae7] bg-white px-5 py-3 shadow-sm">
                                                    <div className="flex gap-1">
                                                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#087b70]" />

                                                        <span
                                                            className="h-2 w-2 animate-bounce rounded-full bg-[#087b70]"
                                                            style={{
                                                                animationDelay:
                                                                    "0.15s",
                                                            }}
                                                        />

                                                        <span
                                                            className="h-2 w-2 animate-bounce rounded-full bg-[#087b70]"
                                                            style={{
                                                                animationDelay:
                                                                    "0.3s",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* SUGGESTIONS */}
                            <div className="border-t border-[#e5efed] bg-white px-4 py-4 sm:px-6">
                                <p className="mb-3 text-xs font-semibold text-gray-500">
                                    Pertanyaan yang bisa dicoba:
                                </p>

                                <div className="flex gap-2 overflow-x-auto pb-1">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSuggestion(
                                                "Apa itu klasifikasi iklim Köppen?"
                                            )
                                        }
                                        className="shrink-0 rounded-full border border-[#c8dcda] bg-[#f8fbfa] px-4 py-2 text-xs font-medium text-[#087b68] transition hover:border-[#087b68] hover:bg-[#e9f5f1]"
                                    >
                                        Apa itu Köppen?
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSuggestion(
                                                "Jelaskan kelompok iklim A, B, C, D, dan E."
                                            )
                                        }
                                        className="shrink-0 rounded-full border border-[#c8dcda] bg-[#f8fbfa] px-4 py-2 text-xs font-medium text-[#087b68] transition hover:border-[#087b68] hover:bg-[#e9f5f1]"
                                    >
                                        Kelompok iklim
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSuggestion(
                                                "Apa perbedaan iklim Af, Am, dan Aw?"
                                            )
                                        }
                                        className="shrink-0 rounded-full border border-[#c8dcda] bg-[#f8fbfa] px-4 py-2 text-xs font-medium text-[#087b68] transition hover:border-[#087b68] hover:bg-[#e9f5f1]"
                                    >
                                        Af, Am, dan Aw
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSuggestion(
                                                "Bagaimana cara menentukan tipe iklim dari data suhu dan curah hujan?"
                                            )
                                        }
                                        className="shrink-0 rounded-full border border-[#c8dcda] bg-[#f8fbfa] px-4 py-2 text-xs font-medium text-[#087b68] transition hover:border-[#087b68] hover:bg-[#e9f5f1]"
                                    >
                                        Cara menentukan iklim
                                    </button>
                                </div>
                            </div>

                            {/* INPUT */}
                            <form
                                onSubmit={sendMessage}
                                className="border-t border-[#e5efed] bg-white p-4 sm:p-5"
                            >
                                <div className="flex items-end gap-3">
                                    <textarea
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Enter" &&
                                                !e.shiftKey
                                            ) {
                                                e.preventDefault();
                                                sendMessage(e);
                                            }
                                        }}
                                        rows={1}
                                        placeholder="Tulis pertanyaan untuk GeoBot..."
                                        disabled={loading}
                                        className="min-h-[48px] flex-1 resize-none rounded-2xl border border-[#c8dcda] bg-[#f8fbfa] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#087b68] focus:bg-white focus:ring-2 focus:ring-[#087b68]/10 disabled:cursor-not-allowed disabled:opacity-60"
                                    />

                                    <button
                                        type="submit"
                                        disabled={
                                            loading || !message.trim()
                                        }
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087b68] text-xl text-white transition hover:bg-[#066455] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        ➤
                                    </button>
                                </div>

                                <p className="mt-2 text-center text-[11px] text-gray-400">
                                    Tekan Enter untuk mengirim • Shift +
                                    Enter untuk baris baru
                                </p>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}