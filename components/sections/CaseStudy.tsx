import { Icon } from "@iconify/react";
import { CASE_STUDY } from "@/lib/constants";

export function CaseStudy() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 mb-24">
      <div className="bg-neutral-900 rounded-[32px] overflow-hidden text-white relative">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#D4FF33 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-vedic-lime animate-pulse" />
              <span className="text-vedic-lime text-xs font-mono uppercase tracking-widest">
                {CASE_STUDY.badge}
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-medium tracking-tight mb-6">
              {CASE_STUDY.title}
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
              {CASE_STUDY.description}
            </p>
            <div className="flex gap-8">
              {CASE_STUDY.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code/Visual Block */}
          <div className="relative lg:translate-y-8 lg:translate-x-8">
            <div className="bg-[#0f0f0f] border border-neutral-800 rounded-tl-2xl rounded-tr-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-[#0f0f0f]">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-neutral-500 font-mono">
                  revenue_dashboard.tsx
                </div>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed text-neutral-400">
                <div className="flex gap-4 mb-4 pb-4 border-b border-white/5">
                  {CASE_STUDY.dashboard.stats.map((stat) => (
                    <div key={stat.label} className="w-1/2 bg-white/5 rounded p-3">
                      <div className="text-[10px] text-neutral-500 uppercase mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xl text-white font-bold">
                        {stat.value}
                      </div>
                      <div
                        className={`text-[10px] mt-1 ${
                          stat.changeColor === "lime"
                            ? "text-vedic-lime"
                            : "text-green-500"
                        }`}
                      >
                        {stat.changeColor === "lime" ? "↑" : ""} {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {CASE_STUDY.dashboard.logs.map((log, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center p-2 rounded ${
                        log.status === "success"
                          ? "bg-green-500/10 border border-green-500/20"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={
                          log.status === "success" ? "text-green-400" : ""
                        }
                      >
                        {log.status === "success" ? "✓ " : ""}
                        {log.message}
                      </span>
                      <span className="text-[10px]">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
