"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to actual form handler (e.g. Formspree, Resend, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SectionWrapper className="flex min-h-[40vh] flex-col items-center justify-center py-20 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-brand-pink"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <h2 className="mt-6 font-italiana text-3xl text-brand-black">
          Message Received
        </h2>
        <p className="mt-3 max-w-sm font-manrope text-sm leading-relaxed text-brand-gray">
          Thank you for reaching out. A member of our team will be in touch
          within 1–2 business days.
        </p>
      </SectionWrapper>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="input-underline mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="input-underline mt-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="input-underline mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
          >
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-underline mt-2 cursor-pointer appearance-none"
          >
            <option value="" disabled>Select a service</option>
            <option value="full-service">Full-Service Interior Design</option>
            <option value="space-planning">Space Planning</option>
            <option value="3d-rendering">3D Rendering</option>
            <option value="furniture">Furniture Curation</option>
            <option value="project-mgmt">Project Management</option>
            <option value="styling">Styling & Decor</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
        >
          Approximate Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="input-underline mt-2 cursor-pointer appearance-none"
        >
          <option value="" disabled>Select a range</option>
          <option value="under-25k">Under $25,000</option>
          <option value="25k-75k">$25,000 – $75,000</option>
          <option value="75k-150k">$75,000 – $150,000</option>
          <option value="150k-300k">$150,000 – $300,000</option>
          <option value="over-300k">Over $300,000</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-manrope block text-[0.65rem] font-semibold uppercase tracking-widest text-brand-gray"
        >
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe the space, your goals, and any relevant details..."
          className="input-underline mt-2 resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          className="btn-base w-full rounded-none bg-brand-charcoal tracking-widest text-brand-white hover:bg-brand-pink md:w-auto md:min-w-[220px]"
        >
          Send Message
        </button>
        <p className="mt-3 font-manrope text-[0.7rem] text-brand-gray">
          We typically respond within 1–2 business days.
        </p>
      </div>
    </form>
  );
}
