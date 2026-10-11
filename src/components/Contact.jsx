import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');

  const email = 'edson4518@gmail.com';
  const whatsappNumber = '5585987855611';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Edson! Me chamo ${visitorName || 'um visitante do seu portfólio'} e gostaria de conversar sobre uma oportunidade:\n\n${visitorMessage || 'Podemos bater um papo?'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      value: '(85) 98785-5611',
      actionText: 'Conversar agora',
      href: `https://wa.me/${whatsappNumber}`,
      icon: MessageCircle,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40',
    },
    {
      name: 'LinkedIn',
      value: 'in/edson-carvalho-213b051b1',
      actionText: 'Conectar no perfil',
      href: 'https://www.linkedin.com/in/edson-carvalho-213b051b1/',
      icon: LinkedinIcon,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40',
    },
    {
      name: 'GitHub',
      value: '@Edson468',
      actionText: 'Ver repositórios',
      href: 'https://github.com/Edson468',
      icon: GithubIcon,
      color: 'text-slate-200',
      bgColor: 'bg-slate-500/10 border-white/10 group-hover:border-white/30',
    },
    {
      name: 'E-mail Direto',
      value: email,
      actionText: copied ? 'E-mail Copiado!' : 'Copiar endereço',
      onClick: copyToClipboard,
      icon: Mail,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/40',
      isCopy: true,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-slate-900/40 border-t border-white/5">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Mail size={13} />
            Entre em Contato
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Estou disponível para oportunidades como Desenvolvedor Fullstack, Frontend, projetos freelance e consultorias.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-xs text-slate-300">
            <MapPin size={13} className="text-cyan-400" />
            <span>Fortaleza - CE (Disponível para Remoto ou Híbrido)</span>
          </div>
        </div>

        {/* Grid de Canais de Contato */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            if (method.isCopy) {
              return (
                <button
                  key={method.name}
                  onClick={method.onClick}
                  type="button"
                  className={`group relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${method.bgColor} bg-slate-900/60 backdrop-blur-md`}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${method.bgColor} ${method.color} mb-4 transition-transform group-hover:scale-110`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-base font-bold text-white">{method.name}</h3>
                  <p className="mt-1 text-xs text-slate-400 truncate max-w-[180px]">{method.value}</p>
                  
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    {method.actionText}
                  </span>
                </button>
              );
            }

            return (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${method.bgColor} bg-slate-900/60 backdrop-blur-md`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${method.bgColor} ${method.color} mb-4 transition-transform group-hover:scale-110`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-base font-bold text-white">{method.name}</h3>
                <p className="mt-1 text-xs text-slate-400 truncate max-w-[180px]">{method.value}</p>
                
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <span>{method.actionText}</span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Caixa de Mensagem Direta Instantânea */}
        <div className="mt-12 mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2.5 mb-4">
            <Sparkles size={18} className="text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Envie uma mensagem rápida no WhatsApp</h3>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Preencha abaixo para iniciar uma conversa diretamente no meu WhatsApp com a sua mensagem pronta:
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                Seu Nome ou Empresa
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Ex: Ana Silva (Tech Recruiter) ou João"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                Como posso ajudar?
              </label>
              <textarea
                id="contact-message"
                rows={3}
                placeholder="Ex: Gostei do seu portfólio e gostaria de agendar uma entrevista / conversar sobre um projeto..."
                value={visitorMessage}
                onChange={(e) => setVisitorMessage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-500/50"
            >
              <Send size={16} />
              <span>Enviar via WhatsApp</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}