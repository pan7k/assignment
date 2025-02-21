export interface ThemeDefinition {
  code: string;
  name: string;
  description?: string;
}

export const themes: ThemeDefinition[] = [
  {
    code: "main",
    name: "Main",
    description: "default",
  },
];
