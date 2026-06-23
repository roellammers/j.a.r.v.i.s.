export type JarvisRole = "user" | "assistant";

export type JarvisMessage = {
  id: string;
  role: JarvisRole;
  content: string;
  createdAt: string;
  mock?: boolean;
};

export type JarvisMode = "AUTO" | "IDLE" | "THINKING" | "TALKING";
