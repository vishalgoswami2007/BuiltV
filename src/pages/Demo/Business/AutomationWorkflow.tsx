import { useEffect, useRef, useState } from "react";
import {
  BellRing,
  CheckCircle2,
  Database,
  Mail,
  Play,
  RefreshCw,
  Sparkles,
  UserRound,
  UsersRound,
  Workflow,
} from "lucide-react";

type AutomationStatus =
  | "locked"
  | "waiting"
  | "running"
  | "complete";

interface StaffMember {
  id: string;
  name: string;
  role: string;
}

interface StoredJob {
  id: string;
  bookingId: string;
  service: string;
  date: string;
  time: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  status: "Created" | "Assigned";
  assignedStaff: StaffMember | null;
  createdAt: string;
}

interface AutomationItem {
  id: number;
  title: string;
  description: string;
  icon: typeof BellRing;
}

const automations: AutomationItem[] = [
  {
    id: 1,
    title: "Customer confirmation",
    description:
      "A confirmation is prepared for the customer with their appointment details.",
    icon: BellRing,
  },
  {
    id: 2,
    title: "Business records updated",
    description:
      "Customer, booking and job information are synchronised into the workflow.",
    icon: Database,
  },
  {
    id: 3,
    title: "Technician notification",
    description:
      "The assigned technician is notified with the job details and schedule.",
    icon: UsersRound,
  },
  {
    id: 4,
    title: "Customer follow-up scheduled",
    description:
      "A post-job follow-up is prepared for the next stage of the customer journey.",
    icon: Mail,
  },
];

function getStoredJob(): StoredJob | null {
  try {
    const stored = sessionStorage.getItem(
      "builtv-demo-job",
    );

    if (!stored) return null;

    return JSON.parse(stored) as StoredJob;
  } catch {
    return null;
  }
}

function isJobAssigned(job: StoredJob | null) {
  return Boolean(
    job &&
      job.status === "Assigned" &&
      job.assignedStaff,
  );
}

function AutomationWorkflow() {
  const [job] = useState<StoredJob | null>(() =>
    getStoredJob(),
  );

  const assigned = isJobAssigned(job);

  const automationAlreadyComplete =
    sessionStorage.getItem(
      "builtv-demo-automations",
    ) === "complete";

  const [status, setStatus] =
    useState<AutomationStatus>(() => {
      if (!assigned) return "locked";

      return automationAlreadyComplete
        ? "complete"
        : "waiting";
    });

  const [completed, setCompleted] = useState<number[]>(
    () =>
      assigned && automationAlreadyComplete
        ? automations.map((item) => item.id)
        : [],
  );

  const [activeAutomation, setActiveAutomation] =
    useState<number | null>(null);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, []);

  const runAutomations = () => {
    if (!assigned || status === "running") {
      return;
    }

    timersRef.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    timersRef.current = [];

    sessionStorage.removeItem(
      "builtv-demo-automations",
    );

    setStatus("running");
    setCompleted([]);
    setActiveAutomation(automations[0].id);

    automations.forEach((item, index) => {
      const timer = window.setTimeout(() => {
        setCompleted((current) => {
          if (current.includes(item.id)) {
            return current;
          }

          return [...current, item.id];
        });

        const nextAutomation =
          automations[index + 1];

        if (nextAutomation) {
          setActiveAutomation(
            nextAutomation.id,
          );
        } else {
          setActiveAutomation(null);

          sessionStorage.setItem(
            "builtv-demo-automations",
            "complete",
          );

          setStatus("complete");
        }
      }, (index + 1) * 850);

      timersRef.current.push(timer);
    });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">
                <Sparkles size={12} />
                Operations + AI
              </span>

              {assigned && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  <CheckCircle2 size={12} />
                  Job Connected
                </span>
              )}
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Automate what happens next
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              See how an assigned job can trigger connected
              operational actions without repeating the same
              manual work across multiple systems.
            </p>
          </div>

          <button
            type="button"
            disabled={
              !assigned || status === "running"
            }
            onClick={runAutomations}
            className={`flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition ${
              assigned && status !== "running"
                ? "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            {status === "running" ? (
              <>
                <RefreshCw
                  size={16}
                  className="animate-spin"
                />
                Running Workflow
              </>
            ) : status === "complete" ? (
              <>
                <RefreshCw size={16} />
                Run Again
              </>
            ) : (
              <>
                <Play size={16} />
                Run Automation
              </>
            )}
          </button>
        </div>

        {/* Locked State */}
        {!assigned && (
          <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-700">
                <Workflow size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-amber-950">
                  Automation is waiting for an
                  assigned job
                </p>

                <p className="mt-1 text-xs leading-5 text-amber-800">
                  Create the job and assign a
                  technician first. That operational
                  event unlocks the next workflow.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Job Context */}
        {assigned && job && (
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <UserRound size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Customer
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-950">
                {job.customer.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {job.service}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <UsersRound size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Assigned Technician
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-950">
                {job.assignedStaff?.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {job.assignedStaff?.role}
              </p>
            </div>
          </div>
        )}

        {/* Flow Heading */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Live Workflow
            </p>

            <h3 className="mt-1 text-sm font-semibold text-slate-950">
              Connected actions
            </h3>
          </div>

          {status === "running" && (
            <span className="flex items-center gap-2 text-xs font-semibold text-violet-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>

              Processing
            </span>
          )}
        </div>

        {/* Automations */}
        <div className="mt-4 space-y-3">
          {automations.map((item, index) => {
            const Icon = item.icon;

            const done =
              completed.includes(item.id);

            const running =
              activeAutomation === item.id &&
              status === "running";

            return (
              <div
                key={item.id}
                className={`relative flex items-start gap-4 overflow-hidden rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                  done
                    ? "border-emerald-200 bg-emerald-50"
                    : running
                      ? "border-violet-300 bg-violet-50 ring-2 ring-violet-100"
                      : "border-slate-200 bg-slate-50"
                }`}
              >
                {running && (
                  <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-violet-100">
                    <div className="h-full w-1/2 animate-pulse bg-violet-500" />
                  </div>
                )}

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                    done
                      ? "bg-emerald-100 text-emerald-700"
                      : running
                        ? "bg-violet-100 text-violet-700"
                        : "bg-white text-slate-500"
                  }`}
                >
                  {done ? (
                    <CheckCircle2 size={19} />
                  ) : running ? (
                    <RefreshCw
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <Icon size={19} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-slate-400">
                          0{index + 1}
                        </span>

                        <p className="text-sm font-semibold text-slate-950">
                          {item.title}
                        </p>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {done ? (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                          <CheckCircle2 size={14} />
                          Complete
                        </span>
                      ) : running ? (
                        <span className="text-xs font-semibold text-violet-700">
                          Running
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete State */}
      {status === "complete" && (
        <div className="border-t border-white/10 bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={18} />

                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Workflow Complete
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                The operational workflow is connected.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Customer confirmation, business
                records, technician notification and
                follow-up have moved through one
                guided automation sequence.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Sparkles size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  4 / 4 complete
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Demo workflow
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AutomationWorkflow;