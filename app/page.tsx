"use client";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <section className="container py-28 min-h-screen grid place-items-center text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 text-sm uppercase tracking-widest text-muted">Wish4It™</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 text-center">Chat.Choose.Checkout.</h1>
        <p className="mb-8 text-muted">
          Coming soon — join the waitlist before launch and get 1 month free.
        </p>
        <p className="text-xs sm:text-sm text-muted mb-8 text-center">Plug and play shopping assistants for e-commerce</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <a href="/contact" className="rounded-lg bg-white/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:bg-white/20 transition-colors">Join Waitlist</a>
          <button 
            onClick={() => setOpen(true)} 
            className="rounded-lg border border-border px-6 py-3 hover:bg-white/10 transition-colors"
            type="button"
          >
            Watch Explanation
          </button>
          <a href="/features" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-white/10 transition-colors">See More</a>
        </div>
      </div>

      {open && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" 
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-3xl rounded-lg border border-border bg-surface p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Wish4It™ — Explanation</h4>
              <button 
                onClick={() => setOpen(false)} 
                className="rounded-md bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors"
                type="button"
              >
                Close
              </button>
            </div>
            <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
              <iframe 
                src="https://drive.google.com/file/d/1EPhhgDyKlhA2gSnUGWJ0mO5DVMjIy5VF/preview" 
                className="w-full h-full"
                allow="autoplay"
                title="Wish4It Explanation Video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
