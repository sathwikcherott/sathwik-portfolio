import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Menu, MoveRight, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    index: '01', name: 'Kanak', kind: 'Offline expense tracking',
    detail: 'A considered money companion designed for fast capture, clear records, and calm financial habits.',
    tags: ['Android', 'Compose', 'Offline-first'], tone: 'lime',
  },
  {
    index: '02', name: 'PattuBook', kind: 'A modern personal ledger',
    detail: 'A focused ledger experience that makes tracking people, balances, and payments feel straightforward.',
    tags: ['Android', 'Room', 'Material'], tone: 'violet',
  },
]

const play = [
  ['01', 'System studies', 'Small explorations in hierarchy, spacing, and visual rhythm.', Layers3],
  ['02', 'Motion sketches', 'Interfaces that use movement to orient, not distract.', Sparkles],
  ['03', 'Build notes', 'Turning practical constraints into product character.', Code2],
]

function Reveal({ children, className = '' }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export default function App() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const nav = ['Work', 'About', 'Playground', 'Contact']
  return <main>
    <div className="grain" aria-hidden="true" />
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Sathwik Cherott, home"><span>S</span> SATHWIK</a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>
      <a className="nav-link" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <a onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>}
    </header>

    <section id="top" className="hero section-pad">
      <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
      <Reveal className="eyebrow"><span className="pulse" /> Available for thoughtful collaborations</Reveal>
      <Reveal className="hero-title"><p>I build</p><h1>digital experiences<br /><em>with intent.</em></h1></Reveal>
      <Reveal className="hero-bottom">
        <p>Independent product builder working at the intersection of useful technology, clear systems, and crafted interfaces.</p>
        <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a>
      </Reveal>
      {!reduced && <div className="hero-marks" aria-hidden="true"><span>SC / 26</span><span>001—PORTFOLIO</span></div>}
    </section>

    <section id="work" className="section-pad work-section">
      <Reveal><p className="kicker">SELECTED WORK <span>(02)</span></p></Reveal>
      <div className="project-list">{projects.map((project) => <Reveal key={project.name}>
        <article className={`project ${project.tone}`}>
          <div className="project-meta"><span>{project.index}</span><span>{project.kind}</span></div>
          <div className="project-copy"><h2>{project.name}</h2><p>{project.detail}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <div className="project-art" aria-hidden="true"><div className="device"><i /><i /><b /></div></div>
          <a className="project-open" href="https://github.com/sathwikcherott" target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight /></a>
        </article>
      </Reveal>)}</div>
    </section>

    <section id="about" className="about section-pad">
      <Reveal className="about-stamp"><span>ABOUT</span><div>SC</div></Reveal>
      <Reveal className="about-copy"><p className="large-copy">I care about the small decisions that make a product feel <em>inevitable.</em></p><p className="body-copy">From the first interaction to the last detail, I work across product thinking, interface design, and Android development to make digital tools more useful and more human.</p><a className="text-link" href="#contact">More about my approach <MoveRight size={18} /></a></Reveal>
    </section>

    <section id="playground" className="section-pad playground">
      <Reveal><p className="kicker">DESIGN PLAYGROUND <span>(03)</span></p></Reveal>
      <div className="play-grid">{play.map(([num, title, text, Icon]) => <Reveal key={num} className="play-card"><span>{num}</span><Icon strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="tiny-arrow" size={18} /></Reveal>)}</div>
    </section>

    <section id="contact" className="contact section-pad">
      <Reveal><p className="kicker">GET IN TOUCH</p><h2>Have a good<br />idea in mind?</h2><a className="contact-link" href="https://github.com/sathwikcherott" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight /></a></Reveal>
      <footer><span>© {new Date().getFullYear()} SATHWIK CHEROTT</span><a href="https://github.com/sathwikcherott" target="_blank" rel="noreferrer"><Code2 size={16} /> GITHUB</a><a href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
    </section>
  </main>
}
