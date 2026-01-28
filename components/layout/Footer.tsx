import { Icon } from "@iconify/react";
import { FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-6">
      <div className="border-t border-neutral-200 pt-12 pb-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-neutral-900 text-vedic-lime rounded flex items-center justify-center">
              <Icon icon="solar:code-square-linear" width={14} />
            </div>
            <span className="font-display font-bold text-lg">Vedicbyte</span>
          </div>
          <p className="text-sm text-neutral-500">{FOOTER.description}</p>
        </div>

        <div className="flex gap-12 lg:gap-24 flex-wrap">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {FOOTER.services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-neutral-900">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {FOOTER.company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-neutral-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Social
            </h4>
            <div className="flex gap-4 text-neutral-400">
              <a href="#" className="hover:text-neutral-900">
                <Icon icon="solar:plain-linear" width={20} />
              </a>
              <a href="#" className="hover:text-neutral-900">
                <Icon icon="solar:basketball-linear" width={20} />
              </a>
              <a href="#" className="hover:text-neutral-900">
                <Icon icon="solar:link-circle-linear" width={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-100 py-6 text-center md:text-left text-xs text-neutral-400 flex flex-col md:flex-row justify-between">
        <p>{FOOTER.copyright}</p>
        <div className="flex gap-4 justify-center md:justify-end mt-2 md:mt-0">
          <a href="#" className="hover:text-neutral-600">
            Privacy
          </a>
          <a href="#" className="hover:text-neutral-600">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
