import type { LucideIcon } from 'lucide-react';

interface BgIconsProps {
  icons: LucideIcon[];
  variant?: 'light' | 'dark';
  count?: number;
}

interface PlacedIcon {
  Icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  rotate: number;
  opacity: number;
  delay: number;
}

const seedPositions = [
  { top: '8%', left: '5%' },
  { top: '15%', left: '88%' },
  { top: '45%', left: '12%' },
  { top: '72%', left: '82%' },
  { top: '85%', left: '30%' },
  { top: '30%', left: '68%' },
  { top: '60%', left: '45%' },
  { top: '92%', left: '60%' },
  { top: '5%', left: '40%' },
  { top: '50%', left: '92%' },
];

export default function BgIcons({ icons, variant = 'light', count = 7 }: BgIconsProps) {
  const colorClass = variant === 'light' ? 'text-primary-200' : 'text-white/10';

  const placed: PlacedIcon[] = seedPositions.slice(0, count).map((pos, i) => ({
    Icon: icons[i % icons.length],
    top: pos.top,
    left: pos.left,
    size: 28 + ((i * 17) % 48),
    rotate: (i * 37) % 360,
    opacity: 0.3 + ((i * 13) % 50) / 100,
    delay: (i % 5) * 0.6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {placed.map((p, i) => {
        const { Icon } = p;
        return (
          <div
            key={i}
            className={`absolute ${colorClass} animate-float`}
            style={{
              top: p.top,
              left: p.left,
              animationDelay: `${p.delay}s`,
            }}
          >
            <Icon
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                transform: `rotate(${p.rotate}deg)`,
                opacity: p.opacity,
              }}
              strokeWidth={1.2}
            />
          </div>
        );
      })}
    </div>
  );
}
