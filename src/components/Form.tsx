import { useState } from "react";
import { EMAIL_FROM, EMAIL_DEST  } from "astro:env/client"

export const prerender = true;

const packs = [{
    name: "Book Profesional",
    price: 180,
}, {
    name: "Book Intermedio",
    price: 90,
},
{
    name: "Book Básico",
    price: 60,
},
{
    name: "Videobook Completo",
    price: 425,
}
    , {
    name: "Videobook Escena",
    price: 300,
}, {
    name: "Videobook Monólogo",
    price: 200,
}, {
    name: "Coach Profesional",
    price: 140,
}, {
    name: "Coach Intermedio",
    price: 100,
}, {
    name: "Coach Básico",
    price: 50,
}]

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [pack, setPack] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        const finalHtml = "<html><body><h1>Nuevo mensaje de "+name+" - "+email+"</h1><h2>"+pack+"€</h2><p>"+message+"</p></body></html>";
   
        try {
            const res = await fetch("/api/sendEmail.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                },
                body: JSON.stringify({
                    to: EMAIL_DEST,
                    from: EMAIL_FROM,
                    subject: email + " - " + pack,
                    html: finalHtml,
                    text: finalHtml,
                }),
            });
            const data = await res.json();
            if (data) {
                alert("Gracias por tu mensaje "+ name + " en breve nos pondremos en contacto contigo");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (

        <form method="POST" onSubmit={handleSubmit} id="form"
            className="lg:w-1/3 flex flex-col md:ml-auto md:w-[90%] md:m-auto w-full md:py-8 mt-8 md:mt-0"
        >
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
                FORMULARIO
            </h2>
            <p className="leading-relaxed font-text mb-5 text-gray-600">
                Rellena el formulario y nos pondremos en contacto contigo.
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-lg text-gray-600"
                >NOMBRE
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Introduzca su nombre"
                    className="w-full font-text rounded border bg-[#f3f0f0] border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-lg text-gray-600"
                >EMAIL</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Introduzca su email"
                    className="w-full font-text rounded bg-[#f3f0f0] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="pack" className="leading-7 text-lg text-gray-600"
                >SELECCIONA PACK</label><select
                defaultValue="Book Profesional"
                    name="pack"
                    className="w-full bg-[#f3f0f0] font-text rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    id="pack"
                    value={pack}
                    onChange={(e) => { setPack(e.target.value) }}>
                    {packs.map((pack) => (
                       <option key={pack.name} value={pack.name}>{pack.name}</option>
                    ))}

                </select>
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-lg text-gray-600"
                >MENSAJE</label>
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    value={message}
                    placeholder="Introduzca su mensaje"
                    className="w-full bg-[#f3f0f0] font-text rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button type="submit"
                className=" py-2 px-6 text-lg rounded-lg font-bold text-black border-2 border-black hover:bg-black hover:text-white"
            >Enviar
            </button>
            <p className="text-md font-text text-gray-500 mt-3">
                Si no estás interesado en ningún pack en concreto, puedes indicarlo en el mensaje y te asesoraremos en lo que más se ajuste a tu perfil.
            </p>
        </form>
    );
};
export default Form;