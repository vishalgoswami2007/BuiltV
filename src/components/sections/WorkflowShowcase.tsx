import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import workflowVideo from "../../assets/videos/workflow.mp4";

const workflowSteps = [
  "Customer enquiry",
  "Smart quote",
  "Booking",
  "Job delivery",
  "Payment",
  "Follow-up",
];

function WorkflowShowcase() {
  return (
    <section className="bg-[#0A0D12] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-sky-300">
              Connected systems
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Your business doesn't need more disconnected tools.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-400">
              It needs one better system. BuiltV connects the steps between a
              new enquiry and a completed job so less work gets lost in
              between.
            </p>

            <div className="mt-9 max-w-md">
              {workflowSteps.map((step, index) => (
                <div key={step}>
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                    <span className="text-xs font-medium text-sky-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-white">
                      {step}
                    </span>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <div className="flex h-7 items-center pl-5">
                      <ArrowDown size={14} className="text-slate-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/solutions"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
            >
              Explore business solutions
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video
              src={workflowVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full min-h-96 w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-sky-300">
                  BuiltV Systems
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                  From scattered manual steps to one connected digital
                  workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkflowShowcase;