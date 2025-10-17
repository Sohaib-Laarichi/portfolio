declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module 'next-themes/dist/types' {
  export interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: 'class' | 'data-theme'
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
  }
}