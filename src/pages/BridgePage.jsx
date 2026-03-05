import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Globe, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const BridgePage = () => {
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

    const testimonials = [
        { name: "M. Silva", text: "Excelente atendimento e infraestrutura impecável. Recomendo a todos." },
        { name: "R. Oliveira", text: "Profissionais dedicados e um ambiente que realmente transmite paz." }
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bridge-container" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f0f7f9 0%, #e2eef1 100%)',
            padding: '2rem 1rem'
        }}>
            <div className="glass" style={{
                maxWidth: '600px',
                width: '100%',
                padding: '2.5rem 1.5rem',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                marginTop: '1rem',
                marginBottom: '2rem'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <img
                        src="https://i.postimg.cc/zfc34dZ1/logo_removebg_preview_(1).png"
                        alt="Refúgio da Vida"
                        style={{ maxWidth: '160px', height: 'auto' }}
                    />
                </div>

                <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)', lineHeight: 1.3 }}>
                    Recupere sua Paz e Qualidade de Vida com Apoio Especializado
                </h1>

                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                    Oferecemos um ambiente seguro e acolhedor para o cuidado integral do seu bem-estar.
                </p>

                {/* Carrossel Animado */}
                <div style={{ position: 'relative', height: '250px', borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem', boxShadow: 'var(--shadow-md)' }}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </AnimatePresence>
                    <button onClick={prevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.5)', padding: '5px', borderRadius: '50%' }}>
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.5)', padding: '5px', borderRadius: '50%' }}>
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <a href={`tel:${phoneNumber}`} className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem' }}>
                        <Phone size={20} /> Ligar Urgente
                    </a>

                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem', fontSize: '1.1rem' }}>
                        <MessageCircle size={20} /> Falar com Terapeuta
                    </a>

                    <Link to="/oficial" className="btn btn-outline" style={{ padding: '1rem', fontSize: '1.1rem' }}>
                        <Globe size={20} /> Ver Site Oficial
                    </Link>
                </div>

                {/* Depoimentos na Ponte */}
                <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.4)', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center' }}>O que dizem nossos pacientes:</h3>
                    {testimonials.map((t, idx) => (
                        <div key={idx} style={{ marginBottom: '0.8rem', fontSize: '0.9rem', borderLeft: '3px solid var(--secondary)', paddingLeft: '10px' }}>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '0.2rem' }}>"{t.text}"</p>
                            <p style={{ fontWeight: 'bold', color: 'var(--primary)' }}>— {t.name}</p>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <ShieldCheck size={16} />
                    <span>Atendimento 100% Sigiloso e Seguro</span>
                </div>

                {/* Marquee de Planos de Saúde */}
                <div style={{ marginTop: '2.5rem', overflow: 'hidden', width: '100%', position: 'relative' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', textAlign: 'center' }}>Principais Convênios Atendidos:</p>
                    <div className="marquee-wrapper" style={{ display: 'flex', width: '200%' }}>
                        <div className="marquee-content" style={{ display: 'flex', gap: '2rem', animation: 'marquee 20s linear infinite' }}>
                            {[
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png"
                            ].map((plan, idx) => (
                                <img key={idx} src={plan} alt="Plano" style={{ height: '25px', opacity: 0.6, filter: 'grayscale(100%)' }} />
                            ))}
                            {/* Duplicate for infinite loop */}
                            {[
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png",
                                "https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png"
                            ].map((plan, idx) => (
                                <img key={`dup-${idx}`} src={plan} alt="Plano" style={{ height: '25px', opacity: 0.6, filter: 'grayscale(100%)' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            <footer style={{ marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
                © {new Date().getFullYear()} Refúgio da Vida - Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default BridgePage;
