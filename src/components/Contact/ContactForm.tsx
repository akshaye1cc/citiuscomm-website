"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const services = [
  "Networking Infrastructure",
  "Cloud Solutions",
  "Cybersecurity",
  "5G / vRAN",
  "Data Center",
  "OSS / BSS",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setStatus("success");
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ds-success/30 bg-ds-success/5 px-8 py-16 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ds-success/10">
          <svg className="h-7 w-7 text-ds-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-fg">Message sent</h3>
        <p className="text-muted">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
            Name <span className="text-ds-error">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
            Email <span className="text-ds-error">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-fg">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-fg">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
          Message <span className="text-ds-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or requirement…"
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-ds-error/30 bg-ds-error/5 px-4 py-3 text-sm text-ds-error">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        variant="cta"
        size="lg"
        loading={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
