import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const COLORS = {
  esports: '#4832B8',
  'talent development': '#7086FD',
  b2b: '#CC3150',
  community: '#D9D9D9',
};

export default function UniqueAttendanceChart({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!data) return;

    const width = 520;
    const height = 520;
    const center = width / 2;

    d3.select(ref.current).selectAll('*').remove();

    const svg = d3
      .select(ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${center},${center})`);

    /* ---------- BUILD SEGMENTS ---------- */
    const segments = Object.entries(data).map(([key, value]) => ({
      name: key,
      value: value.actual * 1000,
      percent: Math.round(
        (value.actual /
          Object.values(data).reduce((a, b) => a + b.actual, 0)) *
          100
      ),
      color: COLORS[key],
    }));

    /* ---------- GAP TARGETS ---------- */
    const gapTargets = Object.entries(data).map(([_, value]) => ({
      value: value.gap * 1000,
      label: `${value.gap}k`,
    }));

    /* ---------- PIE ---------- */
    const pie = d3
      .pie()
      .value(d => d.value)
      .startAngle(-Math.PI / 2)
      .endAngle(1.5 * Math.PI)
      .padAngle(0.02);

    /* ---------- MAIN DONUT ---------- */
    const arc = d3
      .arc()
      .innerRadius(95)
      .outerRadius(155)
      .cornerRadius(6);

    const arcs = pie(segments);

    svg
      .selectAll('.segment')
      .data(arcs)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color);

    /* ---------- LABELS ---------- */
    svg
      .selectAll('.value-label')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', d =>
        d.data.name === 'community' ? '#000' : '#fff'
      )
      .style('font-size', '12px')
      .style('font-weight', 600)
      .text(
        d =>
          `${(d.data.value / 1000).toFixed(1)}k (${d.data.percent}%)`
      );

    /* ---------- GAP RING ---------- */
    const gapArc = d3
      .arc()
      .innerRadius(170)
      .outerRadius(205);

    const gapArcs = pie(gapTargets);

    svg
      .selectAll('.gap')
      .data(gapArcs)
      .enter()
      .append('path')
      .attr('d', gapArc)
      .attr('fill', '#3F586B')
      .attr('opacity', 0.9);

    /* ---------- GAP LABELS ---------- */
    svg
      .selectAll('.gap-label')
      .data(gapArcs)
      .enter()
      .append('text')
      .attr('transform', d => {
        const [x, y] = gapArc.centroid(d);
        return `translate(${x * 1.15},${y * 1.15})`;
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff')
      .style('font-size', '11px')
      .text(d => d.data.label);

    /* ---------- CENTER ---------- */
    svg
      .append('circle')
      .attr('r', 65)
      .attr('fill', '#2A465D');
  }, [data]);

  return <div ref={ref} />;
}
