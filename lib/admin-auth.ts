function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "admin123";
}

export function validateAdminPassword(password: string | null | undefined): boolean {
  return !!password && password === getAdminPassword();
}

export function getAdminPasswordFromRequest(request: Request): string | null {
  return request.headers.get("x-admin-password");
}
