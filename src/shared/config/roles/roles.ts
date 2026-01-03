export const ROLES = {
  ADMIN: "admin",
  GUEST: "guest",
  USER: "user",
} as const;

export const ROLES_OPTIONS = [
  { value: ROLES.ADMIN, label: "Admin" },
  { value: ROLES.GUEST, label: "Guest" },
  { value: ROLES.USER, label: "User" },
];
