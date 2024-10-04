import { render } from "@react-email/render";
import { useState } from "react";
import { SampleEmail } from "../emails/SampleEmail";



const EmailForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(name, email, message);

        const finalHtml = render(<SampleEmail userFirstname={name} />, {
            pretty: true,
        });

        const finalText = render(<SampleEmail userFirstname={name} />, {
            plainText: true,
        });

        try {
            const res = await fetch("/api/sendEmail.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: import.meta.env.EMAIL_FROM,
                    to: import.meta.env.EMAIL_DEST,
                    subject: `Hi`,
                    html: finalHtml,
                    text: finalText,
                }),
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <form method="POST" onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion
                axe
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600"
                >Nombre
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Introduzca su nombre"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600"
                >Email</label
                >
                <input
                onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Introduzca su email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600"
                >Mensaje</label>
                <textarea
                onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    value={message}
                    placeholder="Introduzca su mensaje"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Enviar
            </button>
            <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook
                viral artisan.
            </p>
        </form>
    );
};
export default EmailForm;