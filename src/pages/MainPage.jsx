import React from 'react';
import { Phone, MessageCircle, ChevronRight, CheckCircle2, Heart, Shield, Users, Award, Clock, Star, Brain, Anchor, Users2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const MainPage = () => {
    const whatsappNumber = "5562994547335";
    const phoneNumber = "62994547335";

    const images = [
        "https://i.postimg.cc/mrDtdvn5/1.jpg",
        "https://ctanjosdaterra.com.br/wp-content/uploads/2023/01/Melhores-Clinica-de-Recuperacao-em-Aguai-SP-5.jpg",
        "https://i.postimg.cc/Gp596M0S/3.jpg",
        "https://i.postimg.cc/bvJs6757/4.jpg",
        "https://i.postimg.cc/Bv6XhrzR/5.jpg",
        "https://i.postimg.cc/DzMmRCVR/6.jpg"
    ];

    const plans = [
        "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png",
        "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png",
        "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png",
        "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png",
        "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png"
    ];

    return (
        <div className="main-page">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    width: 100%;
                }
                .marquee-content {
                    display: inline-flex;
                    gap: 3rem;
                    animation: marquee 20s linear infinite;
                }
                .treatment-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: var(--shadow-md);
                    transition: var(--transition);
                    border: 1px solid #edf2f7;
                }
                .treatment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }
            `}</style>

            {/* Header/Navbar */}
            <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src="https://i.postimg.cc/zfc34dZ1/logo_removebg_preview_(1).png" alt="Logo" style={{ height: '50px' }} />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={`tel:${phoneNumber}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                            <Phone size={18} /> <span className="hide-mobile">Ligar Agora</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero" style={{
                paddingTop: '8rem',
                paddingBottom: '5rem',
                background: 'linear-gradient(rgba(26, 74, 94, 0.9), rgba(26, 74, 94, 0.9)), url("https://i.postimg.cc/mrDtdvn5/1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.2 }}
                    >
                        A Jornada para uma Nova Vida Começa Aqui.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', opacity: 0.9 }}
                    >
                        Resgate sua dignidade e recupere o controle da sua história em um ambiente de paz, respeito e cuidado profissional especializado.
                    </motion.p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
                            <MessageCircle size={24} /> Falar com Terapeuta Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* Convênios Marquee */}
            <section style={{ background: 'white', padding: '2.5rem 0', borderBottom: '1px solid #edf2f7' }}>
                <div className="container text-center">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>ACEITAMOS OS PRINCIPAIS PLANOS DE SAÚDE</p>
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {plans.concat(plans).map((plan, idx) => (
                                <img key={idx} src={plan} alt="Plano" style={{ height: '35px', filter: 'grayscale(100%) opacity(0.6)' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sessão Autoridade */}
            <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Uma trajetória de apoio e confiança</h2>
                        <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>Nossos números refletem nosso compromisso com a vida e com o bem-estar de cada família.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {[
                            { icon: <Users size={32} />, value: "+500", label: "Pacientes acolhidos" },
                            { icon: <Award size={32} />, value: "+10", label: "Anos de experiência" },
                            { icon: <Star size={32} />, value: "+15", label: "Profissionais especializados" },
                            { icon: <Clock size={32} />, value: "24h", label: "Atendimento" }
                        ].map((stat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                            >
                                <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ fontSize: '1rem', opacity: 0.8 }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalhes do Tratamento */}
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tratamentos e Internações</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Protocolos eficazes e acompanhamento contínuo.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                icon: <Brain size={28} />,
                                title: "Dependência Química",
                                desc: "Cada pessoa manifesta sintomas e desafios diferentes. Nosso tratamento é individualizado e conduzido por equipe multidisciplinar."
                            },
                            {
                                icon: <Anchor size={28} />,
                                title: "Dependência Alcoólica",
                                desc: "O tratamento inclui desintoxicação assistida, acompanhamento terapêutico e suporte contínuo à família."
                            },
                            {
                                icon: <Heart size={28} />,
                                title: "Tratamento Feminino",
                                desc: "Ambiente acolhedor e seguro, respeitando as particularidades emocionais, sociais e físicas da mulher."
                            },
                            {
                                icon: <Users2 size={28} />,
                                title: "Tratamento para Menores",
                                desc: "Atendimento especializado para adolescentes, com foco no desenvolvimento saudável e apoio familiar."
                            },
                            {
                                icon: <Star size={28} />,
                                title: "Saúde Mental",
                                desc: "Tratamentos voltados para ansiedade, depressão, estresse emocional e outros transtornos, com abordagem humanizada."
                            },
                            {
                                icon: <CheckCircle2 size={28} />,
                                title: "Internação Voluntária",
                                desc: "Indicada quando o paciente reconhece a necessidade de ajuda e aceita o tratamento como caminho de recuperação."
                            },
                            {
                                icon: <ShieldAlert size={28} />,
                                title: "Internação Involuntária",
                                desc: "Quando a família precisa agir para proteger a vida e a saúde do paciente, sempre dentro da lei e com respaldo médico."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="treatment-card">
                                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Saiba mais <ChevronRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Galeria de Estrutura */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Conheça Nossa Estrutura</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                        {images.map((img, idx) => (
                            <motion.div whileHover={{ scale: 1.02 }} key={idx} style={{ height: '250px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                <img src={img} alt={`Clínica ${idx + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Vidas Transformadas</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { name: "M. Silva", text: "Minha família recuperou a paz. O suporte que recebemos aqui foi o divisor de águas que precisávamos." },
                            { name: "R. Oliveira", text: "Um ambiente de respeito e dignidade. Senti que realmente importava como ser humano, não apenas como um paciente." },
                            { name: "Ana P.", text: "A equipe é maravilhosa. Hoje vejo a vida com cores que achei que nunca mais veria." }
                        ].map((testimonial, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--secondary)' }}>
                                <div style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--secondary)" />)}
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-main)' }}>"{testimonial.text}"</p>
                                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary)' }}>— {testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Dúvidas Frequentes</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { q: "O tratamento é coberto pelo plano de saúde?", a: "Sim, atendemos os principais convênios. Entre em contato para uma verificação imediata da sua cobertura." },
                            { q: "Qual o tempo médio de internação?", a: "O tempo é individualizado, variando conforme a necessidade de cada paciente e o plano terapêutico definido pela equipe médica." },
                            { q: "Como funciona a internação involuntária?", a: "Oferecemos todo o suporte legal e profissional para casos onde a pessoa não consegue reconhecer a necessidade de ajuda, sempre priorizando a vida e a segurança." }
                        ].map((item, idx) => (
                            <details key={idx} style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: '600', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.q}
                                    <ChevronRight size={18} />
                                </summary>
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Não Espere Mais. O Primeiro Passo é Agora.</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                        Estamos prontos para atender você ou quem você ama com todo o sigilo e urgência necessária.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={`tel:${phoneNumber}`} className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <Phone size={20} /> Ligar Urgente
                        </a>
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                            <MessageCircle size={20} /> WhatsApp 24h
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '3rem 0', background: '#0f2a36', color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: '0.9rem' }}>
                <div className="container">
                    <img src="https://i.postimg.cc/zfc34dZ1/logo_removebg_preview_(1).png" alt="Logo" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(10)' }} />
                    <p>© {new Date().getFullYear()} Refúgio da Vida - Atendimento Humanizado em Saúde Mental e Bem-estar.</p>
                    <p style={{ marginTop: '0.5rem' }}>O conteúdo deste site é informativo. Procure sempre orientação profissional.</p>
                </div>
            </footer>

            <style>{`
                .hide-mobile { display: inline; }
                @media (max-width: 600px) { .hide-mobile { display: none; } }
            `}</style>
        </div>
    );
};

export default MainPage;
