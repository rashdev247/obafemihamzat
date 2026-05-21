import type {Config} from "tailwindcss"
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          900: "var(--primary-900)",
          700: "var(--primary-700)",
        },
        secondary: {
          500: "var(--secondary-500)",
          400: "var(--secondary-400)",
        },
        accent: {
          red: "var(--accent-red)",
        },
        campaign: {
          green: {
            950: "var(--campaign-green-950)",
            900: "var(--campaign-green-900)",
            700: "var(--campaign-green-700)",
            500: "var(--campaign-green-500)",
          },
        },
        lagos: {
          sky: "var(--lagos-sky)",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        surface: "var(--surface)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        "brand-card": "var(--shadow-brand-card)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      keyframes: {
        spinSlow: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },
        bounceArrow: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-5px)"},
        },
        "horizontal-sway": {
          "0%, 100%": {transform: "translateX(0)"},
          "50%": {transform: "translateX(10px)"},
        },
        horizontalSwayOut: {
          "0%, 100%": {transform: "translateX(0)"},
          "50%": {transform: "translateX(-10px)"},
        },
        horizontalOscillate: {
          "0%, 100%": {transform: "translateX(0)"},
          "25%": {transform: "translateX(10px)"},
          "50%": {transform: "translateX(0)"},
          "75%": {transform: "translateX(-10px)"},
        },
      },
      animation: {
        "spin-slow": "spinSlow 10s linear infinite",
        bounceArrow: "bounceArrow 1s infinite ease-in-out",
        sway: "horizontal-sway 2s ease-in-out infinite",
        swayout: "horizontalSwayOut 2s ease-in-out infinite",
        oscillate: "horizontalOscillate 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--text-secondary)',
            lineHeight: '1.75',
            h1: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              fontSize: '3rem',
              lineHeight: '1.1',
              letterSpacing: '0',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '1.2',
              letterSpacing: '0',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            h3: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h4: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '2',
            },
            a: {
              color: 'var(--primary-700)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--secondary-500)',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'var(--primary-900)',
                textDecorationColor: 'var(--primary-900)',
              },
            },
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--error)',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              code: {
                backgroundColor: 'transparent',
                color: 'inherit',
                padding: '0',
                borderRadius: '0',
                fontSize: '0.875rem',
              },
            },
            blockquote: {
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              borderLeftWidth: '4px',
              borderLeftColor: 'var(--secondary-500)',
              paddingLeft: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.625rem',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.625rem',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            table: {
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#D0D5DD',
            },
            'thead th': {
              color: 'var(--text-primary)',
              fontWeight: '600',
              textAlign: 'left',
              padding: '0.75rem 1rem',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--bg-secondary)',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.875',
            h1: {
              fontSize: '3.5rem',
              marginBottom: '1.75rem',
            },
            h2: {
              fontSize: '2.5rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontSize: '2rem',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
        slate: {
          css: {
            '--tw-prose-body': 'var(--text-secondary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-links': 'var(--primary-700)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-code': 'var(--error)',
            '--tw-prose-quotes': 'var(--text-secondary)',
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
