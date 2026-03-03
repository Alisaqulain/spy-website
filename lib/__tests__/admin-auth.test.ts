/**
 * Tests for admin authentication and API validation.
 * Run with: npx vitest run lib/__tests__/admin-auth.test.ts
 */

import { describe, it, expect, afterEach } from "vitest";
import { validateAdminPassword } from "../admin-auth";

describe("admin-auth", () => {
  const originalEnv = process.env.ADMIN_PASSWORD;

  afterEach(() => {
    process.env.ADMIN_PASSWORD = originalEnv;
  });

  it("returns false for null or undefined password", () => {
    expect(validateAdminPassword(null)).toBe(false);
    expect(validateAdminPassword(undefined)).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(validateAdminPassword("")).toBe(false);
  });

  it("returns true for default test password when ADMIN_PASSWORD is not set", () => {
    delete process.env.ADMIN_PASSWORD;
    expect(validateAdminPassword("admin123")).toBe(true);
  });

  it("returns false for wrong password when ADMIN_PASSWORD is not set", () => {
    delete process.env.ADMIN_PASSWORD;
    expect(validateAdminPassword("wrong")).toBe(false);
  });

  it("returns true when password matches ADMIN_PASSWORD", () => {
    process.env.ADMIN_PASSWORD = "secret";
    expect(validateAdminPassword("secret")).toBe(true);
  });

  it("returns false when password does not match ADMIN_PASSWORD", () => {
    process.env.ADMIN_PASSWORD = "secret";
    expect(validateAdminPassword("admin123")).toBe(false);
  });
});
