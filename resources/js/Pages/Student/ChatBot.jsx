import { Head } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import StudentSidebar from "@/Components/StudentSidebar";

export default function ChatBot() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "Halo! 👋 Aku KöppenBot. Silakan tanyakan sesuatu tentang klasifikasi iklim Köppen.",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | PERTANYAAN CEPAT
    |--------------------------------------------------------------------------
    */
    const quickQuestions = [
        "Apa itu Köppen?",
        "Tipe A",
        "Tipe B",
        "Tipe C",
        "Tipe D",
        "Tipe E",
        "Kode iklim Indonesia",
        "Beda Af, Am, Aw",
        "Iklim Surabaya apa?",
        "Daftar kode",
    ];

    /*
    |--------------------------------------------------------------------------
    | AUTO SCROLL
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    /*
    |--------------------------------------------------------------------------
    | KIRIM PESAN
    |--------------------------------------------------------------------------
    */
    const sendMessage = async (customMessage = null) => {
        const message = (
            customMessage ?? input
        ).trim();

        if (!message || loading) {
            return;
        }

        const userMessage = {
            id: Date.now(),
            sender: "user",
            text: message,
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
        ]);

        setInput("");
        setLoading(true);

        try {
            const csrfToken = document
                .querySelector(
                    'meta[name="csrf-token"]'
                )
                ?.getAttribute("content");

            const response = await fetch(
                route("student.chatbot.chat"),
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Accept: "application/json",

                        "X-CSRF-TOKEN":
                            csrfToken,
                    },

                    body: JSON.stringify({
                        message,
                    }),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Terjadi kesalahan saat menghubungi chatbot."
                );
            }

            const botMessage = {
                id: Date.now() + 1,

                sender: "bot",

                text:
                    data.message ||
                    "Maaf, aku belum bisa memberikan jawaban.",
            };

            setMessages((prev) => [
                ...prev,
                botMessage,
            ]);
        } catch (error) {
            console.error(
                "Chatbot error:",
                error
            );

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,

                    sender: "bot",

                    text: "Maaf, terjadi kesalahan saat menghubungkan ke chatbot. Silakan coba lagi.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | SUBMIT
    |--------------------------------------------------------------------------
    */
    const handleSubmit = (event) => {
        event.preventDefault();

        sendMessage();
    };

    return (
        <>
            <Head title="Chat AI Bot" />

            <StudentSidebar />

            <main className="min-h-screen bg-[#f3f9f8] md:ml-64">

                <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">

                    {/* HEADER */}
                    <div className="mb-6">

                        <div className="rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                                    🤖
                                </div>

                                <div>

                                    <h1 className="text-2xl font-bold">
                                        KöppenBot
                                    </h1>

                                    <p className="mt-1 text-sm text-white/80">
                                        Asisten belajar
                                        klasifikasi iklim
                                        Köppen
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* QUICK QUESTIONS */}
                    <div className="mb-5">

                        <p className="mb-3 text-sm font-semibold text-[#123b49]">
                            Pertanyaan cepat
                        </p>

                        <div className="flex flex-wrap gap-2">

                            {quickQuestions.map(
                                (question) => (
                                    <button
                                        key={
                                            question
                                        }
                                        type="button"
                                        onClick={() =>
                                            sendMessage(
                                                question
                                            )
                                        }
                                        disabled={
                                            loading
                                        }
                                        className="rounded-full border border-[#b9d9d2] bg-white px-4 py-2 text-sm font-medium text-[#123b49] transition hover:border-[#087b68] hover:bg-[#e8f6f2] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {question}
                                    </button>
                                )
                            )}

                        </div>

                    </div>

                    {/* CHAT */}
                    <div className="flex min-h-[500px] flex-1 flex-col overflow-hidden rounded-3xl border border-[#d9e6e3] bg-white shadow-sm">

                        {/* MESSAGES */}
                        <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">

                            {messages.map(
                                (message) => (
                                    <div
                                        key={
                                            message.id
                                        }
                                        className={`flex ${
                                            message.sender ===
                                            "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >

                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 sm:max-w-[75%] ${
                                                message.sender ===
                                                "user"
                                                    ? "rounded-br-md bg-[#087b68] text-white"
                                                    : "rounded-bl-md bg-[#eef7f5] text-[#123b49]"
                                            }`}
                                        >

                                            {message.sender ===
                                                "bot" && (
                                                <div className="mb-1 text-xs font-bold text-[#087b68]">
                                                    KöppenBot
                                                </div>
                                            )}

                                            <div className="whitespace-pre-line">
                                                {
                                                    message.text
                                                }
                                            </div>

                                        </div>

                                    </div>
                                )
                            )}

                            {/* LOADING */}
                            {loading && (
                                <div className="flex justify-start">

                                    <div className="rounded-2xl rounded-bl-md bg-[#eef7f5] px-4 py-3 text-sm text-[#123b49]">

                                        <div className="flex items-center gap-2">

                                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#087b68]" />

                                            <span
                                                className="h-2 w-2 animate-bounce rounded-full bg-[#087b68]"
                                                style={{
                                                    animationDelay:
                                                        "150ms",
                                                }}
                                            />

                                            <span
                                                className="h-2 w-2 animate-bounce rounded-full bg-[#087b68]"
                                                style={{
                                                    animationDelay:
                                                        "300ms",
                                                }}
                                            />

                                            <span className="ml-1">
                                                Sedang mencari
                                                jawaban...
                                            </span>

                                        </div>

                                    </div>

                                </div>
                            )}

                            <div ref={messagesEndRef} />

                        </div>

                        {/* INPUT */}
                        <form
                            onSubmit={
                                handleSubmit
                            }
                            className="border-t border-[#d9e6e3] bg-[#f8fcfb] p-4"
                        >

                            <div className="flex items-center gap-3">

                                <input
                                    type="text"
                                    value={input}
                                    onChange={(
                                        event
                                    ) =>
                                        setInput(
                                            event
                                                .target
                                                .value
                                        )
                                    }
                                    placeholder="Tanyakan tentang iklim Köppen..."
                                    disabled={
                                        loading
                                    }
                                    className="min-w-0 flex-1 rounded-2xl border border-[#cfe0dc] bg-white px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20 disabled:bg-gray-100"
                                />

                                <button
                                    type="submit"
                                    disabled={
                                        loading ||
                                        !input.trim()
                                    }
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087b68] text-xl text-white shadow-sm transition hover:bg-[#076653] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    ➤
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </main>
        </>
    );
}