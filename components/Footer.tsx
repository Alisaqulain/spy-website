import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { FOOTER_LINKS, CONTACT, SITE_NAME } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-white/80 mb-6 max-w-sm leading-relaxed">
              Your trusted partner in risk management and insurance broking. We deliver corporate and retail solutions with expertise, transparency, and excellence.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/80 hover:text-accent-gold transition-colors">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent-gold transition-colors">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                {CONTACT.email}
              </a>
              <p className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                {CONTACT.address}
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Corporate</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.corporate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Retail & Industry</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.retail.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-gold transition-colors">{link.label}</Link>
                </li>
              ))}
              {FOOTER_LINKS.industry.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">© {year} {SITE_NAME}. All rights reserved.</p>
              <p className="text-white/50 text-xs mt-1">CIN: XXXXXXXXXX | IRDA License No: XXXXX</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {FOOTER_LINKS.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/60 hover:text-accent-gold text-sm transition-colors">{link.label}</Link>
              ))}
              <span className="text-white/40">|</span>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-gold flex items-center justify-center transition-colors text-white">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
