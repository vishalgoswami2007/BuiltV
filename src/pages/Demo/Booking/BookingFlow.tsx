import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  UserRound,
} from "lucide-react";

interface BookingFlowProps {
  businessName: string;
  services: readonly string[];
  accentClass: string;
  accentSoftClass: string;
  buttonClass: string;
  buttonTextClass: string;
  cardClass: string;
  mutedClass: string;
  borderClass: string;
}

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

type BookingStep =
  | "service"
  | "date"
  | "time"
  | "details"
  | "success";

const availableTimes = [
  "09:00",
  "10:30",
  "12:00",
  "14:30",
  "16:00",
  "17:30",
];

function BookingFlow({
  businessName,
  services,
  accentClass,
  accentSoftClass,
  buttonClass,
  buttonTextClass,
  cardClass,
  mutedClass,
  borderClass,
}: BookingFlowProps) {
  const [step, setStep] = useState<BookingStep>("service");

  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    email: "",
    phone: "",
  });

  const dates = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => {
      const date = new Date();

      date.setDate(date.getDate() + index + 1);

      return {
        value: date.toISOString().split("T")[0],
        day: date.toLocaleDateString("en-GB", {
          weekday: "short",
        }),
        date: date.toLocaleDateString("en-GB", {
          day: "2-digit",
        }),
        month: date.toLocaleDateString("en-GB", {
          month: "short",
        }),
      };
    });
  }, []);

  const customerValid =
    customer.name.trim().length >= 2 &&
    customer.email.includes("@") &&
    customer.phone.trim().length >= 7;

  const handleConfirmBooking = () => {
  if (!customerValid) return;

  const booking = {
    id: `BV-${Date.now()}`,
    businessName,
    service: selectedService,
    date: selectedDate,
    time: selectedTime,
    customer: {
      name: customer.name.trim(),
      email: customer.email.trim(),
      phone: customer.phone.trim(),
    },
    status: "Confirmed",
    createdAt: new Date().toISOString(),
  };

  try {
    const storedBookings = sessionStorage.getItem(
      "builtv-demo-bookings",
    );

    const existingBookings = storedBookings
      ? JSON.parse(storedBookings)
      : [];

    const bookings = Array.isArray(existingBookings)
      ? existingBookings
      : [];

    const updatedBookings = [
      booking,
      ...bookings,
    ];

    sessionStorage.setItem(
      "builtv-demo-bookings",
      JSON.stringify(updatedBookings),
    );

    // Keep latest booking available for the existing
    // Job → Staff → Automation workflow.
    sessionStorage.setItem(
      "builtv-demo-booking",
      JSON.stringify(booking),
    );
  } catch {
    sessionStorage.setItem(
      "builtv-demo-bookings",
      JSON.stringify([booking]),
    );

    sessionStorage.setItem(
      "builtv-demo-booking",
      JSON.stringify(booking),
    );
  }

  setStep("success");
};

  const resetBooking = () => {
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");

    setCustomer({
      name: "",
      email: "",
      phone: "",
    });

    setStep("service");
  };

  return (
    <div>
      {/* Progress */}
      {step !== "success" && (
        <div className="mb-7 flex items-center gap-2">
          {["service", "date", "time", "details"].map(
            (item, index) => {
              const steps = [
                "service",
                "date",
                "time",
                "details",
              ];

              const currentIndex = steps.indexOf(step);
              const completed = index < currentIndex;
              const active = index === currentIndex;

              return (
                <div
                  key={item}
                  className={`h-1 flex-1 rounded-full transition ${
                    completed || active
                      ? buttonClass
                      : "bg-slate-500/20"
                  }`}
                />
              );
            },
          )}
        </div>
      )}

      {/* STEP 1 — SERVICE */}
      {step === "service" && (
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${accentClass}`}
              >
                Step 1 of 4
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Choose a service
              </h2>
            </div>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentSoftClass}`}
            >
              <CalendarDays
                size={20}
                className={accentClass}
              />
            </div>
          </div>

          <div className="mt-7 space-y-3">
            {services.map((service) => {
              const active = selectedService === service;

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition ${borderClass} ${
                    active
                      ? accentSoftClass
                      : "hover:opacity-75"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {service}
                    </p>

                    <p className={`mt-1 text-xs ${mutedClass}`}>
                      View available appointments
                    </p>
                  </div>

                  {active ? (
                    <CheckCircle2
                      size={18}
                      className={accentClass}
                    />
                  ) : (
                    <ArrowRight
                      size={16}
                      className={mutedClass}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!selectedService}
            onClick={() => setStep("date")}
            className={`mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition ${
              selectedService
                ? `${buttonClass} ${buttonTextClass}`
                : "cursor-not-allowed bg-slate-500/20 text-slate-500"
            }`}
          >
            Choose Date
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 2 — DATE */}
      {step === "date" && (
        <div>
          <button
            type="button"
            onClick={() => setStep("service")}
            className={`flex items-center gap-2 text-xs ${mutedClass}`}
          >
            <ArrowLeft size={14} />
            Change service
          </button>

          <p
            className={`mt-6 text-xs font-semibold uppercase tracking-widest ${accentClass}`}
          >
            Step 2 of 4
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Choose a date
          </h2>

          <p className={`mt-2 text-sm ${mutedClass}`}>
            {selectedService}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {dates.map((date) => {
              const active = selectedDate === date.value;

              return (
                <button
                  key={date.value}
                  type="button"
                  onClick={() => setSelectedDate(date.value)}
                  className={`rounded-xl border p-4 text-center transition ${borderClass} ${
                    active
                      ? accentSoftClass
                      : "hover:opacity-75"
                  }`}
                >
                  <p
                    className={`text-xs uppercase ${mutedClass}`}
                  >
                    {date.day}
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    {date.date}
                  </p>

                  <p className={`mt-1 text-xs ${mutedClass}`}>
                    {date.month}
                  </p>

                  {active && (
                    <Check
                      size={15}
                      className={`mx-auto mt-3 ${accentClass}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!selectedDate}
            onClick={() => setStep("time")}
            className={`mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold ${
              selectedDate
                ? `${buttonClass} ${buttonTextClass}`
                : "cursor-not-allowed bg-slate-500/20 text-slate-500"
            }`}
          >
            Choose Time
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 3 — TIME */}
      {step === "time" && (
        <div>
          <button
            type="button"
            onClick={() => setStep("date")}
            className={`flex items-center gap-2 text-xs ${mutedClass}`}
          >
            <ArrowLeft size={14} />
            Change date
          </button>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${accentClass}`}
              >
                Step 3 of 4
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Choose a time
              </h2>
            </div>

            <Clock3 size={21} className={accentClass} />
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {availableTimes.map((time) => {
              const active = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${borderClass} ${
                    active
                      ? accentSoftClass
                      : "hover:opacity-75"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!selectedTime}
            onClick={() => setStep("details")}
            className={`mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold ${
              selectedTime
                ? `${buttonClass} ${buttonTextClass}`
                : "cursor-not-allowed bg-slate-500/20 text-slate-500"
            }`}
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 4 — DETAILS */}
      {step === "details" && (
        <div>
          <button
            type="button"
            onClick={() => setStep("time")}
            className={`flex items-center gap-2 text-xs ${mutedClass}`}
          >
            <ArrowLeft size={14} />
            Change time
          </button>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${accentClass}`}
              >
                Step 4 of 4
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Your details
              </h2>
            </div>

            <UserRound size={21} className={accentClass} />
          </div>

          <div className="mt-7 space-y-3">
            <input
              type="text"
              value={customer.name}
              onChange={(event) =>
                setCustomer((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Full name"
              className={`min-h-13 w-full rounded-xl border bg-transparent px-4 text-sm outline-none ${borderClass}`}
            />

            <input
              type="email"
              value={customer.email}
              onChange={(event) =>
                setCustomer((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              placeholder="Email address"
              className={`min-h-13 w-full rounded-xl border bg-transparent px-4 text-sm outline-none ${borderClass}`}
            />

            <input
              type="tel"
              value={customer.phone}
              onChange={(event) =>
                setCustomer((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              placeholder="Phone number"
              className={`min-h-13 w-full rounded-xl border bg-transparent px-4 text-sm outline-none ${borderClass}`}
            />
          </div>

          {/* Summary */}
          <div
            className={`mt-5 rounded-xl border p-4 ${borderClass} ${cardClass}`}
          >
            <p className={`text-xs ${mutedClass}`}>
              BOOKING SUMMARY
            </p>

            <p className="mt-3 text-sm font-semibold">
              {selectedService}
            </p>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              {selectedDate} · {selectedTime}
            </p>
          </div>

          <button
            type="button"
            disabled={!customerValid}
            onClick={handleConfirmBooking}
            className={`mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold ${
              customerValid
                ? `${buttonClass} ${buttonTextClass}`
                : "cursor-not-allowed bg-slate-500/20 text-slate-500"
            }`}
          >
            Confirm Booking
            <Check size={16} />
          </button>
        </div>
      )}

      {/* SUCCESS */}
      {step === "success" && (
        <div className="py-6 text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${accentSoftClass}`}
          >
            <CheckCircle2
              size={30}
              className={accentClass}
            />
          </div>

          <p
            className={`mt-6 text-xs font-semibold uppercase tracking-widest ${accentClass}`}
          >
            Booking Confirmed
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            You're booked.
          </h2>

          <p className={`mt-3 text-sm leading-6 ${mutedClass}`}>
            Your appointment with {businessName} has been
            confirmed.
          </p>

          <div
            className={`mt-7 rounded-xl border p-5 text-left ${borderClass} ${cardClass}`}
          >
            <p className="text-sm font-semibold">
              {selectedService}
            </p>

            <p className={`mt-2 text-sm ${mutedClass}`}>
              {selectedDate} · {selectedTime}
            </p>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              {customer.name}
            </p>
          </div>

          <button
            type="button"
            onClick={resetBooking}
            className={`mt-6 min-h-12 rounded-xl px-6 text-sm font-semibold ${buttonClass} ${buttonTextClass}`}
          >
            Make Another Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingFlow;