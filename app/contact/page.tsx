export default function ContactPage() {
  return (
    <div className="container py-16 min-h-screen">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Join the Waitlist</h2>
        <p className="text-muted">Be among the first to try Wish4It™. Get notified when we launch!</p>
      </div>

      <div className="spotlight-card max-w-2xl mx-auto p-6">
        <form
          action="https://formspree.io/f/xjkabjjy"
          method="POST"
          className="grid gap-4"
        >
          <div>
            <label className="text-sm text-muted">Your email:</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="mt-1 w-full rounded-md border border-border bg-black/30 px-3 py-2 outline-none focus:border-white/60" 
            />
          </div>
          <div>
            <label className="text-sm text-muted">Your message:</label>
            <textarea 
              name="message" 
              rows={4}
              placeholder="Tell us about your business or any questions..."
              className="mt-1 w-full rounded-md border border-border bg-black/30 px-3 py-2 outline-none focus:border-white/60 resize-none" 
            />
          </div>
          <button 
            type="submit" 
            className="rounded-lg bg-white/10 px-5 py-2 hover:bg-white/20 transition-colors"
          >
            Join Waitlist
          </button>
        </form>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-8">
        <p className="text-muted">
          Or email us: <a className="underline hover:text-text" href="mailto:wish4it.eu@gmail.com">wish4it.eu@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
