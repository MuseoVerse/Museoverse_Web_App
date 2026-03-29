// Pure SVG chart components — drop-in replacements for Recharts
// Used to avoid the Recharts 2.15.x duplicate SVG key bug.

// ─── helpers ────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

function niceMax(val: number): number {
  if (val <= 0) return 10;
  const magnitude = Math.pow(10, Math.floor(Math.log10(val)));
  const n = val / magnitude;
  let nice: number;
  if (n <= 1) nice = 1;
  else if (n <= 2) nice = 2;
  else if (n <= 5) nice = 5;
  else nice = 10;
  return nice * magnitude;
}

function formatTick(val: number): string {
  if (val >= 1000) {
    const k = val / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  }
  return String(Math.round(val));
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutArcPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
): string {
  // clamp sweep to avoid degenerate arcs
  const sweep = Math.min(endAngle - startAngle, 359.99);
  const end = startAngle + sweep;
  const p1 = polarToCartesian(cx, cy, outerR, startAngle);
  const p2 = polarToCartesian(cx, cy, outerR, end);
  const p3 = polarToCartesian(cx, cy, innerR, end);
  const p4 = polarToCartesian(cx, cy, innerR, startAngle);
  const large = sweep > 180 ? 1 : 0;
  if (innerR <= 0) {
    return `M ${cx} ${cy} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${outerR} ${outerR} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`;
  }
  return [
    `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
    `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

// ─── SimpleBarChart ──────────────────────────────────────────────────────────

export interface BarSeries {
  key: string;
  color: string;
  label?: string;
}

export interface SimpleBarChartProps {
  data: Record<string, string | number>[];
  xKey: string;
  bars: BarSeries[];
  height?: number;
}

export function SimpleBarChart({ data, xKey, bars, height = 220 }: SimpleBarChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => {
      setChartWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const W = Math.max(chartWidth, 520);
  const H = height;
  const PAD = { top: 12, right: 18, bottom: 28, left: 46 };
  const cw = W - PAD.left - PAD.right;
  const ch = H - PAD.top - PAD.bottom;

  const maxVal = Math.max(...data.flatMap((d) => bars.map((b) => Number(d[b.key] || 0))));
  const yMax = niceMax(maxVal || 1);
  const yTickCount = 4;
  const yTicks = Array.from({ length: yTickCount + 1 }, (_, i) => (yMax / yTickCount) * i);

  const groupWidth = cw / data.length;
  const hPad = groupWidth * 0.22;
  const barGroupW = groupWidth - hPad;
  const barW = barGroupW / bars.length;

  const gx = (i: number) => PAD.left + i * groupWidth + hPad / 2;
  const yPos = (val: number) => PAD.top + ch - (val / yMax) * ch;

  return (
    <div ref={containerRef} className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" style={{ height }}>
        {/* grid */}
        {yTicks.map((t) => (
          <line
            key={`g${t}`}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={yPos(t)}
            y2={yPos(t)}
            stroke="#f0ebe3"
            strokeWidth={1}
          />
        ))}
        {/* y labels */}
        {yTicks.map((t) => (
          <text key={`yt${t}`} x={PAD.left - 5} y={yPos(t) + 4} textAnchor="end" fill="#a89279" fontSize={10}>
            {formatTick(t)}
          </text>
        ))}
        {/* bars */}
        {data.map((d, di) =>
          bars.map((b, bi) => {
            const val = Number(d[b.key] || 0);
            const bh = Math.max((val / yMax) * ch, 0);
            return (
              <rect
                key={`b${di}-${bi}`}
                x={gx(di) + bi * barW}
                y={yPos(val)}
                width={Math.max(barW - 2, 1)}
                height={bh}
                fill={b.color}
                rx={3}
                ry={3}
              />
            );
          })
        )}
        {/* x labels */}
        {data.map((d, di) => (
          <text
            key={`xl${di}`}
            x={gx(di) + barGroupW / 2}
            y={H - 4}
            textAnchor="middle"
            fill="#a89279"
            fontSize={10}
          >
            {String(d[xKey])}
          </text>
        ))}
      </svg>
    </div>
  );
}

// ─── SimpleAreaChart ─────────────────────────────────────────────────────────

export interface AreaSeries {
  key: string;
  stroke: string;
  fill: string; // use "none" for no fill
  label?: string;
  dashed?: boolean;
}

export interface SimpleAreaChartProps {
  data: Record<string, string | number>[];
  xKey: string;
  series: AreaSeries[];
  height?: number;
}

export function SimpleAreaChart({ data, xKey, series, height = 220 }: SimpleAreaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => {
      setChartWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const W = Math.max(chartWidth, 640);
  const H = height;
  const PAD = { top: 12, right: 18, bottom: 28, left: 46 };
  const cw = W - PAD.left - PAD.right;
  const ch = H - PAD.top - PAD.bottom;

  const allVals = data.flatMap((d) => series.map((s) => Number(d[s.key] || 0)));
  const maxVal = Math.max(...allVals);
  const yMax = niceMax(maxVal || 1);

  const yTickCount = 4;
  const yTicks = Array.from({ length: yTickCount + 1 }, (_, i) => (yMax / yTickCount) * i);

  const xScale = (i: number) =>
    data.length === 1 ? PAD.left + cw / 2 : PAD.left + (i / (data.length - 1)) * cw;
  const yScale = (v: number) => PAD.top + ch - (v / yMax) * ch;

  const linePath = (key: string) =>
    data
      .map((d, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(Number(d[key])).toFixed(1)}`)
      .join(" ");

  const areaPath = (key: string) => {
    const line = linePath(key);
    const lastX = xScale(data.length - 1).toFixed(1);
    const firstX = xScale(0).toFixed(1);
    const bottom = (PAD.top + ch).toFixed(1);
    return `${line} L${lastX},${bottom} L${firstX},${bottom} Z`;
  };

  return (
    <div ref={containerRef} className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" style={{ height }}>
      {/* grid */}
      {yTicks.map((t) => (
        <line
          key={`g${t}`}
          x1={PAD.left}
          x2={W - PAD.right}
          y1={yScale(t)}
          y2={yScale(t)}
          stroke="#f0ebe3"
          strokeWidth={1}
        />
      ))}
      {/* y labels */}
      {yTicks.map((t) => (
        <text key={`yt${t}`} x={PAD.left - 5} y={yScale(t) + 4} textAnchor="end" fill="#a89279" fontSize={10}>
          {formatTick(t)}
        </text>
      ))}
      {/* x labels */}
      {data.map((d, i) => (
        <text key={`xl${i}`} x={xScale(i)} y={H - 4} textAnchor="middle" fill="#a89279" fontSize={10}>
          {String(d[xKey])}
        </text>
      ))}
      {/* areas (render below lines) */}
      {series.map((s) =>
        s.fill !== "none" ? (
          <path key={`area-${s.key}`} d={areaPath(s.key)} fill={s.fill} />
        ) : null
      )}
      {/* lines */}
      {series.map((s) => (
        <path
          key={`line-${s.key}`}
          d={linePath(s.key)}
          fill="none"
          stroke={s.stroke}
          strokeWidth={2}
          strokeDasharray={s.dashed ? "4 4" : undefined}
        />
      ))}
      </svg>
    </div>
  );
}

// ─── SimpleDonutChart ────────────────────────────────────────────────────────

export interface PieSegment {
  name: string;
  value: number;
  color: string;
}

export interface SimpleDonutChartProps {
  data: PieSegment[];
  innerRadius?: number;
  outerRadius?: number;
  /** Size of the square SVG in px */
  size?: number;
  paddingAngle?: number;
}

export function SimpleDonutChart({
  data,
  innerRadius = 0,
  outerRadius = 65,
  size = 160,
  paddingAngle = 3,
}: SimpleDonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;

  const cx = size / 2;
  const cy = size / 2;

  let currentAngle = 0;
  const segments = data.map((d) => {
    const fraction = d.value / total;
    const sweep = fraction * 360;
    const startAngle = currentAngle + paddingAngle / 2;
    const segAngle = Math.max(sweep - paddingAngle, 0.1);
    currentAngle += sweep;
    return { ...d, startAngle, endAngle: startAngle + segAngle };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ height: size }} className="mx-auto block">
      {segments.map((s) => (
        <path
          key={`seg-${s.name}`}
          d={donutArcPath(cx, cy, innerRadius, outerRadius, s.startAngle, s.endAngle)}
          fill={s.color}
        />
      ))}
    </svg>
  );
}
