import { useMemo, useRef, useState } from "react";
import {
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

type IndustryId =
  | "plumbing"
  | "heating"
  | "electrical"
  | "cleaning"
  | "maintenance"
  | "landscaping";

interface AICustomerAgentProps {
  businessName: string;
  industry: IndustryId;
}

interface ChatMessage {
  id: string;
  sender: "agent" | "user";
  text: string;
}

interface Option {
  id: string;
  label: string;
}

type ConversationStage =
  | "start"
  | "welcome"
  | "issue"
  | "schedule"
  | "slot"
  | "details"
  | "confirmed";

interface IndustryConversation {
  service: string;
  issues: string[];
}

const industryConversations: Record<
  IndustryId,
  IndustryConversation
> = {
  plumbing: {
    service: "Plumbing Visit",
    issues: [
      "Leaking pipe",
      "Blocked drain",
      "No hot water",
      "Other plumbing issue",
    ],
  },

  heating: {
    service: "Heating & HVAC Visit",
    issues: [
      "Heating not working",
      "Boiler issue",
      "No hot water",
      "System inspection",
    ],
  },

  electrical: {
    service: "Electrical Visit",
    issues: [
      "Power issue",
      "Faulty socket",
      "Lighting problem",
      "Electrical inspection",
    ],
  },

  cleaning: {
    service: "Cleaning Service",
    issues: [
      "Home cleaning",
      "Deep cleaning",
      "End of tenancy",
      "Office cleaning",
    ],
  },

  maintenance: {
    service: "Property Maintenance Visit",
    issues: [
      "General repair",
      "Property inspection",
      "Fixture repair",
      "Maintenance visit",
    ],
  },

  landscaping: {
    service: "Landscaping Visit",
    issues: [
      "Garden maintenance",
      "Lawn care",
      "Hedge trimming",
      "Garden improvement",
    ],
  },
};

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow.toISOString().split("T")[0];
}

