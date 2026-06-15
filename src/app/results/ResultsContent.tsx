'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { results, discourseLabels, neurosisLabels } from '@/data/results';
import { DiscourseType, NeurosisType, ResultKey } from '@/types';

export default function ResultsContent() {
  const params = useSearchParams();
  const d = params.get('d') as DiscourseType | null;
  const n = params.get('n') as NeurosisType | null;

  if (!d || !n) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          未找到结果。请先完成测试。
        </p>
        <Link
          href="/survey"
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--gold)' }}
        >
          开始测试 →
        </Link>
      </main>
    );
  }

  const key: ResultKey = `${d}_${n}`;
  const result = results[key];

  if (!result) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          出现错误，请重新测试。
        </p>
        <Link href="/survey" className="mt-4 text-xs" style={{ color: 'var(--gold)' }}>
          重新测试 →
        </Link>
      </main>
    );
  }

  const discourse = discourseLabels[d];
  const neurosis = neurosisLabels[n];

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-8 font-sans"
          style={{ color: 'var(--gold)' }}
        >
          你的解读
        </p>

        {/* Title */}
        <h1
          className="font-display text-4xl leading-tight mb-2"
          style={{ color: 'var(--text)' }}
        >
          {result.title}
        </h1>
        <p className="text-sm mb-10 font-sans" style={{ color: 'var(--text-dim)' }}>
          {result.subtitle}
        </p>

        {/* Axes badges */}
        <div className="flex gap-3 mb-10">
          <div
            className="px-3 py-2 rounded text-xs"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <span className="font-medium" style={{ color: 'var(--gold)' }}>
              {discourse.label}
            </span>
            <span className="ml-2" style={{ color: 'var(--text-dim)' }}>
              {discourse.name}
            </span>
          </div>
          <div
            className="px-3 py-2 rounded text-xs"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <span className="font-medium" style={{ color: '#9b7a5c' }}>
              {neurosis.label}
            </span>
            <span className="ml-2" style={{ color: 'var(--text-dim)' }}>
              {neurosis.name}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10" style={{ height: '1px', background: 'var(--border)' }} />

        {/* Reading */}
        <div className="mb-10 space-y-4">
          {result.reading.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-display text-base leading-relaxed"
              style={{ color: 'var(--text)', fontStyle: i === 0 ? 'normal' : 'normal' }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Symptom */}
        <div
          className="p-5 rounded mb-8"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
            你的症状
          </p>
          <p className="font-display text-base italic leading-relaxed" style={{ color: 'var(--text)' }}>
            {result.symptom}
          </p>
        </div>

        {/* Discourse detail */}
        <div className="mb-6">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-dim)' }}
          >
            关于 {discourse.name}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {result.discourse.description}
          </p>
        </div>

        <div className="mb-10">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-dim)' }}
          >
            关于 {neurosis.name}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {result.neurosis.description}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ height: '1px', background: 'var(--border)' }} />

        {/* Figure */}
        <div className="mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: 'var(--text-dim)' }}
          >
            你的人物原型
          </p>
          <p
            className="font-display text-xl mb-3"
            style={{ color: 'var(--gold)' }}
          >
            {result.figure}
          </p>
          <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
            {result.figureNote}
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col gap-3">
          <Link
            href="/survey"
            className="w-full text-center py-4 rounded text-sm font-sans font-medium tracking-widest uppercase transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--gold)', color: '#0d0c0b' }}
          >
            重新测试
          </Link>
          <Link
            href="/"
            className="w-full text-center py-3 rounded text-sm font-sans tracking-wider uppercase transition-colors duration-200"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            返回首页
          </Link>
        </div>

        <p className="mt-10 text-xs text-center leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          这是一种诠释性工具，而非临床仪器。其类别来源于雅克·拉康的研讨班，以及后续分析师的工作，包括斯拉沃热·齐泽克、布鲁斯·芬克和达里安·利德。
        </p>
      </div>
    </main>
  );
}
