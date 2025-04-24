export const colorTokens = {
  // Semantic color assignments
  background: {
    primary: "bg-white dark:bg-neutral-950",
    secondary: "bg-neutral-50 dark:bg-neutral-900",
    tertiary: "bg-neutral-100 dark:bg-neutral-800",
    accent: "bg-primary-50 dark:bg-primary-950",
    highlight: "bg-accent-50 dark:bg-accent-950",
  },
  text: {
    primary: "text-neutral-900 dark:text-neutral-50",
    secondary: "text-neutral-700 dark:text-neutral-300",
    tertiary: "text-neutral-500 dark:text-neutral-400",
    accent: "text-primary-600 dark:text-primary-400",
    highlight: "text-accent-600 dark:text-accent-400",
  },
  border: {
    light: "border-neutral-200 dark:border-neutral-800",
    medium: "border-neutral-300 dark:border-neutral-700",
    heavy: "border-neutral-400 dark:border-neutral-600",
    accent: "border-primary-600 dark:border-primary-500",
    highlight: "border-accent-500 dark:border-accent-400",
  },
  action: {
    primary: "bg-primary-600 hover:bg-primary-700 text-white",
    secondary:
      "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100",
    accent: "bg-accent-500 hover:bg-accent-600 text-white",
    outline:
      "bg-transparent border border-neutral-300 hover:bg-neutral-50 text-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-100",
  },
  shadow: {
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },
}

export const spacingTokens = {
  section: {
    sm: "py-4 md:py-6",
    md: "py-6 md:py-8",
    lg: "py-8 md:py-12",
    xl: "py-12 md:py-16",
  },
  container: {
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 md:px-8",
    lg: "px-4 sm:px-6 md:px-8 lg:px-12",
  },
  gap: {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },
}
