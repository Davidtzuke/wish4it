import { Box, Lock, Search, Settings, Sparkles, Zap, Shield, MessageSquare, ShoppingCart } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export default function FeaturesPage() {
  return (
    <div className="container py-16 min-h-screen space-y-16">
      {/* Main feature section with large card containing title */}
      <section className="max-w-6xl mx-auto">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border-glow-dark dark:border-border-glow-dark light:border-border-glow-light p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="lg:w-1/3">
                <div className="w-fit rounded-lg border-[0.75px] border-border-glow-dark dark:border-border-glow-dark light:border-border-glow-light bg-transparent p-2 mb-4">
                  <Box className="h-4 w-4" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-left">What it is</h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-muted text-lg leading-relaxed">
                  Plug-and-play AI shopping assistants for SMEs. EU-hosted small language models + retrieval (RAG) to reduce hallucinations and enable
                  fast, personalized discovery-to-checkout — right inside the chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid section */}
      <section className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold tracking-tight mb-8 text-center">Key Features</h3>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Zap className="h-4 w-4" />}
            title="Plug-and-Play Integration"
            description="Widget or full chat without a rebuild. Seamlessly integrate into your existing e-commerce platform."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4" />}
            title="RAG + Small Language Models"
            description="Smaller EU models with retrieval for accuracy. Reduce hallucinations and improve response quality."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<ShoppingCart className="h-4 w-4" />}
            title="Checkout in Chat"
            description="From intent → purchase in one flow. Complete transactions without leaving the conversation."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Shield className="h-4 w-4" />}
            title="GDPR Compliance"
            description="Privacy by design, EU data residency. Built with European privacy standards in mind."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<MessageSquare className="h-4 w-4" />}
            title="Personalized Guidance"
            description="Reduce friction → fewer abandoned carts. Provide personalized assistance without hiring more staff."
          />
        </ul>
      </section>

    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border-glow-dark dark:border-border-glow-dark light:border-border-glow-light p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border-glow-dark dark:border-border-glow-dark light:border-border-glow-light bg-transparent p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold tracking-tight md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
