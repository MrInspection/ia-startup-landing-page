import SiteHeader from "@/components/site-header";
import {HeroSection} from "@/components/hero-section";
import {LogoTicker} from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import {CallToAction} from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import {GithubIndicator} from "@/components/github-indicator";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <HeroSection />
            <LogoTicker />
            <Features />
            <Testimonials />
            <CallToAction />
            <GithubIndicator />
            <SiteFooter />
        </>
    );
}
