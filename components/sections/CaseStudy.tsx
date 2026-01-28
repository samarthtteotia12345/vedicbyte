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

          {/* Marketing Dashboard */}
          <div className="relative lg:translate-y-8 lg:translate-x-8">
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 bg-neutral-50">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:chart-2-bold" className="text-vedic-lime" width={20} />
                  <span className="text-sm font-medium text-neutral-800">
                    Campaign Analytics
                  </span>
                </div>
                <span className="text-xs text-neutral-500">This Quarter</span>
              </div>
              <div className="p-5">
                <div className="flex gap-4 mb-5">
                  {CASE_STUDY.dashboard.stats.map((stat) => (
                    <div key={stat.label} className="flex-1 bg-neutral-50 rounded-xl p-4">
                      <div className="text-xs text-neutral-500 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs mt-1 font-medium ${
                          stat.changeColor === "lime"
                            ? "text-green-600"
                            : "text-green-600"
                        }`}
                      >
                        ↑ {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {CASE_STUDY.dashboard.activities.map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activity.type === "campaign"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-blue-100 text-blue-600"
                        }`}>
                          <Icon
                            icon={activity.type === "campaign"
                              ? "solar:rocket-linear"
                              : "solar:videocamera-record-linear"
                            }
                            width={16}
                          />
                        </div>
                        <span className="text-sm text-neutral-700">{activity.message}</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">{activity.result}</span>
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
