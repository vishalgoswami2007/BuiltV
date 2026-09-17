import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  businessWebsite?: unknown;
  region?: unknown;
  businessType?: unknown;
  selectedPackage?: unknown;
  solutionNeed?: unknown;
  currentSetup?: unknown;
  timeline?: unknown;
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

const formatOptionalValue = (value: string) => {
  return value || "Not provided";
};

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  /*
   * Only allow POST requests.
   */
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  /*
   * Check email service configuration.
   */
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing.");

    return response.status(500).json({
      success: false,
      message:
        "The contact service is temporarily unavailable. Please try again later.",
    });
  }

  /*
   * Safely read request body.
   */
  const body = (request.body ?? {}) as ContactPayload;

  /*
   * Honeypot spam protection.
   *
   * Real users should never fill this hidden field.
   * If it contains a value, silently return success.
   */
  if (cleanText(body.website, 200)) {
    return response.status(200).json({
      success: true,
      message: "Your project request has been received.",
    });
  }

  /*
   * Clean and normalize all incoming fields.
   */
  const name = cleanText(body.name, 100);

  const email = cleanText(
    body.email,
    200,
  ).toLowerCase();

  const phone = cleanText(body.phone, 80);

  const company = cleanText(
    body.company,
    150,
  );

  const businessWebsite = cleanText(
    body.businessWebsite,
    300,
  );

  const region = cleanText(
    body.region,
    150,
  );

  const businessType = cleanText(
    body.businessType,
    150,
  );

  const selectedPackage = cleanText(
    body.selectedPackage,
    250,
  );

  const solutionNeed = cleanText(
    body.solutionNeed,
    200,
  );

  const currentSetup = cleanText(
    body.currentSetup,
    200,
  );

  const timeline = cleanText(
    body.timeline,
    150,
  );

  const details = cleanText(
    body.details,
    5000,
  );

  /*
   * Required-field validation.
   */
  if (!name) {
    return response.status(400).json({
      success: false,
      message: "Please enter your name.",
    });
  }

  if (!email || !isValidEmail(email)) {
    return response.status(400).json({
      success: false,
      message:
        "Please enter a valid email address.",
    });
  }

  if (!company) {
    return response.status(400).json({
      success: false,
      message:
        "Please enter your business name.",
    });
  }

  if (!businessType) {
    return response.status(400).json({
      success: false,
      message:
        "Please select your business type.",
    });
  }

  if (!region) {
    return response.status(400).json({
      success: false,
      message:
        "Please enter your country or region.",
    });
  }

  if (!selectedPackage) {
    return response.status(400).json({
      success: false,
      message:
        "Please select a BuiltV package.",
    });
  }

  if (!solutionNeed) {
    return response.status(400).json({
      success: false,
      message:
        "Please select your primary requirement.",
    });
  }

  if (!currentSetup) {
    return response.status(400).json({
      success: false,
      message:
        "Please select your current setup.",
    });
  }

  if (!timeline) {
    return response.status(400).json({
      success: false,
      message:
        "Please select your preferred timeline.",
    });
  }

  if (details.length < 20) {
    return response.status(400).json({
      success: false,
      message:
        "Please provide a little more detail about your business and what you would like BuiltV to improve.",
    });
  }

  /*
   * Escape all user-provided values before inserting
   * them into the HTML email.
   */
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const safePhone = escapeHtml(
    formatOptionalValue(phone),
  );

  const safeCompany = escapeHtml(company);

  const safeBusinessWebsite = escapeHtml(
    formatOptionalValue(businessWebsite),
  );

  const safeRegion = escapeHtml(region);

  const safeBusinessType =
    escapeHtml(businessType);

  const safeSelectedPackage =
    escapeHtml(selectedPackage);

  const safeSolutionNeed =
    escapeHtml(solutionNeed);

  const safeCurrentSetup =
    escapeHtml(currentSetup);

  const safeTimeline =
    escapeHtml(timeline);

  const safeDetails = escapeHtml(
    details,
  ).replace(/\n/g, "<br />");

  const resend = new Resend(apiKey);

  try {
    const { data, error } =
      await resend.emails.send({
        from: "BuiltV Website <onboarding@resend.dev>",

        to: ["vg0767875@gmail.com"],

        replyTo: email,

        subject: `New BuiltV project request — ${company}`,

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
                max-width: 720px;
                margin: 0 auto;
              "
            >
              <!-- HEADER -->

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
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  "
                >
                  BUILTV PROJECT REQUEST
                </p>

                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 28px;
                    line-height: 1.3;
                  "
                >
                  New business enquiry
                </h1>

                <p
                  style="
                    margin: 10px 0 0;
                    color: #94a3b8;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  A new project review request was submitted through
                  the BuiltV website.
                </p>
              </div>

              <!-- CONTACT -->

              <div
                style="
                  margin-bottom: 16px;
                  padding: 26px;
                  background: #0a0d12;
                  border: 1px solid #202631;
                  border-radius: 16px;
                "
              >
                <p
                  style="
                    margin: 0 0 18px;
                    color: #7dd3fc;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  CONTACT
                </p>

                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                  "
                >
                  <tr>
                    <td style="${labelStyle}">
                      Name
                    </td>

                    <td style="${valueStyle}">
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Email
                    </td>

                    <td style="${valueStyle}">
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
                    <td style="${labelStyle}">
                      Phone / WhatsApp
                    </td>

                    <td style="${valueStyle}">
                      ${safePhone}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Business
                    </td>

                    <td style="${valueStyle}">
                      ${safeCompany}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- BUSINESS -->

              <div
                style="
                  margin-bottom: 16px;
                  padding: 26px;
                  background: #0a0d12;
                  border: 1px solid #202631;
                  border-radius: 16px;
                "
              >
                <p
                  style="
                    margin: 0 0 18px;
                    color: #7dd3fc;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  BUSINESS
                </p>

                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                  "
                >
                  <tr>
                    <td style="${labelStyle}">
                      Business type
                    </td>

                    <td style="${valueStyle}">
                      ${safeBusinessType}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Country / Region
                    </td>

                    <td style="${valueStyle}">
                      ${safeRegion}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Website
                    </td>

                    <td style="${valueStyle}">
                      ${safeBusinessWebsite}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- PROJECT -->

              <div
                style="
                  margin-bottom: 16px;
                  padding: 26px;
                  background: #0a0d12;
                  border: 1px solid #202631;
                  border-radius: 16px;
                "
              >
                <p
                  style="
                    margin: 0 0 18px;
                    color: #7dd3fc;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  PROJECT
                </p>

                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                  "
                >
                  <tr>
                    <td style="${labelStyle}">
                      Package
                    </td>

                    <td style="${valueStyle}">
                      ${safeSelectedPackage}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Primary requirement
                    </td>

                    <td style="${valueStyle}">
                      ${safeSolutionNeed}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Current setup
                    </td>

                    <td style="${valueStyle}">
                      ${safeCurrentSetup}
                    </td>
                  </tr>

                  <tr>
                    <td style="${labelStyle}">
                      Timeline
                    </td>

                    <td style="${valueStyle}">
                      ${safeTimeline}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- DETAILS -->

              <div
                style="
                  padding: 26px;
                  background: #0a0d12;
                  border: 1px solid #202631;
                  border-radius: 16px;
                "
              >
                <p
                  style="
                    margin: 0 0 14px;
                    color: #7dd3fc;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  WORKFLOW & REQUIREMENTS
                </p>

                <p
                  style="
                    margin: 0;
                    color: #cbd5e1;
                    font-size: 14px;
                    line-height: 1.8;
                  "
                >
                  ${safeDetails}
                </p>
              </div>

              <!-- FOOTER -->

              <div
                style="
                  margin-top: 22px;
                  padding-top: 18px;
                  border-top: 1px solid #1e293b;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #475569;
                    font-size: 12px;
                    line-height: 1.6;
                  "
                >
                  Sent automatically from the BuiltV website
                  project request form.
                </p>

                <p
                  style="
                    margin: 6px 0 0;
                    color: #475569;
                    font-size: 12px;
                  "
                >
                  Reply directly to this email to contact
                  ${safeName}.
                </p>
              </div>
            </div>
          </div>
        `,
      });

    if (error) {
      console.error(
        "Resend email error:",
        error,
      );

      return response.status(500).json({
        success: false,
        message:
          "We couldn't send your project request. Please try again.",
      });
    }

    console.log(
      "BuiltV project request sent:",
      data?.id,
    );

    return response.status(200).json({
      success: true,
      message:
        "Thanks — your project request has been received. We'll review the details and get back to you.",
    });
  } catch (error) {
    console.error(
      "BuiltV contact API error:",
      error,
    );

    return response.status(500).json({
      success: false,
      message:
        "Something went wrong while sending your request. Please try again.",
    });
  }
}

const labelStyle = `
  padding: 9px 18px 9px 0;
  color: #64748b;
  font-size: 13px;
  width: 170px;
  vertical-align: top;
`;

const valueStyle = `
  padding: 9px 0;
  color: #ffffff;
  font-size: 14px;
  vertical-align: top;
`;