function createId() {
  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function AICustomerAgent({
  businessName,
  industry,
}: AICustomerAgentProps) {
  const conversation = industryConversations[industry];

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [stage, setStage] =
    useState<ConversationStage>("start");

  const [typing, setTyping] = useState(false);

  const [selectedIssue, setSelectedIssue] = useState("");

  const [selectedSchedule, setSelectedSchedule] =
    useState("");

  const [selectedSlot, setSelectedSlot] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [showDemoInfo, setShowDemoInfo] = useState(false);

  const timerRef = useRef<number | null>(null);

  const options = useMemo<Option[]>(() => {
    if (stage === "start") {
      return [
        {
          id: "hello",
          label: "Hello",
        },
        {
          id: "help",
          label: "I need help",
        },
        {
          id: "book",
          label: "Book a service",
        },
      ];
    }

    if (stage === "welcome") {
      return [
        {
          id: "book-service",
          label: "Book a service",
        },
        {
          id: "urgent",
          label: "I have an urgent issue",
        },
        {
          id: "availability",
          label: "Check availability",
        },
        {
          id: "services",
          label: "Ask about services",
        },
      ];
    }

    if (stage === "issue") {
      return conversation.issues.map((issue) => ({
        id: issue,
        label: issue,
      }));
    }

    if (stage === "schedule") {
      return [
        {
          id: "today",
          label: "Today",
        },
        {
          id: "tomorrow-morning",
          label: "Tomorrow morning",
        },
        {
          id: "tomorrow-afternoon",
          label: "Tomorrow afternoon",
        },
        {
          id: "another-day",
          label: "Choose another day",
        },
      ];
    }

    if (stage === "slot") {
      return [
        {
          id: "14:30",
          label: "2:30 PM",
        },
        {
          id: "16:00",
          label: "4:00 PM",
        },
        {
          id: "17:30",
          label: "5:30 PM",
        },
      ];
    }

    return [];
  }, [stage, conversation.issues]);

  const addUserMessage = (text: string) => {
    setMessages((current) => [
      ...current,
      {
        id: createId(),
        sender: "user",
        text,
      },
    ]);
  };

  const addAgentMessage = (
    text: string,
    nextStage: ConversationStage,
  ) => {
    setTyping(true);

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: createId(),
          sender: "agent",
          text,
        },
      ]);

      setTyping(false);
      setStage(nextStage);
    }, 1400);
  };

  const handleOption = (option: Option) => {
    if (typing) return;

    addUserMessage(option.label);

    if (stage === "start") {
      addAgentMessage(
        `Hi! Welcome to ${businessName}. I can help you find the right service or arrange a booking. What can I help you with today?`,
        "welcome",
      );

      return;
    }

    if (stage === "welcome") {
      if (option.id === "services") {
        addAgentMessage(
          `Of course. I can help with ${conversation.issues
            .slice(0, 3)
            .join(
              ", ",
            )}, and other related requests. What do you need help with?`,
          "issue",
        );

        return;
      }

      if (option.id === "availability") {
        addAgentMessage(
          "Absolutely. When would you prefer us to visit?",
          "schedule",
        );

        return;
      }

      if (option.id === "urgent") {
        addAgentMessage(
          "I can help with that. What seems to be the problem?",
          "issue",
        );

        return;
      }

      addAgentMessage(
        "Sure. What type of service do you need?",
        "issue",
      );

      return;
    }

    if (stage === "issue") {
      setSelectedIssue(option.label);

      addAgentMessage(
        `Got it — ${option.label.toLowerCase()}. I can help arrange a visit. When would work best for you?`,
        "schedule",
      );

      return;
    }

    if (stage === "schedule") {
      setSelectedSchedule(option.label);

      addAgentMessage(
        `Great. I found a few demonstration slots for ${option.label.toLowerCase()}. Which time works best?`,
        "slot",
      );

      return;
    }

    if (stage === "slot") {
      setSelectedSlot(option.id);

      addAgentMessage(
        `Perfect — ${option.label} works. I just need a few details to prepare the booking.`,
        "details",
      );
    }
  };

  const confirmBooking = () => {
    if (
      customerName.trim().length < 2 ||
      !customerEmail.includes("@") ||
      customerPhone.trim().length < 5
    ) {
      return;
    }

    const booking = {
      id: `BV-AI-${Date.now()}`,
      businessName,
      service: selectedIssue || conversation.service,
      date: getTomorrowDate(),
      time: selectedSlot || "16:00",
      customer: {
        name: customerName.trim(),
        email: customerEmail.trim(),
        phone: customerPhone.trim(),
      },
      status: "Confirmed",
      source: "AI Customer Agent Demo",
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      "builtv-demo-booking",
      JSON.stringify(booking),
    );

    addUserMessage("Confirm booking");

    setTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: createId(),
          sender: "agent",
          text: `You're booked, ${customerName.trim()}. Your ${selectedIssue || conversation.service} visit is confirmed for ${selectedSchedule.toLowerCase()} at ${formatTime(
            selectedSlot,
          )}.`,
        },
      ]);

      setTyping(false);
      setStage("confirmed");
    }, 1500);
  };

  const restartConversation = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setMessages([]);
    setStage("start");
    setTyping(false);
    setSelectedIssue("");
    setSelectedSchedule("");
    setSelectedSlot("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
  };

  const formValid =
    customerName.trim().length >= 2 &&
    customerEmail.includes("@") &&
    customerPhone.trim().length >= 5;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-black/10">
      {/* Header */}
      <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
              <Bot size={21} />

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">
                  AI Customer Agent
                </p>

                <Sparkles
                  size={14}
                  className="text-violet-400"
                />
              </div>

              <p className="mt-0.5 text-xs text-slate-400">
                Online • Ready to help
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowDemoInfo(true)}
            aria-label="About this demo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <Info size={16} />
          </button>
        </div>
      </div>

      {/* Conversation */}
      <div className="h-430px overflow-y-auto bg-slate-50 p-4 sm:p-5">
        {messages.length === 0 && stage === "start" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <Sparkles size={24} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              How can we help?
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Start a conversation with {businessName}.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[85%] gap-2 ${
                  message.sender === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    message.sender === "agent"
                      ? "bg-slate-950 text-white"
                      : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {message.sender === "agent" ? (
                    <Bot size={15} />
                  ) : (
                    <UserRound size={15} />
                  )}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "agent"
                      ? "rounded-tl-md border border-slate-200 bg-white text-slate-700"
                      : "rounded-tr-md bg-slate-950 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white">
                <Bot size={15} />
              </div>

              <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-4">
                <TypingDot delay="0ms" />
                <TypingDot delay="160ms" />
                <TypingDot delay="320ms" />
              </div>
            </div>
          )}

          {stage === "details" && !typing && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={17}
                  className="text-violet-600"
                />

                <p className="text-sm font-semibold text-slate-950">
                  Complete your booking
                </p>
              </div>

              <div className="mt-4 space-y-3">
               <div className="mt-4 space-y-3">
            <input
              type="text"
              value={customerName}
              onChange={(event) =>
                setCustomerName(event.target.value)
              }
              placeholder="Your name"
              autoComplete="name"
              className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <input
              type="email"
              value={customerEmail}
              onChange={(event) =>
                setCustomerEmail(event.target.value)
              }
              placeholder="Email address"
              autoComplete="email"
              className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <input
              type="tel"
              value={customerPhone}
              onChange={(event) =>
                setCustomerPhone(event.target.value)
              }
              placeholder="Phone number"
              autoComplete="tel"
              className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <button
              type="button"
              disabled={!formValid}
              onClick={confirmBooking}
              className={`flex min-h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition ${
                formValid
                  ? "bg-slate-950 text-white hover:bg-slate-800"
                  : "cursor-not-allowed bg-slate-100 text-slate-400"
              }`}
            >
              Confirm Booking
              <Send size={15} />
            </button>
          </div>
       </div>
    </div>
          )}

          {stage === "confirmed" && !typing && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 size={18} />

                <p className="text-sm font-semibold">
                  Booking confirmed
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Service
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {selectedIssue || conversation.service}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Appointment
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                    <Clock3 size={14} />
                    {formatTime(selectedSlot)}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-emerald-800">
                This booking has now entered the connected
                business workflow.
              </p>

              <button
                type="button"
                onClick={restartConversation}
                className="mt-4 text-xs font-semibold text-emerald-800 underline underline-offset-4"
              >
                Start another conversation
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Options */}
      {!typing &&
        stage !== "details" &&
        stage !== "confirmed" && (
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleOption(option)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

      {/* Demo Label */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-3">
        <p className="text-[10px] text-slate-400">
          Interactive demonstration • BuiltV
        </p>

        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <Sparkles size={11} />
          Guided experience
        </div>
      </div>

      {/* Disclosure */}
      {showDemoInfo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                  Demo Details
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  AI Customer Agent Experience
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowDemoInfo(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              This interactive product demonstration uses
              simulated responses and workflows to showcase how
              a BuiltV AI Customer Agent can operate when
              connected to a business&apos;s booking and
              operations systems.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              A production implementation can be configured
              around the business&apos;s real services,
              availability, customer data, integrations and AI
              infrastructure.
            </p>

            <button
              type="button"
              onClick={() => setShowDemoInfo(false)}
              className="mt-6 min-h-11 w-full rounded-xl bg-slate-950 text-sm font-semibold text-white"
            >
              Continue Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface TypingDotProps {
  delay: string;
}

function TypingDot({ delay }: TypingDotProps) {
  return (
    <span
      className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
      style={{
        animationDelay: delay,
      }}
    />
  );
}

function formatTime(time: string) {
  if (!time) return "4:00 PM";

  const [hourString, minute] = time.split(":");
  const hour = Number(hourString);

  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minute} ${suffix}`;
}

export default AICustomerAgent;