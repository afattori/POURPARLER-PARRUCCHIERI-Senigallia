import { ArrowDown, ArrowUpRight, Camera, Clock3, MapPin, Phone, Quote, Sparkles, Star } from 'lucide-react';

const services = [
  { n: '01', title: 'Degradè & Gradient', text: 'Sfumature costruite su misura per dare profondità, luce e naturalezza al tuo colore.' },
  { n: '02', title: 'Taglio verticale', text: 'Movimento e leggerezza attraverso una tecnica che segue la forma e la personalità dei capelli.' },
  { n: '03', title: 'Taglio uomo', text: 'Linee pulite, dettagli precisi e uno stile che funziona anche fuori dal salone.' },
  { n: '04', title: 'Acconciatura', text: 'Raccolti e styling per eventi, moda, spettacolo e per tutte le occasioni da ricordare.' },
];

const reviews = [
  { text: 'Persone meravigliose e professionisti davvero preparati.', label: 'Recensione Google' },
  { text: 'Ragazze molto cordiali, grande professionalità e disponibilità!', label: 'Recensione Google' },
  { text: 'Lo staff è molto professionale, esperto e vi accoglie con gentilezza e simpatia.', label: 'Recensione Google' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Navigazione principale">
        <a className="brand" href="#top" aria-label="Pourparler Parrucchieri, torna all'inizio"><img src="/logo-mark.png" alt="" /><span>PourParler</span></a>
        <div className="nav-links"><a href="#chi-siamo">Chi Siamo</a><a href="#servizi">Servizi</a><a href="#dal-salone">Dal Salone</a><a href="#contatti">Contatti</a></div>
        <a className="nav-cta" href="tel:+390717923619">Prenota <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb" aria-hidden="true"><span /><span /></div>
        <div className="hero-content">
          <p className="eyebrow">Hair studio · Senigallia</p>
          <h1>Il tuo stile,<br /><em>la nostra firma.</em></h1>
          <p className="hero-copy">Colore, taglio e cura si incontrano in uno spazio autentico, professionale e sempre un passo avanti.</p>
          <div className="hero-actions"><a className="primary-button" href="tel:+390717923619"><Phone size={18} /> Chiamaci</a><a className="text-link" href="https://maps.app.goo.gl/mkHhGCmcYSf3s9q58" target="_blank" rel="noreferrer"><MapPin size={18} /> Come arrivare</a></div>
        </div>
        <a className="scroll-hint" href="#chi-siamo"><ArrowDown size={16} /> Scopri lo studio</a>
        <div className="rating-pill"><Star size={15} fill="currentColor" /><strong>4,8</strong><span>· 46 recensioni</span></div>
        <p className="vertical-note">POURPARLER PARRUCCHIERI · SENIGALLIA</p>
      </section>

      <section className="studio about" id="chi-siamo">
        <div className="about-inner">
          <div className="studio-copy"><div className="section-label light">Chi siamo</div><p className="eyebrow">Il nostro modo</p><h2>Un salone dove sentirsi <em>ascoltati.</em></h2><p>La tecnica è il nostro punto di partenza. Il dialogo, l’aggiornamento costante e l’attenzione per chi abbiamo davanti sono ciò che rende ogni risultato davvero personale.</p><div className="values"><span>Esperienza</span><span>Ricerca</span><span>Gentilezza</span></div></div>
          <div className="instagram-embed about-instagram"><iframe src="https://www.instagram.com/p/DYpS4Q_jDOq/embed/?img_index=1" title="Post Instagram di PourParler Parrucchieri" loading="lazy" allowFullScreen></iframe><div className="embed-mask" aria-hidden="true"></div></div>
        </div>
      </section>

      <section className="intro" id="servizi">
        <div className="section-label">Servizi</div>
        <div className="intro-copy"><h2>Ogni capello ha una storia.<br /><em>Le diamo la forma giusta.</em></h2></div>
        <div className="services-grid">
          {services.map((service) => <article className="service-card" key={service.n}><span className="service-number">{service.n}</span><Sparkles size={19} /><h3>{service.title}</h3><p>{service.text}</p><a href="tel:+390717923619" aria-label={`Prenota ${service.title}`}>Parliamone <ArrowUpRight size={15} /></a></article>)}
        </div>
      </section>

      <section className="salon-section" id="dal-salone" aria-labelledby="salon-title">
        <div className="salon-feature">
          <div className="studio-art"><img className="studio-photo" src="/capelli-castani.png" alt="Capelli castani mossi con sfumature luminose realizzati da PourParler" /></div>
          <div className="instagram-copy"><div className="section-label light">Dal salone</div><p className="eyebrow">I nostri lavori</p><h2 id="salon-title">Colore, ispirazione<br />e vita di <em>salone.</em></h2><p>Scopri gli ultimi lavori e lasciati ispirare dal mondo PourParler.</p><a className="primary-button pale" href="https://www.instagram.com/pourparler.senigallia/" target="_blank" rel="noreferrer"><Camera size={18} /> Vai al profilo Instagram</a></div>
        </div>
        <div className="reviews salon-reviews">
          <div className="review-heading"><div className="section-label">Dicono di noi</div><div><div className="big-rating">4,8 <span>/ 5</span></div><p><Star size={16} fill="currentColor" /> 46 recensioni su Google</p></div></div>
          <div className="review-grid">{reviews.map((review) => <blockquote key={review.text}><Quote size={24} /><p>“{review.text}”</p><footer>{review.label}</footer></blockquote>)}</div>
          <a className="text-link review-link" href="https://maps.app.goo.gl/mkHhGCmcYSf3s9q58" target="_blank" rel="noreferrer">Leggi tutte le recensioni <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="contact" id="contatti">
        <div className="contact-title"><p className="eyebrow">Passa a trovarci</p><h2>Il prossimo look<br />inizia da una <em>chiacchierata.</em></h2><a className="primary-button pale" href="tel:+390717923619"><Phone size={18} /> 071 792 3619</a></div>
        <div className="contact-details">
          <div className="detail"><MapPin /><div><span>Dove siamo</span><p>Viale Anita Garibaldi, 81<br />60019 Senigallia AN</p><a href="https://maps.app.goo.gl/mkHhGCmcYSf3s9q58" target="_blank" rel="noreferrer">Apri su Maps <ArrowUpRight size={14} /></a></div></div>
          <div className="detail"><Clock3 /><div><span>Orari</span><p>Mar — Sab <strong>09:00 — 18:00</strong><br />Dom — Lun <strong>Chiuso</strong></p></div></div>
          <div className="detail"><Camera /><div><span>Seguici</span><p>Novità, colore e vita di salone.</p><a href="https://www.instagram.com/pourparler.senigallia/" target="_blank" rel="noreferrer">@pourparler.senigallia <ArrowUpRight size={14} /></a></div></div>
        </div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#top"><img src="/logo-mark.png" alt="" /><span>PourParler</span></a><p>Salute · Bellezza · Stile</p><a href="#top">Torna su ↑</a></footer>
      <a className="mobile-sticky" href="tel:+390717923619"><Phone size={17} /> Prenota ora</a>
    </main>
  );
}
