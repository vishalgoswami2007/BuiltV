import {  useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  UserRound,
  UsersRound,
  Workflow,
} from "lucide-react";

interface DemoBooking {
  id: string;
  service: string;
  date: string;
  time: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  status: string;
  source?: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
}

interface DemoJob {
  id: string;
  bookingId: string;
  service: string;
  date: string;
  time: string;
  customer: DemoBooking["customer"];
  status: "Created" | "Assigned";
  assignedStaff: StaffMember | null;
  createdAt: string;
}

interface JobWorkflowProps {
  booking: DemoBooking | null;
}

type JobStatus =
  | "booking"
  | "job-created"
  | "staff-assigned";

const staffMembers: StaffMember[] = [
  {
    id: "staff-1",
    name: "Alex Morgan",
    role: "Senior Technician",
  },
  {
    id: "staff-2",
    name: "Jamie Wilson",
    role: "Service Technician",
  },
  {
    id: "staff-3",
    name: "Taylor Smith",
    role: "Field Specialist",
  },
];

function getStoredJobs(): DemoJob[] {
  try {
    const storedJobs = sessionStorage.getItem(
      "builtv-demo-jobs",
    );

    if (storedJobs) {
      const parsed = JSON.parse(storedJobs);

      if (Array.isArray(parsed)) {
        return parsed as DemoJob[];
      }
    }

    /*
     * Backward compatibility with the old
     * single-job storage.
     */
    const oldStoredJob =
      sessionStorage.getItem("builtv-demo-job");

    if (!oldStoredJob) {
      return [];
    }

    const oldJob = JSON.parse(
      oldStoredJob,
    ) as DemoJob;

    return [oldJob];
  } catch {
    return [];
  }
}

function saveJobs(jobs: DemoJob[]) {
  sessionStorage.setItem(
    "builtv-demo-jobs",
    JSON.stringify(jobs),
  );
}

function getStoredJob(
  booking: DemoBooking | null,
): DemoJob | null {
  if (!booking) return null;

  const jobs = getStoredJobs();

  return (
    jobs.find(
      (job) => job.bookingId === booking.id,
    ) ?? null
  );
}

function getInitialStatus(
  booking: DemoBooking | null,
): JobStatus {
  const storedJob = getStoredJob(booking);

  if (!storedJob) {
    return "booking";
  }

  if (storedJob.assignedStaff) {
    return "staff-assigned";
  }

  return "job-created";
}

