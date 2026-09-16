import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  UserRound,
  UsersRound,
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
}

interface JobWorkflowProps {
  booking: DemoBooking | null;
}

type JobStatus =
  | "booking"
  | "job-created"
  | "staff-assigned";

const staffMembers = [
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

function JobWorkflow({ booking }: JobWorkflowProps) {
  const [status, setStatus] =
    useState<JobStatus>("booking");

  const [selectedStaff, setSelectedStaff] =
    useState("");

  if (!booking) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <BriefcaseBusiness
          size={28}
          className="text-slate-400"
        />

        <h2 className="mt-5 text-xl font-semibold">
          No booking to convert yet
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Create a booking from the customer website first.
          It will appear here ready to become a job.
        </p>
      </div>
    );
  }

  const handleCreateJob = () => {
    const job = {
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

    sessionStorage.setItem(
      "builtv-demo-job",
      JSON.stringify(job),
    );

    setStatus("job-created");
  };

  const handleAssignStaff = () => {
    if (!selectedStaff) return;

    const storedJob =
      sessionStorage.getItem("builtv-demo-job");

    if (!storedJob) return;

    const job = JSON.parse(storedJob);

    const staff = staffMembers.find(
      (member) => member.id === selectedStaff,
    );

    const updatedJob = {
      ...job,
      assignedStaff: staff,
      status: "Assigned",
    };

    sessionStorage.setItem(
      "builtv-demo-job",
      JSON.stringify(updatedJob),
    );

    setStatus("staff-assigned");
  };

  return (
    <div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          Operational Workflow
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Turn the booking into a job
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Follow the booking from customer request to staff
          assignment.
        </p>
      </div>

      {/* Progress */}
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <ProgressCard
          number="01"
          title="Booking"
          active
          complete
        />

        <ProgressCard
          number="02"
          title="Job Created"
          active={status !== "booking"}
          complete={status !== "booking"}
        />

        <ProgressCard
          number="03"
          title="Staff Assigned"
          active={status === "staff-assigned"}
          complete={status === "staff-assigned"}
        />
      </div>

      {/* Booking */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <UserRound
                size={17}
                className="text-sky-600"
              />

              <p className="font-semibold">
                {booking.customer.name}
              </p>
            </div>

            <p className="mt-3 text-lg font-semibold">
              {booking.service}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {booking.date} · {booking.time}
            </p>
          </div>

          {status === "booking" && (
            <button
              type="button"
              onClick={handleCreateJob}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white"
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
            <UsersRound className="text-sky-600" />

            <div>
              <h3 className="font-semibold">
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
                    setSelectedStaff(staff.id)
                  }
                  className={`rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-sky-500 bg-sky-50"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                    {staff.name.charAt(0)}
                  </div>

                  <p className="mt-4 text-sm font-semibold">
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
            className={`mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold ${
              selectedStaff
                ? "bg-slate-950 text-white"
                : "cursor-not-allowed bg-slate-100 text-slate-400"
            }`}
          >
            Assign Technician
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Completed */}
      {status === "staff-assigned" && (
        <div className="mt-6 rounded-2xl bg-slate-950 p-7 text-white">
          <CheckCircle2
            size={30}
            className="text-emerald-400"
          />

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Job Ready
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Staff assigned successfully.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            The customer booking has now moved from an
            appointment into an assigned operational job.
          </p>
        </div>
      )}
    </div>
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