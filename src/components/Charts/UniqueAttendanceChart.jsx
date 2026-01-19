import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const segments = [
  { name: 'Esports', value: 9100, percent: 30, color: '#4832B8' },
  { name: 'Talent development', value: 3700, percent: 13, color: '#7086FD' },
  { name: 'B2B', value: 3700, percent: 12, color: '#CC3150' },
  { name: 'Community', value: 13700, percent: 45, color: '#D9D9D9' },
];

const gapTargets = [
  { value: 1000, label: '1k' },
  { value: 4000, label: '4k' },
  { value: 1000, label: '1k' },
  { value: 12000, label: '12k' },
];


export default function AttendanceChart() {
  const ref = useRef(null);

  useEffect(() => {
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

    /* ---------- PIE SETUP ---------- */
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

    /* ---------- SEGMENT LABELS ---------- */
    svg
      .selectAll('.value-label')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', d => (d.data.name === 'Community' ? '#000' : '#fff'))
      .style('font-size', '12px')
      .style('font-weight', 600)
      .html(
        d =>
          `${(d.data.value / 1000).toFixed(1)}k\n(${d.data.percent}%)`
      );

    /* ---------- GAP TO TARGET RING ---------- */
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

    /* ---------- CENTER HOLE ---------- */
    svg
      .append('circle')
      .attr('r', 65)
      .attr('fill', '#2A465D');

  }, []);

  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