function JobWorkflow({
  booking,
}: JobWorkflowProps) {
  const [status, setStatus] =
    useState<JobStatus>(() =>
      getInitialStatus(booking),
    );

  const [selectedStaff, setSelectedStaff] =
    useState<string>(() => {
      const storedJob = getStoredJob(booking);

      return storedJob?.assignedStaff?.id ?? "";
    });

  /*
   * Keeps the workflow correct if the active
   * booking changes while the component is mounted.
   */
  

  const isAiBooking =
    booking?.source ===
    "AI Customer Agent Demo";

  const storedJob = getStoredJob(booking);

  const assignedStaff =
    storedJob?.assignedStaff ?? null;

  if (!booking) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <BriefcaseBusiness size={23} />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-slate-950">
          No booking to convert yet
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Create a booking from the customer
          experience first. It will appear here
          ready to become an operational job.
        </p>
      </div>
    );
  }

  const handleCreateJob = () => {
    const existingJobs = getStoredJobs();

    /*
     * Don't create duplicate jobs for the same
     * booking.
     */
    const existingJob = existingJobs.find(
      (job) => job.bookingId === booking.id,
    );

    if (existingJob) {
      if (existingJob.assignedStaff) {
        setSelectedStaff(
          existingJob.assignedStaff.id,
        );
        setStatus("staff-assigned");
      } else {
        setStatus("job-created");
      }

      return;
    }

    const job: DemoJob = {
      id: `JOB-${Date.now()}`,
      bookingId: booking.id,
      service: booking.service,
      date: booking.date,
      time: booking.time,
      customer: booking.customer,
      status: "Created",
      assignedStaff: null,
      createdAt: new Date().toISOString(),
    };

    const updatedJobs = [
      job,
      ...existingJobs,
    ];

    saveJobs(updatedJobs);

    /*
     * Keep latest job available for the existing
     * AutomationWorkflow.
     */
    sessionStorage.setItem(
      "builtv-demo-job",
      JSON.stringify(job),
    );

    setSelectedStaff("");
    setStatus("job-created");
  };

  const handleAssignStaff = () => {
    if (!selectedStaff) return;

    const jobs = getStoredJobs();

    const jobIndex = jobs.findIndex(
      (job) => job.bookingId === booking.id,
    );

    if (jobIndex === -1) return;

    const staff = staffMembers.find(
      (member) =>
        member.id === selectedStaff,
    );

    if (!staff) return;

    const updatedJob: DemoJob = {
      ...jobs[jobIndex],
      assignedStaff: staff,
      status: "Assigned",
    };

    const updatedJobs = [...jobs];

    updatedJobs[jobIndex] = updatedJob;

    saveJobs(updatedJobs);

    /*
     * AutomationWorkflow still reads this key,
     * so keep the active/latest job synced.
     */
    sessionStorage.setItem(
      "builtv-demo-job",
      JSON.stringify(updatedJob),
    );

    setStatus("staff-assigned");
  };

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
              Operational Workflow
            </p>

            {isAiBooking && (
              <span className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
                <Sparkles size={11} />
                AI Origin
              </span>
            )}
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Turn the booking into a job
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Follow the customer request from
            booking through job creation and staff
            assignment.
          </p>
        </div>

        {status === "staff-assigned" && (
          <span className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
            <CheckCircle2 size={15} />
            Operations connected
          </span>
        )}
      </div>

      {/* Connected Journey */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Connected Journey
          </p>
        </div>

        <div className="flex flex-col gap-3 p-4 lg:flex-row lg:items-center lg:gap-2">
          <JourneyStep
            icon={
              isAiBooking
                ? Bot
                : UserRound
            }
            label={
              isAiBooking
                ? "AI Conversation"
                : "Customer Request"
            }
            complete
          />

          <JourneyArrow />

          <JourneyStep
            icon={CheckCircle2}
            label="Booking"
            complete
          />

          <JourneyArrow />

          <JourneyStep
            icon={BriefcaseBusiness}
            label="Job Created"
            complete={
              status !== "booking"
            }
          />

          <JourneyArrow />

          <JourneyStep
            icon={UsersRound}
            label="Staff Assigned"
            complete={
              status ===
              "staff-assigned"
            }
          />

          <JourneyArrow />

          <JourneyStep
            icon={Workflow}
            label="Automation"
            complete={false}
            highlight={
              status ===
              "staff-assigned"
            }
          />
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ProgressCard
          number="01"
          title="Booking"
          active
          complete
        />

        <ProgressCard
          number="02"
          title="Job Created"
          active={
            status !== "booking"
          }
          complete={
            status !== "booking"
          }
        />

        <ProgressCard
          number="03"
          title="Staff Assigned"
          active={
            status ===
            "staff-assigned"
          }
          complete={
            status ===
            "staff-assigned"
          }
        />
      </div>

      {/* Active Booking */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <UserRound
                  size={17}
                  className="text-sky-600"
                />

                <p className="font-semibold text-slate-950">
                  {booking.customer.name}
                </p>
              </div>

              {isAiBooking && (
                <span className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
                  <Sparkles size={11} />
                  AI Agent
                </span>
              )}
            </div>

            <p className="mt-3 text-lg font-semibold text-slate-950">
              {booking.service}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {booking.date} · {booking.time}
            </p>

            {isAiBooking && (
              <p className="mt-3 max-w-lg text-xs leading-5 text-violet-700">
                This appointment was captured by
                the AI Customer Agent and
                automatically entered the connected
                business workflow.
              </p>
            )}
          </div>

          {status === "booking" && (
            <button
              type="button"
              onClick={handleCreateJob}
              className="flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Create Job
              <ArrowRight size={16} />
            </button>
          )}

          {status !== "booking" && (
            <span className="flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 size={15} />
              Job Created
            </span>
          )}
        </div>
      </div>

      {/* Staff Assignment */}
      {status === "job-created" && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <UsersRound size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-950">
                Assign staff
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Choose a team member for this job.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {staffMembers.map((staff) => {
              const active =
                selectedStaff === staff.id;

              return (
                <button
                  key={staff.id}
                  type="button"
                  onClick={() =>
                    setSelectedStaff(
                      staff.id,
                    )
                  }
                  className={`rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-sky-500 bg-sky-50 ring-2 ring-sky-100"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      {staff.name.charAt(0)}
                    </div>

                    {active && (
                      <CheckCircle2
                        size={18}
                        className="text-sky-600"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-sm font-semibold text-slate-950">
                    {staff.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {staff.role}
                  </p>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!selectedStaff}
            onClick={handleAssignStaff}
            className={`mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition ${
              selectedStaff
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            Assign Technician
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Staff Assigned */}
      {status === "staff-assigned" && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950 text-white">
          <div className="p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
              <CheckCircle2 size={25} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Job Ready
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Staff assigned successfully.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              The customer booking has moved from
              an appointment into an assigned
              operational job.
            </p>

            {assignedStaff && (
              <div className="mt-6 flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-950">
                  {assignedStaff.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {assignedStaff.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {assignedStaff.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Automation Handoff */}
          <div className="border-t border-white/10 bg-white/3 p-6 sm:px-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Ready for automation
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
                    The operational job is now ready
                    to trigger confirmations,
                    reminders, follow-ups and other
                    connected workflows.
                  </p>
                </div>
              </div>

              <span className="flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs font-semibold text-violet-300">
                <Workflow size={14} />
                Next: Automation
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface JourneyStepProps {
  icon: typeof UserRound;
  label: string;
  complete: boolean;
  highlight?: boolean;
}

function JourneyStep({
  icon: Icon,
  label,
  complete,
  highlight = false,
}: JourneyStepProps) {
  return (
    <div
      className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl border px-4 py-3 ${
        complete
          ? "border-emerald-200 bg-emerald-50"
          : highlight
            ? "border-violet-200 bg-violet-50"
            : "border-slate-200 bg-slate-50"
      }`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          complete
            ? "bg-emerald-100 text-emerald-700"
            : highlight
              ? "bg-violet-100 text-violet-700"
              : "bg-white text-slate-400"
        }`}
      >
        {complete ? (
          <CheckCircle2 size={15} />
        ) : (
          <Icon size={15} />
        )}
      </div>

      <p
        className={`truncate text-xs font-semibold ${
          complete
            ? "text-emerald-800"
            : highlight
              ? "text-violet-800"
              : "text-slate-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

function JourneyArrow() {
  return (
    <ChevronRight
      size={15}
      className="hidden shrink-0 text-slate-300 lg:block"
    />
  );
}

interface ProgressCardProps {
  number: string;
  title: string;
  active: boolean;
  complete: boolean;
}

function ProgressCard({
  number,
  title,
  active,
  complete,
}: ProgressCardProps) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-sky-200 bg-sky-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
            complete
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {complete ? (
            <CheckCircle2 size={15} />
          ) : (
            number
          )}
        </div>

        <p className="text-sm font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
}

export default JobWorkflow;