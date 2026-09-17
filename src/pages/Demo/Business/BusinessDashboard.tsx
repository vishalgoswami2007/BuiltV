import { useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import JobWorkflow from "./JobWorkflows";
import AutomationWorkflow from "./AutomationWorkflow";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Sparkles,
  UserRound,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

import {
  industryConfig,
  type IndustryId,
} from "../industryConfig";

interface StoredDemoConfig {
  businessName: string;
  industry: IndustryId;
  theme: string;
  package: "starter" | "pro" | "operations-ai";
  currency: string;
}

interface DemoBooking {
  id: string;
  businessName: string;
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
  createdAt: string;
}

type DashboardTab =
  | "Overview"
  | "Bookings"
  | "Jobs"
  | "Customers"
  | "Staff"
  | "Payments";

const navItems = [
  {
    label: "Overview" as const,
    icon: LayoutDashboard,
  },
  {
    label: "Bookings" as const,
    icon: CalendarDays,
  },
  {
    label: "Jobs" as const,
    icon: BriefcaseBusiness,
  },
  {
    label: "Customers" as const,
    icon: UserRound,
  },
  {
    label: "Staff" as const,
    icon: UsersRound,
  },
  {
    label: "Payments" as const,
    icon: CreditCard,
  },
];

function getStoredConfig(): StoredDemoConfig | null {
  try {
    const stored = sessionStorage.getItem(
      "builtv-demo-config",
    );

    if (!stored) return null;

    return JSON.parse(stored) as StoredDemoConfig;
  } catch {
    return null;
  }
}

function getStoredBooking(): DemoBooking | null {
  try {
    const stored = sessionStorage.getItem(
      "builtv-demo-booking",
    );

    if (!stored) return null;

    return JSON.parse(stored) as DemoBooking;
  } catch {
    return null;
  }
}

function getStoredBookings(): DemoBooking[] {
  try {
    const stored = sessionStorage.getItem(
      "builtv-demo-bookings",
    );

    if (stored) {
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        return parsed as DemoBooking[];
      }
    }

    /*
     * Backward compatibility:
     * if an older demo only has one stored booking,
     * still show it in the new dashboard.
     */
    const oldBooking = getStoredBooking();

    return oldBooking ? [oldBooking] : [];
  } catch {
    const oldBooking = getStoredBooking();

    return oldBooking ? [oldBooking] : [];
  }
}

