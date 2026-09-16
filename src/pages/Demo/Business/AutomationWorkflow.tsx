import {  useState } from "react";
import {
  BellRing,
  CheckCircle2,
  Database,
  Mail,
  Sparkles,
} from "lucide-react";

type AutomationStatus = "waiting" | "running" | "complete";

interface AutomationItem {
  id: number;
  title: string;
  description: string;
  icon: typeof BellRing;
}

const automations: AutomationItem[] = [
  {
    id: 1,
    title: "Customer notification",
    description: "Booking confirmation sent to the customer.",
    icon: BellRing,
  },
  {
    id: 2,
    title: "CRM updated",
    description: "Customer and job information synced automatically.",
    icon: Database,
  },
  {
    id: 3,
    title: "Team notification",
    description: "Assigned technician notified about the job.",
    icon: Mail,
  },
  {
    id: 4,
    title: "Follow-up scheduled",
    description: "Post-job follow-up prepared automatically.",
    icon: Sparkles,
  },
];

function AutomationWorkflow() {
  const jobExists = Boolean(
  sessionStorage.getItem("builtv-demo-job"),
);

const automationAlreadyComplete =
  sessionStorage.getItem("builtv-demo-automations") ===
  "complete";

const [status, setStatus] = useState<AutomationStatus>(
  automationAlreadyComplete ? "complete" : "waiting",
);

const [completed, setCompleted] = useState<number[]>(
  automationAlreadyComplete
    ? automations.map((item) => item.id)
    : [],
);

  const runAutomations = () => {
    if (!jobExists || status === "running") return;

    setStatus("running");
    setCompleted([]);

    automations.forEach((item, index) => {
      window.setTimeout(() => {
        setCompleted((current) => [...current, item.id]);

        if (index === automations.length - 1) {
          sessionStorage.setItem(
            "builtv-demo-automations",
            "complete",
          );

          setStatus("complete");
        }
      }, (index + 1) * 650);
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
            Operations + AI
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Automate what happens next
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Once the job is created and assigned, BuiltV can
            trigger the next operational actions automatically.
          </p>
        </div>

        <button
          type="button"
          disabled={!jobExists || status === "running"}
          onClick={runAutomations}
          className={`min-h-12 rounded-xl px-5 text-sm font-semibold transition ${
            jobExists && status !== "running"
              ? "bg-slate-950 text-white hover:bg-slate-800"
              : "cursor-not-allowed bg-slate-100 text-slate-400"
          }`}
        >
          {status === "running"
            ? "Running..."
            : status === "complete"
              ? "Run Again"
              : "Run Automations"}
        </button>
      </div>

      {!jobExists && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Create and assign a job first to unlock this workflow.
        </div>
      )}

      <div className="mt-8 space-y-3">
        {automations.map((item) => {
          const Icon = item.icon;
          const done = completed.includes(item.id);

          return (
            <div
              key={item.id}
              className={`flex items-start gap-4 rounded-xl border p-4 transition ${
                done
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  done
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-white text-slate-500"
                }`}
              >
                {done ? (
                  <CheckCircle2 size={19} />
                ) : (
                  <Icon size={19} />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold">
                  {item.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </div>

              <span className="ml-auto text-xs font-semibold">
                {done ? (
                  <span className="text-emerald-700">
                    Complete
                  </span>
                ) : status === "running" ? (
                  <span className="text-slate-400">
                    Waiting
                  </span>
                ) : (
                  <span className="text-slate-400">
                    Pending
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>

      {status === "complete" && (
        <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
          <div className="flex items-center gap-2 text-violet-400">
            <Sparkles size={18} />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Workflow Complete
            </span>
          </div>

          <h3 className="mt-3 text-xl font-semibold">
            Four manual tasks handled automatically.
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            The job can now continue through one connected
            operational workflow.
          </p>
        </div>
      )}
    </div>
  );
}

export default AutomationWorkflow;