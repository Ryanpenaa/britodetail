import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CarFront, Instagram, MapPin, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatsappMessage =
  "Olá! Conheci a Brito Detail pelo Instagram e gostaria de agendar um atendimento. Pode me informar os horários disponíveis?";

const whatsappUrl = `https://wa.me/5575997126931?text=${encodeURIComponent(whatsappMessage)}`;
const instagramUrl = "https://www.instagram.com/britodetaill?cplk=MXE3ZWczNXE1cGRpbA==";
const address = "Rua do Tucano, 114, Catiara, Amargosa - BA";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

function Index() {
  return (
    <main className="bio-page">
      <div className="bio-glow bio-glow-one" aria-hidden="true" />
      <div className="bio-glow bio-glow-two" aria-hidden="true" />
      <div className="bio-shell">
        <header className="bio-hero">
          <span className="bio-eyebrow">
            <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" />
            ESTÉTICA AUTOMOTIVA
          </span>
          <div className="bio-logo-wrap">
            <img
              className="bio-logo"
              src="/brito-logo.webp"
              alt="Logotipo da Brito Detail, em dourado e prata sobre fundo preto"
              width={256}
              height={256}
              fetchPriority="high"
            />
          </div>
          <h1>BRITO <span>DETAIL</span></h1>
          <div className="bio-title-line" aria-hidden="true" />
          <p className="bio-subtitle">Seu veículo merece um cuidado especial.</p>
          <p className="bio-intro">Cuidado, brilho e atenção em cada detalhe.</p>
          <span className="bio-city">
            <MapPin size={15} aria-hidden="true" />
            Amargosa • Bahia
          </span>
        </header>

        <section className="bio-actions" aria-label="Links de contato da Brito Detail">
          <a className="bio-button bio-button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="bio-button-icon"><MessageCircle size={24} strokeWidth={2} aria-hidden="true" /></span>
            <span>Agendar meu atendimento</span>
            <ArrowUpRight size={19} className="bio-arrow" aria-hidden="true" />
          </a>
          <a className="bio-button bio-button-secondary" href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <span className="bio-button-icon"><Instagram size={24} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>Conheça nossos trabalhos</span>
            <ArrowUpRight size={19} className="bio-arrow" aria-hidden="true" />
          </a>
          <a className="bio-button bio-button-secondary" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            <span className="bio-button-icon"><MapPin size={25} strokeWidth={1.9} aria-hidden="true" /></span>
            <span>Como chegar</span>
            <ArrowUpRight size={19} className="bio-arrow" aria-hidden="true" />
          </a>
        </section>

        <section className="bio-benefits" aria-labelledby="bio-benefits-title">
          <p className="bio-section-kicker">CUIDADO QUE FAZ A DIFERENÇA</p>
          <h2 id="bio-benefits-title">Por que escolher a <span>Brito Detail?</span></h2>
          <div className="bio-benefit-list">
            <div className="bio-benefit">
              <span className="bio-benefit-icon"><CarFront size={21} aria-hidden="true" /></span>
              <div><strong>Seu veículo em destaque</strong><p>Valorize a aparência e o cuidado com seu veículo.</p></div>
            </div>
            <div className="bio-benefit">
              <span className="bio-benefit-icon"><ShieldCheck size={21} aria-hidden="true" /></span>
              <div><strong>Atendimento dedicado</strong><p>Atenção e carinho do primeiro contato ao resultado.</p></div>
            </div>
            <div className="bio-benefit">
              <span className="bio-benefit-icon"><Star size={21} aria-hidden="true" /></span>
              <div><strong>Capricho em cada detalhe</strong><p>Uma experiência pensada para quem ama seu carro.</p></div>
            </div>
          </div>
        </section>

        <section className="bio-location" aria-label="Nosso endereço">
          <div className="bio-location-header">
            <span className="bio-location-icon"><MapPin size={22} aria-hidden="true" /></span>
            <div>
              <p className="bio-section-kicker">VENHA NOS VISITAR</p>
              <h2>Onde estamos</h2>
            </div>
          </div>
          <address>Rua do Tucano, 114<br />Bairro Catiara, Amargosa – BA</address>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="bio-location-link">
            Abrir no Google Maps <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <footer className="bio-footer">
          <div className="bio-footer-mark">BD</div>
          <strong>BRITO DETAIL</strong>
          <span>Amargosa, Bahia</span>
        </footer>
      </div>
    </main>
  );
}