function formatBookingDate(date: string) {
  if (!date) return "No date";

  const parsedDate = new Date(`${date}T12:00:00`);

  return parsedDate.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

function BusinessDashboard() {
  const [config] = useState<StoredDemoConfig | null>(() =>
    getStoredConfig(),
  );

  const [bookings] = useState<DemoBooking[]>(() =>
    getStoredBookings(),
  );

  /*
   * Latest booking remains the active booking for
   * Job → Staff → Automation.
   */
  const booking = bookings[0] ?? null;

  const [activeTab, setActiveTab] =
    useState<DashboardTab>("Overview");

  const [
    mobileSidebarOpen,
    setMobileSidebarOpen,
  ] = useState(false);

  const industry = useMemo(() => {
    if (!config) return null;

    return industryConfig[config.industry];
  }, [config]);

  const customerCount = useMemo(() => {
    const customers = new Set(
      bookings.map((item) =>
        item.customer.email.trim().toLowerCase(),
      ),
    );

    return customers.size;
  }, [bookings]);

  const uniqueCustomers = useMemo(() => {
    const customers = new Map<
      string,
      DemoBooking["customer"]
    >();

    bookings.forEach((item) => {
      const key =
        item.customer.email.trim().toLowerCase() ||
        item.customer.phone.trim();

      if (!customers.has(key)) {
        customers.set(key, item.customer);
      }
    });

    return Array.from(customers.values());
  }, [bookings]);

  if (!config || !industry) {
    return <Navigate to="/demo" replace />;
  }

  const businessInitial =
    config.businessName.charAt(0).toUpperCase() || "B";

  const isAiBooking =
    booking?.source === "AI Customer Agent Demo";

  return (
    <main className="min-h-svh bg-[#f5f7fa] text-slate-950">
      {/* BuiltV Controller */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050608] text-white">
        <div className="mx-auto flex min-h-11 items-center justify-between px-4 sm:px-6">
          <Link
            to="/demo/experience"
            className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Customer View
          </Link>

          <div className="hidden text-xs text-slate-500 sm:block">
            {config.package === "operations-ai"
              ? "BuiltV Operations + AI Experience"
              : "BuiltV Business Pro Experience"}
          </div>

          <Link
            to="/demo"
            className="text-xs font-semibold tracking-wide"
          >
            BuiltV
          </Link>
        </div>
      </div>

      <div className="flex min-h-[calc(100svh-44px)]">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-100 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                {businessInitial}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {config.businessName}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  {industry.label}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-3">
            <p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  activeTab === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      setActiveTab(item.label)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                      active
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-slate-100 p-3">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 transition hover:bg-slate-100"
            >
              <Settings size={18} />
              Settings
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close sidebar"
              onClick={() =>
                setMobileSidebarOpen(false)
              }
              className="absolute inset-0 bg-black/40"
            />

            <aside className="relative h-full w-72 bg-white p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {config.businessName}
                  </p>

                  <p className="text-xs text-slate-500">
                    {config.package ===
                    "operations-ai"
                      ? "Operations + AI"
                      : "Business Pro"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileSidebarOpen(false)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mt-7 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active =
                    activeTab === item.label;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setActiveTab(item.label);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                        active
                          ? "bg-slate-950 text-white"
                          : "text-slate-600"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Dashboard */}
        <section className="min-w-0 flex-1">
          {/* Header */}
          <header className="border-b border-slate-200 bg-white">
            <div className="flex min-h-20 items-center justify-between gap-4 px-5 sm:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSidebarOpen(true)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
                >
                  <Menu size={18} />
                </button>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {config.package ===
                    "operations-ai"
                      ? "OPERATIONS + AI"
                      : "BUSINESS PRO"}
                  </p>

                  <h1 className="mt-1 text-lg font-semibold">
                    {activeTab}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 md:flex">
                  <Search
                    size={16}
                    className="text-slate-400"
                  />

                  <span className="text-xs text-slate-400">
                    Search workspace
                  </span>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                  {businessInitial}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="mx-auto max-w-7xl p-5 sm:p-8">
            {/* OVERVIEW */}
            {activeTab === "Overview" && (
              <>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-sm text-slate-500">
                      Welcome back
                    </p>

                    <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                      {config.businessName}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Here&apos;s what&apos;s happening
                      across your business.
                    </p>
                  </div>

                  <div className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500">
                    Demo workspace
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard
                    icon={CalendarDays}
                    label="New bookings"
                    value={
                      bookings.length > 0
                        ? String(bookings.length)
                        : "—"
                    }
                    helper={
                      bookings.length > 0
                        ? `${bookings.length} confirmed ${
                            bookings.length === 1
                              ? "appointment"
                              : "appointments"
                          }`
                        : "Create a booking first"
                    }
                  />

                  <StatCard
                    icon={BriefcaseBusiness}
                    label="Job status"
                    value={booking ? "Ready" : "—"}
                    helper={
                      booking
                        ? "Latest booking ready for assignment"
                        : "Waiting for a booking"
                    }
                  />

                  <StatCard
                    icon={UsersRound}
                    label="Customers"
                    value={
                      customerCount > 0
                        ? String(customerCount)
                        : "—"
                    }
                    helper={
                      customerCount > 0
                        ? `${customerCount} unique ${
                            customerCount === 1
                              ? "customer"
                              : "customers"
                          }`
                        : "No customers yet"
                    }
                  />

                  <StatCard
                    icon={CircleDollarSign}
                    label="Payment"
                    value="Pending"
                    helper="Demo workflow"
                  />
                </div>

                {/* Main Grid */}
                <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
                  {/* Recent Bookings */}
                  <div className="rounded-2xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between border-b border-slate-100 p-5">
                      <div>
                        <h3 className="font-semibold">
                          Recent bookings
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          Latest customer activity
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveTab("Bookings")
                        }
                        className="flex items-center gap-1 text-xs font-semibold text-slate-600"
                      >
                        View all
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    <div className="space-y-3 p-5">
                      {bookings.length > 0 ? (
                        bookings
                          .slice(0, 4)
                          .map((item) => {
                            const itemIsAi =
                              item.source ===
                              "AI Customer Agent Demo";

                            return (
                              <BookingCard
                                key={item.id}
                                booking={item}
                                isAi={itemIsAi}
                              />
                            );
                          })
                      ) : (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <p className="text-sm font-semibold text-slate-700">
                            No bookings yet
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Create a booking from the
                            customer experience.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Workflow */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Booking workflow
                    </p>

                    <h3 className="mt-2 font-semibold">
                      What happens next
                    </h3>

                    <div className="mt-6 space-y-5">
                      <WorkflowItem
                        number="01"
                        title={
                          isAiBooking
                            ? "AI booking received"
                            : "Booking received"
                        }
                        description={
                          booking
                            ? isAiBooking
                              ? "AI Customer Agent sent the latest booking into the workspace."
                              : "Latest customer booking entered the workspace."
                            : "Waiting for a customer booking."
                        }
                        completed={Boolean(booking)}
                      />

                      <WorkflowItem
                        number="02"
                        title="Create job"
                        description="Turn the latest booking into an operational job."
                      />

                      <WorkflowItem
                        number="03"
                        title="Assign staff"
                        description="Schedule the right team member."
                      />

                      <WorkflowItem
                        number="04"
                        title="Automate operations"
                        description="Trigger the connected operational workflow."
                      />
                    </div>
                  </div>
                </div>

                {/* Connected System */}
                {booking && (
                  <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                          BuiltV Connected System
                        </p>

                        <h3 className="mt-3 text-xl font-semibold">
                          {bookings.length > 1
                            ? `${bookings.length} customer bookings are now connected to the workspace.`
                            : isAiBooking
                              ? "The AI-created booking is already here."
                              : "The customer booking is already here."}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                          The latest confirmed appointment
                          is ready to move directly into
                          job creation, staff scheduling
                          and connected operations.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveTab("Jobs")
                        }
                        className="flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black"
                      >
                        Continue to Jobs
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* JOBS + AUTOMATION */}
            {activeTab === "Jobs" && (
              <div className="space-y-8">
                <JobWorkflow booking={booking} />

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />

                  <div className="flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">
                    <Sparkles size={12} />
                    Connected Automation
                  </div>

                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <AutomationWorkflow />

                <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

                  <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                          Operations + AI
                        </span>

                        <span className="text-xs text-slate-500">
                          Connected Experience
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                        One customer journey. One
                        connected system.
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        From the first customer
                        conversation to booking, staff
                        assignment and operational
                        automation, BuiltV connects the
                        workflow around the way your
                        service business operates.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {[
                          "AI Customer Agent",
                          "Booking",
                          "Job Management",
                          "Staff Scheduling",
                          "Workflow Automation",
                        ].map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      Build My System
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="relative mt-8 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {[
                        isAiBooking
                          ? "AI Conversation"
                          : "Customer Request",
                        "Booking",
                        "Job",
                        "Staff",
                        "Automation",
                      ].map(
                        (step, index, array) => (
                          <div
                            key={step}
                            className="flex items-center gap-2"
                          >
                            <span className="flex items-center gap-1.5 text-slate-300">
                              <CheckCircle2
                                size={14}
                                className="text-emerald-400"
                              />
                              {step}
                            </span>

                            {index <
                              array.length - 1 && (
                              <ChevronRight
                                size={14}
                                className="text-slate-600"
                              />
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BOOKINGS */}
            {activeTab === "Bookings" && (
              <WorkspaceSection
                packageName={
                  config.package === "operations-ai"
                    ? "BuiltV Operations + AI"
                    : "BuiltV Business Pro"
                }
                title="Bookings"
                description="Every confirmed customer appointment appears here in the connected workspace."
              >
                {bookings.length > 0 ? (
                  <div className="space-y-3">
                    {bookings.map((item) => (
                      <BookingCard
                        key={item.id}
                        booking={item}
                        isAi={
                          item.source ===
                          "AI Customer Agent Demo"
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="No bookings yet"
                    description="Create an appointment from the customer experience first."
                  />
                )}
              </WorkspaceSection>
            )}

            {/* CUSTOMERS */}
            {activeTab === "Customers" && (
              <WorkspaceSection
                packageName={
                  config.package === "operations-ai"
                    ? "BuiltV Operations + AI"
                    : "BuiltV Business Pro"
                }
                title="Customers"
                description="Customer details captured through the booking experience appear here automatically."
              >
                {uniqueCustomers.length > 0 ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    {uniqueCustomers.map(
                      (customer) => (
                        <div
                          key={`${customer.email}-${customer.phone}`}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                              {customer.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate font-semibold">
                                {customer.name}
                              </p>

                              <p className="mt-1 truncate text-xs text-slate-500">
                                {customer.email}
                              </p>
                            </div>
                          </div>

                          <p className="mt-4 text-xs text-slate-500">
                            {customer.phone}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <EmptyState
                    title="No customers yet"
                    description="Customer profiles will appear after a booking is confirmed."
                  />
                )}
              </WorkspaceSection>
            )}

            {/* STAFF */}
            {activeTab === "Staff" && (
              <WorkspaceSection
                packageName={
                  config.package === "operations-ai"
                    ? "BuiltV Operations + AI"
                    : "BuiltV Business Pro"
                }
                title="Staff"
                description="Your operational team can be assigned to confirmed jobs."
              >
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    {
                      name: "Alex Morgan",
                      role: "Senior Technician",
                    },
                    {
                      name: "Jamie Wilson",
                      role: "Service Technician",
                    },
                    {
                      name: "Taylor Smith",
                      role: "Field Specialist",
                    },
                  ].map((staff) => (
                    <div
                      key={staff.name}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                        {staff.name.charAt(0)}
                      </div>

                      <p className="mt-4 font-semibold">
                        {staff.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {staff.role}
                      </p>
                    </div>
                  ))}
                </div>
              </WorkspaceSection>
            )}

            {/* PAYMENTS */}
            {activeTab === "Payments" && (
              <WorkspaceSection
                packageName={
                  config.package === "operations-ai"
                    ? "BuiltV Operations + AI"
                    : "BuiltV Business Pro"
                }
                title="Payments"
                description="Payment status can stay connected to the customer, booking and job workflow."
              >
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-semibold">
                        Demo payment workflow
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {bookings.length > 0
                          ? `${bookings.length} ${
                              bookings.length === 1
                                ? "booking"
                                : "bookings"
                            } awaiting payment processing.`
                          : "No bookings awaiting payment."}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                      Pending
                    </span>
                  </div>
                </div>
              </WorkspaceSection>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

interface BookingCardProps {
  booking: DemoBooking;
  isAi: boolean;
}

function BookingCard({
  booking,
  isAi,
}: BookingCardProps) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
            <Wrench size={18} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold">
                {booking.customer.name}
              </p>

              <span className="rounded-full bg-sky-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                Booking
              </span>

              {isAi && (
                <span className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700">
                  <Sparkles size={11} />
                  AI Agent
                </span>
              )}
            </div>

            <p className="mt-2 text-sm font-medium text-slate-700">
              {booking.service}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                {formatBookingDate(booking.date)}
              </span>

              <span className="flex items-center gap-1.5">
                <Clock3 size={14} />
                {booking.time}
              </span>
            </div>
          </div>
        </div>

        <span className="flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <CheckCircle2 size={14} />
          {booking.status}
        </span>
      </div>
    </div>
  );
}

interface WorkspaceSectionProps {
  packageName: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

function WorkspaceSection({
  packageName,
  title,
  description,
  children,
}: WorkspaceSectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
        {packageName}
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-7">{children}</div>
    </div>
  );
}

interface EmptyStateProps {
  title: string;
  description: string;
}

function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <p className="font-semibold text-slate-700">
        {title}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}

interface StatCardProps {
  icon: typeof CalendarDays;
  label: string;
  value: string;
  helper: string;
}

function StatCard({
  icon: Icon,
  label,
  value,
  helper,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <Icon size={17} />
        </div>
      </div>

      <p className="mt-5 text-2xl font-semibold">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {helper}
      </p>
    </div>
  );
}

interface WorkflowItemProps {
  number: string;
  title: string;
  description: string;
  completed?: boolean;
}

function WorkflowItem({
  number,
  title,
  description,
  completed = false,
}: WorkflowItemProps) {
  return (
    <div className="flex gap-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
          completed
            ? "bg-emerald-100 text-emerald-700"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {completed ? (
          <CheckCircle2 size={15} />
        ) : (
          number
        )}
      </div>

      <div>
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BusinessDashboard;