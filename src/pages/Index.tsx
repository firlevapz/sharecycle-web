import { RefreshCw, ShoppingBag, Wrench, Gift, BookOpen, Search, ShieldCheck, Database, MapPin, Globe, Calendar, MessageCircle, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <RefreshCw className="h-4 w-4" />
            Open Source & Decentralized
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Share<span className="text-primary">cycle</span>
          </h1>
          <p className="text-xl lg:text-2xl font-display italic text-muted-foreground">
            Ownership is overrated. Access is everything.
          </p>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            The open-source, decentralized platform for sharing goods and services within your real-world community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">Get Started</Button>
            <Button variant="hero-outline" size="lg">Request a Hosted Instance</Button>
            <Button variant="ghost" size="lg" className="gap-2">
              View on GitHub <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Community members sharing tools, books, and resources in a neighborhood" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ways = [
  { icon: ShoppingBag, title: "Sell", desc: "Pass on what you no longer need.", color: "text-secondary" },
  { icon: Wrench, title: "Rent", desc: "Turn your idle tools or gear into extra income.", color: "text-primary" },
  { icon: Gift, title: "Give Away", desc: "Declutter with a conscience and help a neighbor.", color: "text-amber" },
  { icon: BookOpen, title: "Borrow", desc: "Save money and space by sourcing items temporarily.", color: "text-forest" },
  { icon: Search, title: "Search", desc: "Find local services—from dog walking to web design—provided by real people.", color: "text-muted-foreground" },
];

const FiveWays = () => (
  <section className="bg-card py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-4xl mb-4">🔄</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          One Platform. Five Ways to Connect.
        </h2>
        <p className="text-lg text-muted-foreground">
          Why buy new when your neighbor has exactly what you need? Sharecycle turns your local area into a living library of resources.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {ways.map((w) => (
          <div key={w.title} className="group rounded-xl bg-background p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <w.icon className={`h-8 w-8 mb-4 ${w.color}`} />
            <h3 className="text-lg font-bold text-foreground mb-2">{w.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const trustFeatures = [
  { icon: ShieldCheck, title: "Verified Humans", desc: "Secure SSO-logins (Google, GitHub, Apple, etc.) ensure everyone is who they say they are." },
  { icon: Database, title: "Data Sovereignty", desc: "Your data is stored on the platform, not sold to third-party advertisers." },
  { icon: MapPin, title: "Regional Focus", desc: "Algorithms don't decide what you see; your physical proximity does." },
];

const Trust = () => (
  <section className="bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-4xl mb-4">🛡️</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Built on Trust, Not Algorithms
        </h2>
        <p className="text-lg text-muted-foreground">
          We believe the local economy should be powered by humans, not bots or data-miners.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {trustFeatures.map((f) => (
          <div key={f.title} className="text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const fediverseFeatures = [
  { icon: Globe, title: "ActivityPub Integration", desc: "As part of the Fediverse, your local instance can talk to others. Follow listings and interact across the decentralized web." },
  { icon: Calendar, title: "CalDAV Booking", desc: "Sync rentals and service appointments directly to your favorite calendar (Apple, Google, Outlook, or Proton)." },
  { icon: MessageCircle, title: "Chat Where You Are", desc: "Get instant notifications and manage inquiries through our bot-integrations for Telegram, Discord, Slack, or Matrix." },
];

const Fediverse = () => (
  <section className="bg-forest text-forest-foreground py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-4xl mb-4">🌐</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          The Power of the Fediverse
        </h2>
        <p className="text-lg opacity-80">
          Sharecycle isn't another "walled garden" app. We play well with others.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {fediverseFeatures.map((f) => (
          <div key={f.title} className="rounded-xl bg-forest-foreground/10 backdrop-blur-sm border border-forest-foreground/20 p-6 space-y-4">
            <f.icon className="h-8 w-8 text-amber" />
            <h3 className="text-lg font-bold">{f.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Support = () => (
  <section className="bg-card py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-4xl mb-4">🌱</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Support the Circular Revolution
        </h2>
        <p className="text-lg text-muted-foreground">
          Sharecycle is AGPL-licensed and community-funded. No venture capital, just community value.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-xl bg-background border border-border p-8 space-y-4">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">For Communities</span>
          <h3 className="text-xl font-bold text-foreground">Request a Hosted Instance</h3>
          <p className="text-muted-foreground leading-relaxed">
            Want to start a Sharecycle hub for your neighborhood, hobbyist club, or town? We'll handle the hosting, security, and updates so you can focus on building your community.
          </p>
          <Button variant="hero" className="mt-4">Get Started</Button>
        </div>
        <div className="rounded-xl bg-background border border-border p-8 space-y-4">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary">For Individuals</span>
          <h3 className="text-xl font-bold text-foreground">The Supporter License</h3>
          <p className="text-muted-foreground leading-relaxed">
            Self-hosting? You can still help us keep the code open and the features coming. A one-time payment grants you a lifetime Supporter License and our eternal gratitude.
          </p>
          <Button variant="hero-outline" className="mt-4">Support Us</Button>
        </div>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="bg-background py-20 lg:py-24">
    <div className="container mx-auto px-6">
      <blockquote className="max-w-3xl mx-auto text-center">
        <p className="text-2xl lg:text-3xl font-display italic text-foreground leading-relaxed">
          "Sharecycle isn't just an app; it's a handshake in digital form. It's about knowing your neighbor and keeping resources within the community loop."
        </p>
      </blockquote>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-primary py-20 lg:py-24">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-8">
        Ready to close the loop?
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" size="lg" className="font-semibold">Explore the Demo</Button>
        <Button size="lg" className="bg-forest text-forest-foreground hover:bg-forest/90 font-semibold">Join the Fediverse</Button>
        <Button size="lg" className="bg-amber text-amber-foreground hover:bg-amber/90 font-semibold">
          <Heart className="h-4 w-4" /> Get Your Supporter License
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          <span className="font-display text-lg font-bold">Sharecycle</span>
        </div>
        <p className="text-sm opacity-60">
          AGPL-licensed · Community-funded · Made with care
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Hero />
    <FiveWays />
    <Trust />
    <Fediverse />
    <Support />
    <Quote />
    <CTA />
    <Footer />
  </div>
);

export default Index;
