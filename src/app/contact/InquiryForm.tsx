"use client";

import { useState, type FormEvent } from "react";
import { categories } from "@/data/categories";

const field =
  "mt-2 block w-full rounded-xl border border-muted bg-card px-4 py-3 text-[16px] text-ink transition-colors duration-200 hover:border-champagne focus:border-primary";
const label = "block text-[15px] font-semibold text-ink";

/** Sample form. It is not connected to anything and never sends data. */
export default function InquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("This is a sample form and is not connected.");
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="form-heading" className="space-y-5">
      <div>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={field}
        />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="treatment" className={label}>
          Which treatment are you interested in?
        </label>
        <select id="treatment" name="treatment" defaultValue="" className={field}>
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={field} />
      </div>

      <p className="text-[15px] text-muted">Please do not include medical information.</p>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold leading-tight text-white transition-colors duration-200 hover:bg-primary-hover"
      >
        Send inquiry
      </button>

      <p aria-live="polite" className="min-h-[1.7em] font-semibold text-primary">
        {status}
      </p>
    </form>
  );
}
