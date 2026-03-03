/**
 * Tests for admin API request validation (testimonial and blog payloads).
 * Run with: npx vitest run lib/__tests__/admin-api-validation.test.ts
 */

import { describe, it, expect } from "vitest";

describe("Testimonial payload validation", () => {
  function isValidTestimonial(body: unknown): boolean {
    if (!body || typeof body !== "object") return false;
    const o = body as Record<string, unknown>;
    return (
      typeof o.name === "string" &&
      o.name.trim().length > 0 &&
      typeof o.role === "string" &&
      typeof o.company === "string" &&
      typeof o.content === "string" &&
      o.content.trim().length > 0 &&
      typeof o.rating === "number" &&
      o.rating >= 1 &&
      o.rating <= 5
    );
  }

  it("accepts valid testimonial", () => {
    expect(
      isValidTestimonial({
        name: "John",
        role: "CEO",
        company: "Acme",
        content: "Great service.",
        rating: 5,
      })
    ).toBe(true);
  });

  it("rejects empty name", () => {
    expect(
      isValidTestimonial({
        name: "  ",
        role: "CEO",
        company: "Acme",
        content: "Great.",
        rating: 5,
      })
    ).toBe(false);
  });

  it("rejects empty content", () => {
    expect(
      isValidTestimonial({
        name: "John",
        role: "CEO",
        company: "Acme",
        content: "",
        rating: 5,
      })
    ).toBe(false);
  });

  it("rejects rating out of range", () => {
    expect(
      isValidTestimonial({
        name: "John",
        role: "CEO",
        company: "Acme",
        content: "Great.",
        rating: 0,
      })
    ).toBe(false);
    expect(
      isValidTestimonial({
        name: "John",
        role: "CEO",
        company: "Acme",
        content: "Great.",
        rating: 6,
      })
    ).toBe(false);
  });

  it("rejects null or non-object", () => {
    expect(isValidTestimonial(null)).toBe(false);
    expect(isValidTestimonial(undefined)).toBe(false);
    expect(isValidTestimonial("string")).toBe(false);
  });
});

describe("Blog payload validation", () => {
  function isValidBlogPost(body: unknown): boolean {
    if (!body || typeof body !== "object") return false;
    const o = body as Record<string, unknown>;
    return (
      typeof o.title === "string" &&
      o.title.trim().length > 0 &&
      typeof o.excerpt === "string" &&
      typeof o.category === "string" &&
      o.category.trim().length > 0
    );
  }

  it("accepts valid blog post", () => {
    expect(
      isValidBlogPost({
        title: "My Post",
        excerpt: "Short summary.",
        category: "Corporate",
      })
    ).toBe(true);
  });

  it("rejects empty title", () => {
    expect(
      isValidBlogPost({
        title: "  ",
        excerpt: "Summary",
        category: "Retail",
      })
    ).toBe(false);
  });

  it("rejects empty category", () => {
    expect(
      isValidBlogPost({
        title: "Post",
        excerpt: "Summary",
        category: "",
      })
    ).toBe(false);
  });
});
