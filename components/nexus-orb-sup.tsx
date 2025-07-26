"use client"

import { useState, useEffect, useRef, type ReactNode, useMemo, useCallback } from "react"

// Type definitions
interface IconWrapperProps {
  children: ReactNode
  className?: string
  isHighlighted?: boolean
  isActive?: boolean
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
}

interface IconPosition {
  transformX: number
  transformY: number
  svgX: number
  svgY: number
}

interface OuterIcon {
  id: number
  component: ReactNode
}

// SVG Icon Components
const ReactIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#61DAFB">
    <circle cx="12" cy="12" r="2" />
    <path
      d="M12,1C18.5,1 24,4.58 24,9C24,13.42 18.5,17 12,17C5.5,17 0,13.42 0,9C0,4.58 5.5,1 12,1Z"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
    />
    <path
      d="M12,7C18.5,7 24,10.58 24,15C24,19.42 18.5,23 12,23C5.5,23 0,19.42 0,15C0,10.58 5.5,7 12,7Z"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
    />
    <path
      d="M12,7C5.5,7 0,10.58 0,15C0,19.42 5.5,23 12,23C18.5,23 24,19.42 24,15C24,10.58 18.5,7 12,7Z"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
    />
  </svg>
)

const NextJSIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568L9.216 6.216h1.568L18.432 16.568h-0.864zM4.5 6.216h1.5v11.568h-1.5V6.216z" />
  </svg>
)

const NodeJSIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.26 17.018c0 .266-.217.482-.482.482s-.482-.216-.482-.482V6.982c0-.266.217-.482.482-.482s.482.216.482.482v10.036z" />
  </svg>
)

const MongoDBIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#47A248">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
  </svg>
)

const TailwindIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
)

const TypeScriptIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#3178C6">
    <rect width="24" height="24" rx="5" fill="#3178C6" />
    <path
      d="M9.5 16.5V7.5h1.5v8h2.5v1.5H9.5zM14.5 16.5V15h3v-1.5h-2.5c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1H18v1.5h-3V12h2.5c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-3z"
      fill="white"
    />
  </svg>
)

const ExpressIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-8.2-2.779a6.002 6.002 0 01-.885-3.838z" />
  </svg>
)

const GitIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
  </svg>
)

const DockerIcon = () => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.033-1.01.099-.663-1.998-2.639-2.676-2.639-2.676-.464-.212-.981.146-.981.146s-.472.825-.711 1.846c-.278 1.187-.092 2.777.564 3.935-.98.564-2.274.107-2.274.107l-6.26-.004a.305.305 0 00-.305.305c-.003.032-.043.425-.104 1.14-.075.94-.167 1.948-.394 2.876-.34 1.389-.94 2.5-1.77 3.292-.319.305-.644.579-.99.805a.305.305 0 00-.114.400c.069.137.21.215.359.215.264 0 .518-.126.676-.34.413-.56.754-1.162 1.02-1.794.27-.64.464-1.316.58-2.005.11-.654.17-1.32.18-1.987l5.97.005c2.58 0 4.551-.223 5.86-1.038.36-.225.668-.506.907-.836 1.135.15 1.879-.21 2.37-.534.492-.324.793-.704.793-.704s.13-.129.322-.305c.135-.124.45-.302.450-.302s.207-.264 0-.522Z" />
  </svg>
)

const CenterTechIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="100%" height="100%">
    <defs>
      <linearGradient id="tech-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"></stop>
        <stop offset="50%" stopColor="#8B5CF6"></stop>
        <stop offset="100%" stopColor="#06B6D4"></stop>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="80" fill="url(#tech-gradient)" opacity="0.8" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="100" r="20" fill="white" opacity="0.8" />
    <text x="100" y="105" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
      TECH
    </text>
  </svg>
)

