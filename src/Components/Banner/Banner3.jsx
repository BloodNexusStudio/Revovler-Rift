import React, { useState, useEffect, useRef } from "react";

// === Replace these with your actual asset paths ===
import FeatureImg from "../../assets/newassets/9.png";
import CardImg1 from "../../assets/newassets/7.png";

// --- Small UI bits ---
const Badge = ({ children }) => (
  <span className="inline-block rounded bg-white/10 px-2 py-1 text-[11px] tracking-wide uppercase text-[#e4d6c3]">
    {children}
  </span>
);

// Image helper (fills container; no black margins)
const ImgFill = ({ src, alt, className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="block h-full w-full object-cover will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      loading="lazy"
    />
  </div>
);

// --- Accessible Modal (shared) ---
const Modal = ({ open, onClose, title, image, children }) => {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rr-modal-title"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl ring-1 ring-white/5">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-sm text-[#e4d6c3] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          ✕
        </button>

        {/* Image left, content right; stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:h-[520px]">
            <ImgFill src={image} alt={title} />
          </div>
          <div className="max-h-[70vh] md:max-h-[520px] overflow-y-auto p-6 sm:p-8">
            <h3 id="rr-modal-title" className="font-vintage text-2xl sm:text-3xl text-[#e4d6c3]">
              {title}
            </h3>
            <div className="mt-4 space-y-4 text-[#d0c4b0] leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Cards ---
const FeatureCard = ({
  image, category, title, meta, excerpt, onOpen, className = ""
}) => (
  <article
    onClick={onOpen}
    className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl ring-1 ring-white/5 transition hover:border-white/20 cursor-pointer h-full md:flex ${className}`}
  >
    {/* Media column — equal height via flex */}
    <div className="w-full md:w-1/2 md:min-h-[420px]">
      {/* mobile: keep aspect; md+: fill column */}
      <div className="aspect-[16/9] md:aspect-auto md:h-full">
        <ImgFill src={image} alt={title} />
      </div>
    </div>

    {/* Text column */}
    <div className="flex w-full md:w-1/2 flex-col justify-between p-7 md:p-8">
      <div className="space-y-3">
        <Badge>{category}</Badge>
        <h3 className="font-vintage text-3xl md:text-[34px] leading-tight text-[#e4d6c3]">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-[#c6b8a3]">{meta}</p>
        <p className="mt-1 text-base md:text-lg text-[#d0c4b0]">
          {excerpt} From war-torn streets to supernatural chaos, every encounter
          forces hard choices—survival, power, and the cost of your soul.
        </p>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onOpen(); }}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-[#e4d6c3] transition hover:border-white/20 hover:bg-white/5"
      >
        Read more →
      </button>
    </div>
  </article>
);

/**
 * CompactCard – styled to match your reference layout:
 * - Top banner image (fixed height), rounded top corners, no gaps
 * - Thin divider strip under the image
 * - Tight stack: badge → title → blurb → CTA/date
 */
const CompactCard = ({
  image, badge, title, meta, excerpt, onOpen, className = ""
}) => (
  <article
    onClick={onOpen}
    className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl ring-1 ring-white/5 transition hover:border-white/20 cursor-pointer ${className}`}
  >
    {/* Top banner image */}
    <div className="h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-t-2xl">
      <ImgFill src={image} alt={title} />
    </div>

    {/* Subtle divider like the reference */}
    <div className="h-[2px] bg-white/5" />

    {/* Content */}
    <div className="p-6 space-y-3">
      <div className="text-[11px] tracking-wide uppercase text-[#bfb29a]/90">
        <Badge>{badge}</Badge>
      </div>

      <h4 className="font-vintage text-2xl leading-snug text-[#e4d6c3]">
        {title}
      </h4>

      <p className="text-sm text-[#c6b8a3]">
        {excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs text-[#e4d6c3] transition hover:border-white/20 hover:bg-white/5"
        >
          Read more →
        </button>
        <span className="text-xs text-[#8f8473]">{meta}</span>
      </div>
    </div>
  </article>
);

// --- Section ---
const RiftCards = () => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1500px] px-8 md:px-12 lg:px-16">
        <h2 className="mb-12 text-center font-vintage text-4xl md:text-5xl tracking-wide text-[#e4d6c3]">
          Latest From The Rift
        </h2>

        {/* Equal heights on desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {/* Feature spans 2 cols */}
          <div className="md:col-span-2 h-full">
            <FeatureCard
              image={FeatureImg}
              category="FEATURE"
              title="What Makes Revolver Rift Unique"
              meta="a day ago"
              excerpt="This is not your typical shooter. A war-torn 1944 collides with the supernatural—two factions, evolving objectives, and choices with teeth."
              onOpen={() => setOpenFeature(true)}
              className="h-full"
            />
          </div>

          {/* Right card */}
          <div className="md:col-span-1 h-full">
            <CompactCard
              image={CardImg1}
              badge="FACTIONS"
              title="Two Forces. No Mercy."
              meta="3 days ago"
              excerpt="When the Rift tore open in 1944, Heaven and Hell sent their own soldiers. Two factions fight for relics, power, and the fate of mankind—pick your side."
              onOpen={() => setOpenRight(true)}
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* Feature modal */}
      <Modal
        open={openFeature}
        onClose={() => setOpenFeature(false)}
        title="What Makes Revolver Rift Unique"
        image={FeatureImg}
      >
        <p><strong>This is not your typical shooter:</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Alternate History Warfare:</strong> Fight in a gritty, war-torn 1944 where the supernatural collides with World War II.</li>
          <li><strong>Light vs. Darkness:</strong> Choose your side — the righteous Cleric Deputys or the brutal Cursed Hell Deputys; each with unique playstyles, Perks, and twisted morality.</li>
          <li><strong>Catch the enemies:</strong> Track enemies by supernatural Perks, sound, skill, and strategy. Every fight is earned.</li>
          <li><strong>Dynamic Objectives:</strong> Artifacts, VIP rescues, demonic bosses, anomalies, Arena, Rift Royal, Warmup — only what you extract survives.</li>
          <li><strong>Risk &amp; Power Systems:</strong> Devil’s Chair deals, Rift Storm chaos, and fate-shaping choices.</li>
          <li><strong>Style Meets Grit:</strong> WWII weapons meet supernatural gear. Blood, tension, and tactical decisions define every moment.</li>
        </ul>
        <p className="mt-4">Enter the Rift. Fight for your soul. Extract — or die trying.</p>
      </Modal>

      {/* Right card modal */}
      <Modal
        open={openRight}
        onClose={() => setOpenRight(false)}
        title="Two Forces. No Mercy. — Choose Your Side"
        image={CardImg1}
      >
        <p>
          When the Rift tore through reality in 1944, Heaven and Hell unleashed their own soldiers to claim what was left of Earth. Two factions now wage a brutal war for power, relics, and the fate of mankind.
        </p>
        <h4 className="mt-4 font-vintage text-xl text-[#e4d6c3]">The Cleric Deputies</h4>
        <p>
          Holy doesn’t mean gentle. The Clerics are Heaven’s chosen — a militant order of righteous assassins sent to cleanse the Rift with fire, faith, and steel.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Tactical, disciplined, and unforgiving</li>
          <li>Blessed gear and sanctified abilities</li>
          <li>Fight for purity — or die trying</li>
        </ul>
      </Modal>
    </section>
  );
};

export default RiftCards;
