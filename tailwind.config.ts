import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem'
  	},
  	extend: {
  		fontFamily: {
  			mono: [
  				'Source Code Pro',
  				'monospace'
  			]
  		},
  		colors: {
  			bg: {
  				DEFAULT: '#0A0D12',
  				light: '#FAFAFA'
  			},
  			surface: {
  				DEFAULT: '#0E1624',
  				light: '#FFFDFA'
  			},
			border: {
				DEFAULT: '#223047',
				light: '#E5E7EB',
				'glow-dark': 'hsl(var(--border-glow-dark))',
				'glow-light': 'hsl(var(--border-glow-light))'
			},
			text: {
				DEFAULT: '#E6E8EC',
				light: '#1F2937'
			},
			muted: {
				DEFAULT: '#6B7280',
				light: '#374151',
				foreground: 'hsl(var(--muted-foreground))'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			glow: '0 0 32px rgba(59,130,246,0.25)',
  			'glow-light': '0 0 32px rgba(59,130,246,0.15)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
