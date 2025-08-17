import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight, Sparkles, PenTool, Palette, Monitor } from 'lucide-react'

// Simple cursor-follow glow effect (ACE-like vibe)
function CursorGlow() {
  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--glow-x', x + '%')
      document.documentElement.style.setProperty('--glow-y', y + '%')
      document.documentElement.style.setProperty('--glow-opacity', '0.6')
    }
    const fade = () => document.documentElement.style.setProperty('--glow-opacity', '0.35')
    window.addEventListener('mousemove', handle)
    window.addEventListener('scroll', fade)
    return () => { window.removeEventListener('mousemove', handle); window.removeEventListener('scroll', fade) }
  }, [])
  return <div className="glow-overlay" aria-hidden="true" />
}

const container = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.6, ease: 'easeOut' } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const projects = [
  { title: 'Gym Logo — Future Fit', tag: 'Logo Design', img: '/images/future-fit.jpg' },
  { title: 'Instagram Reels Pack', tag: 'Social Media', img: '/images/reels-pack.jpg' },
  { title: 'Flyer — Event Promo', tag: 'Print Design', img: '/images/flyer.jpg' },
  { title: 'Brand Kit — Minimal', tag: 'Branding', img: '/images/brand-kit.jpg' },
]

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#05060a] to-black text-white">
      <CursorGlow />
      <header className="sticky top-0 z-20 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-xl">Ashish Kumar</a>
          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <Sparkles size={16} /> Let’s work
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="section-edge" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <p className="text-brand-300/90 text-sm font-medium tracking-widest uppercase">Bring Your Vision To Life</p>
              <h1 className="font-display text-4xl md:text-6xl leading-tight font-extrabold">
                I design bold <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">brands</span> & scroll-stopping content.
              </h1>
              <p className="text-white/70 max-w-xl">
                Freelance graphic designer crafting logos, social media content, and print that converts. Clean aesthetics, aggressive energy when needed.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#work" className="card card-hover px-4 py-2 inline-flex items-center gap-2">
                  View work <ArrowUpRight size={16} />
                </a>
                <a href="#services" className="px-4 py-2 inline-flex items-center gap-2 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  What I do
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="card p-6 aspect-[4/3] flex items-center justify-center">
                <span className="text-white/50">Add your hero image/video here</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-10">
            <motion.h2 variants={item} className="text-2xl md:text-4xl font-bold">Services</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={item} className="card card-hover p-6 space-y-3">
                <PenTool /> 
                <h3 className="text-lg font-semibold">Logo & Identity</h3>
                <p className="text-white/70">Aggressive, modern, or minimal — crafted to fit your brand’s voice.</p>
              </motion.div>
              <motion.div variants={item} className="card card-hover p-6 space-y-3">
                <Palette />
                <h3 className="text-lg font-semibold">Branding & Print</h3>
                <p className="text-white/70">Flyers, posters, brand kits — designed to stand out online & offline.</p>
              </motion.div>
              <motion.div variants={item} className="card card-hover p-6 space-y-3">
                <Monitor />
                <h3 className="text-lg font-semibold">Social Media Design</h3>
                <p className="text-white/70">Reels covers, carousel posts, ad creatives — optimized for engagement.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">Selected Work</h2>
            <a href="#contact" className="text-white/70 hover:text-white text-sm">Need something specific? Let’s talk</a>
          </div>
          <motion.div className="grid md:grid-cols-2 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {projects.map((p, i) => (
              <motion.a key={i} variants={item} href="#" className="group card card-hover overflow-hidden">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <img src={p.img} alt={p.title} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <span className="text-white/40 absolute">Add {p.title} image to /public/images</span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-white/60 text-sm">{p.tag}</p>
                  </div>
                  <ArrowUpRight />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <div className="card p-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">About</h2>
                <p className="text-white/70">
                  I’m Ashish Kumar, a freelance graphic designer. I help startups, creators, and local businesses sharpen their brand and ship designs fast.
                </p>
                <p className="text-white/70 mt-3">
                  Tools: Illustrator, Photoshop, Canva, basic Figma. Fast iterations, clean files, and clear communication.
                </p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="card p-6 aspect-[4/3] flex items-center justify-center">
                <span className="text-white/50">Add your portrait / studio shot here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="card p-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Let’s build something</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="mailto:ashish@example.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Mail size={18}/> ashish@example.com
                </a><br/>
                <a href="tel:+91-00000-00000" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Phone size={18}/> +91 00000 00000
                </a><br/>
                <a href="https://instagram.com/fitmindsetdaily" className="inline-flex items-center gap-2 text-white/80 hover:text-white" target="_blank" rel="noreferrer">
                  <Instagram size={18}/> @fitmindsetdaily
                </a><br/>
                <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white" target="_blank" rel="noreferrer">
                  <Linkedin size={18}/> LinkedIn
                </a>
              </div>
              <form className="space-y-4" method="POST" action="https://formspree.io/f/your-form-id">
                <div className="grid md:grid-cols-2 gap-3">
                  <input name="name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400/60" placeholder="Your name" required />
                  <input name="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400/60" placeholder="Email" type="email" required />
                </div>
                <input name="subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400/60" placeholder="Subject" />
                <textarea name="message" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400/60" rows="5" placeholder="Tell me about your project..." required />
                <button type="submit" className="px-5 py-3 rounded-xl bg-brand-500/90 hover:bg-brand-500 transition font-semibold">Send</button>
                <p className="text-xs text-white/50">Replace <code>your-form-id</code> with your Formspree ID to receive submissions.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ashish Kumar — All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