const IconWrapper = ({ children, className = "", isHighlighted = false, isActive = false }: IconWrapperProps) => (
  <div
    className={`
            backdrop-blur-xl rounded-2xl flex items-center justify-center border
            ${
              isHighlighted
                ? "dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow"
                : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${!isActive && "animate-float"}`
            }
            ${isActive && "border-blue-400/60"}
            ${className}
        `}
    style={{
      transform: isActive ? "scale(1.1)" : "scale(1)",
      backgroundColor: isActive ? "rgba(129, 140, 248, 0.2)" : "rgba(255, 255, 255, 0.05)",
      transition: "transform 0.8s ease-in-out, background-color 0.8s ease-in-out, border-color 0.8s ease-in-out",
      direction: "ltr",
    }}
  >
    {children}
  </div>
)

const IconGrid = () => {
  const [activeId, setActiveId] = useState<number>(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  const outerIcons = useMemo(
    (): OuterIcon[] => [
      { id: 1, component: <ReactIcon /> },
      { id: 2, component: <NextJSIcon /> },
      { id: 3, component: <NodeJSIcon /> },
      { id: 4, component: <MongoDBIcon /> },
      { id: 5, component: <TailwindIcon /> },
      { id: 6, component: <TypeScriptIcon /> },
      { id: 7, component: <ExpressIcon /> },
      { id: 8, component: <GitIcon /> },
      { id: 9, component: <DockerIcon /> },
    ],
    [],
  )

  const radius = 140 // Reduced from 160 for better mobile fit
  const svgSize = 320 // Reduced from 400 for better mobile fit
  const svgCenter = svgSize / 2
  const numIcons = outerIcons.length

  const getIconPosition = useCallback(
    (index: number): IconPosition => {
      const angle = (-90 + index * (360 / numIcons)) * (Math.PI / 180)
      return {
        transformX: radius * Math.cos(angle),
        transformY: radius * Math.sin(angle),
        svgX: svgCenter + radius * Math.cos(angle),
        svgY: svgCenter + radius * Math.sin(angle),
      }
    },
    [numIcons, radius, svgCenter],
  )

  // Animation loop for particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const render = () => {
      ctx.clearRect(0, 0, svgSize, svgSize)
      particlesRef.current.forEach((p, index) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 1
        if (p.life <= 0) {
          particlesRef.current.splice(index, 1)
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false)
          ctx.fillStyle = `rgba(59, 130, 246, ${p.life / 60})`
          ctx.fill()
        }
      })
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => window.cancelAnimationFrame(animationFrameId)
  }, [])

  // Effect for sequential animation and particle emission
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = outerIcons.findIndex((icon) => icon.id === prevId)
        const nextIndex = (currentIndex + 1) % outerIcons.length

        // Emit particles from the new active icon's position
        const pos = getIconPosition(nextIndex)
        const iconCenterX = svgCenter + pos.transformX
        const iconCenterY = svgCenter + pos.transformY
        for (let i = 0; i < 15; i++) { // Reduced from 20 for mobile
          particlesRef.current.push({
            x: iconCenterX,
            y: iconCenterY,
            vx: (Math.random() - 0.5) * 1.5, // Reduced velocity for mobile
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 1.5 + 0.5, // Smaller particles for mobile
            life: Math.random() * 50, // Reduced life for mobile
          })
        }
        return outerIcons[nextIndex].id
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [outerIcons, getIconPosition, svgCenter])

  return (
    <div className="relative w-[320px] h-[320px] scale-75 sm:scale-85 md:scale-90 lg:scale-100" dir="ltr">
      <canvas
        ref={canvasRef}
        width={svgSize}
        height={svgSize}
        className="absolute top-0 left-0 pointer-events-none z-10"
      ></canvas>
        <svg width={svgSize} height={svgSize} className="absolute top-0 left-[-56px] sm:left-0">
          <defs>
            <filter id="glow_v6">
              <feGaussianBlur stdDeviation="2" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g>
            {outerIcons.map((icon1, i) => {
              const p1 = getIconPosition(i)
              return outerIcons.map((icon2, j) => {
                if (i >= j) return null
                const p2 = getIconPosition(j)
                const isLineActive = activeId === icon1.id || activeId === icon2.id

                return (
                  <line
                    key={`line-${i}-${j}`}
                    x1={p1.svgX}
                    y1={p1.svgY}
                    x2={p2.svgX}
                    y2={p2.svgY}
                    strokeWidth="1"
                    style={{
                      stroke: isLineActive ? "#3B82F6" : "#6B7280",
                      opacity: isLineActive ? 0.8 : 0.15,
                      filter: isLineActive ? "url(#glow_v6)" : "none",
                      transition: "all 1.2s ease-in-out",
                    }}
                    className="dark:stroke-gray-600"
                  />
                )
              })
            })}
          </g>
        </svg>
      <div className="absolute top-1/2 left-1/2">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
          <IconWrapper className="w-20 h-20 sm:w-24 sm:h-24 p-3 sm:p-4" isHighlighted={true}>
            <CenterTechIcon />
          </IconWrapper>
        </div>
        {outerIcons.map((icon, i) => {
          const { transformX, transformY } = getIconPosition(i)
          const isActive = activeId === icon.id
          return (
            <div
              key={icon.id}
              className="absolute z-20"
              style={{
                top: 0,
                left: 0,
                transform: `translate(${transformX}px, ${transformY}px)`,
                transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 relative">
                <div
                  className="absolute inset-[-16px] sm:inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-xl sm:blur-2xl"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                  }}
                />
                <IconWrapper className="w-14 h-14 sm:w-16 sm:h-16" isActive={isActive}>
                  {icon.component}
                </IconWrapper>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function NexusOrbSup() {
  return (
    <div className="w-full flex items-center justify-center font-sans p-2 sm:p-4 lg:p-8 overflow-hidden">
      <style>
        {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 15px 0px rgba(59, 130, 246, 0.3); filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.2)); }
                    50% { box-shadow: 0 0 25px 8px rgba(59, 130, 246, 0.1); filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.1)); }
                    100% { box-shadow: 0 0 15px 0px rgba(59, 130, 246, 0.3); filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.2)); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 15px 0px rgba(59, 130, 246, 0.2); filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.1)); }
                    50% { box-shadow: 0 0 25px 8px rgba(59, 130, 246, 0.05); filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.05)); }
                    100% { box-shadow: 0 0 15px 0px rgba(59, 130, 246, 0.2); filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.1)); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 4s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 4s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 4s ease-in-out infinite;
                }
            `}
      </style>
      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <IconGrid />
      </div>
    </div>
  )
}
