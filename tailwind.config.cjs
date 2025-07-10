/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': '#f0f9ff',
  				'100': '#e0f2fe',
  				'200': '#bae6fd',
  				'300': '#7dd3fc',
  				'400': '#38bdf8',
  				'500': '#0ea5e9',
  				'600': '#0284c7',
  				'700': '#0369a1',
  				'800': '#075985',
  				'900': '#0c4a6e',
  				'950': '#082f49',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				'950': '#020617',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			neural: {
  				'50': '#f4f3ff',
  				'100': '#ebe9fe',
  				'200': '#d9d6fe',
  				'300': '#bfb8fd',
  				'400': '#a090fa',
  				'500': '#8366f7',
  				'600': '#7144f1',
  				'700': '#6132dd',
  				'800': '#522ab9',
  				'900': '#442897',
  				'950': '#2a1665'
  			},
  			cyber: {
  				'50': '#ecfeff',
  				'100': '#cffafe',
  				'200': '#a5f3fc',
  				'300': '#67e8f9',
  				'400': '#22d3ee',
  				'500': '#06b6d4',
  				'600': '#0891b2',
  				'700': '#0e7490',
  				'800': '#155e75',
  				'900': '#164e63',
  				'950': '#083344'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			],
  			neural: [
  				'Orbitron',
  				'monospace'
  			],
  			mono: [
  				'ui-monospace',
  				'SFMono-Regular',
  				'Consolas',
  				'monospace'
  			]
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'neural-pulse': 'neural-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'neural-spin': 'neural-spin 3s linear infinite',
  			'neural-glow': 'neural-glow 2s ease-in-out infinite alternate',
  			'float': 'float 6s ease-in-out infinite',
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'gradient-shift': 'gradient-shift 3s ease infinite',
  			'cyber-grid': 'cyber-grid 20s linear infinite'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(10px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'neural-pulse': {
  				'0%, 100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '0.7',
  					transform: 'scale(1.05)'
  				}
  			},
  			'neural-spin': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'neural-glow': {
  				'0%': {
  					'box-shadow': '0 0 20px rgba(168, 85, 247, 0.3)'
  				},
  				'100%': {
  					'box-shadow': '0 0 40px rgba(168, 85, 247, 0.8)'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'glow': {
  				'0%': {
  					'box-shadow': '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)'
  				},
  				'100%': {
  					'box-shadow': '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(6, 182, 212, 0.4)'
  				}
  			},
  			'gradient-shift': {
  				'0%, 100%': {
  					'background-position': '0% 50%'
  				},
  				'50%': {
  					'background-position': '100% 50%'
  				}
  			},
  			'cyber-grid': {
  				'0%': {
  					'background-position': '0 0'
  				},
  				'100%': {
  					'background-position': '40px 40px'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'neural-gradient': 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3))',
  			'cyber-gradient': 'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))',
  			'neural-radial': 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
  			'cyber-radial': 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)'
  		},
  		boxShadow: {
  			'neural': '0 0 20px rgba(168, 85, 247, 0.3)',
  			'cyber': '0 0 20px rgba(6, 182, 212, 0.3)',
  			'neural-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
  			'cyber-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
  			'glow': '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)',
  			'glow-lg': '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} 