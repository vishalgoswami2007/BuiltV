import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  details?: unknown;
  website?: unknown;
};

const cleanText = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const escapeHtml = (value: string) => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing.");

    return response.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

  const body = (request.body ?? {}) as ContactPayload;

  /*
   * Honeypot spam protection.
   * Real visitors never fill this hidden field.
   */
  if (cleanText(body.website, 200)) {
    return response.status(200).json({
      success: true,
      message: "Message received.",
    });
  }

  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 200).toLowerCase();
  const company = cleanText(body.company, 150);
  const projectType = cleanText(body.projectType, 100);
  const budget = cleanText(body.budget, 100);
  const details = cleanText(body.details, 5000);

  if (!name) {
    return response.status(400).json({
      success: false,
      message: "Please enter your name.",
    });
  }

  if (!email || !isValidEmail(email)) {
    return response.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (!projectType) {
    return response.status(400).json({
      success: false,
      message: "Please select a project type.",
    });
  }

  if (!budget) {
    return response.status(400).json({
      success: false,
      message: "Please select a budget.",
    });
  }

  if (details.length < 20) {
    return response.status(400).json({
      success: false,
      message: "Please provide a little more detail about your project.",
    });
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);

  const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

  try {
    const { data, error } = await resend.emails.send({
      from: "BuiltV Website <onboarding@resend.dev>",

      to: ["vg0767875@gmail.com"],

      replyTo: email,

      subject: `New BuiltV project enquiry — ${name}`,

      html: `
        <div
          style="
            margin: 0;
            padding: 40px 20px;
            background: #050608;
            font-family: Arial, Helvetica, sans-serif;
            color: #ffffff;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
            "
          >
            <div
              style="
                margin-bottom: 24px;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  color: #7dd3fc;
                  font-size: 12px;
                  font-weight: 600;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                BuiltV
              </p>

              <h1
                style="
                  margin: 0;
                  color: #ffffff;
                  font-size: 28px;
                  line-height: 1.3;
                "
              >
                New project enquiry
              </h1>
            </div>

            <div
              style="
                padding: 28px;
                background: #0a0d12;
                border: 1px solid #202631;
                border-radius: 16px;
              "
            >
              <table
                style="
                  width: 100%;
                  border-collapse: collapse;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #64748b;
                      font-size: 14px;
                      width: 140px;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #ffffff;
                      font-size: 14px;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #64748b;
                      font-size: 14px;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      font-size: 14px;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        color: #7dd3fc;
                        text-decoration: none;
                      "
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #64748b;
                      font-size: 14px;
                    "
                  >
                    Company
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #ffffff;
                      font-size: 14px;
                    "
                  >
                    ${safeCompany}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #64748b;
                      font-size: 14px;
                    "
                  >
                    Project type
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #ffffff;
                      font-size: 14px;
                    "
                  >
                    ${safeProjectType}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #64748b;
                      font-size: 14px;
                    "
                  >
                    Budget
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #ffffff;
                      font-size: 14px;
                    "
                  >
                    ${safeBudget}
                  </td>
                </tr>
              </table>

              <div
                style="
                  height: 1px;
                  margin: 24px 0;
                  background: #202631;
                "
              ></div>

              <p
                style="
                  margin: 0 0 10px;
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: 600;
                "
              >
                Project details
              </p>

              <p
                style="
                  margin: 0;
                  color: #cbd5e1;
                  font-size: 14px;
                  line-height: 1.75;
                "
              >
                ${safeDetails}
              </p>
            </div>

            <p
              style="
                margin-top: 20px;
                color: #475569;
                font-size: 12px;
              "
            >
              Sent from the BuiltV website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return response.status(500).json({
        success: false,
        message: "We couldn't send your enquiry. Please try again.",
      });
    }

    console.log("BuiltV enquiry sent:", data?.id);

    return response.status(200).json({
      success: true,
      message: "Thanks — your enquiry has been received.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return response.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}