import React from 'react';
import whatsappIcon from '../assets/whatsapp.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import gmailIcon from '../assets/gmail.png';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Contato</h3>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
                    Estou sempre aberto a novas oportunidades e colaborações. Escolha a melhor forma de falar comigo:
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5585987855611"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:bg-green-50 transition-all p-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-green-600">WhatsApp</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/edson-carvalho-213b051b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:bg-blue-50 transition-all p-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-blue-600">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Edson468"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:bg-slate-100 transition-all p-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-slate-900">GitHub</span>
                    </a>

                    {/* Gmail */}
                    <a
                        href="mailto:edson4518@gmail.com"
                        className="flex flex-col items-center gap-2 group transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:bg-red-50 transition-all p-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold text-slate-700 group-hover:text-red-600">Gmail</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;