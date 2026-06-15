import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-10 font-sans"
          style={{ color: 'var(--gold)' }}
        >
          拉康精神分析
        </p>

        <h1
          className="font-display text-5xl leading-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          主体
          <br />
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>言说</span>
        </h1>

        <blockquote
          className="font-display text-lg italic leading-relaxed mb-10 pl-4"
          style={{
            color: 'var(--text-muted)',
            borderLeft: '1px solid var(--gold-dim)',
          }}
        >
          &ldquo;我在语言中认同自己，但只是以迷失其中的方式，就像一个客体。&rdquo;
          <footer className="mt-2 text-sm not-italic" style={{ color: 'var(--text-dim)' }}>
            — 雅克·拉康
          </footer>
        </blockquote>

        <div className="space-y-4 mb-12" style={{ color: 'var(--text-muted)' }}>
          <p className="text-base leading-relaxed">
            二十道问题。两条轴线。一次对你的结构的解读。
          </p>
          <p className="text-sm leading-relaxed">
            这份测试将你的回答映射到拉康精神分析的两个坐标上：你所言说的话语位置——主人、大学、歇斯底里或分析师——以及你的神经症类型——强迫性或癔症性。
          </p>
          <p className="text-sm leading-relaxed">
            结果不是诊断。它是一次解读：一种将语言举起来，看它揭示了你与欲望、权威和大他者之间关系的方式。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-12">
          {[
            { label: '主人', desc: '命令。决断。不质疑。' },
            { label: '大学', desc: '知晓。传递。管理。' },
            { label: '歇斯底里', desc: '质疑。拒绝。发问。' },
            { label: '分析师', desc: '倾听。持守空间。引发欲望。' },
          ].map((d) => (
            <div
              key={d.label}
              className="p-3 rounded"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div
                className="text-xs font-sans font-medium tracking-wide mb-1"
                style={{ color: 'var(--gold)' }}
              >
                {d.label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {d.desc}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/survey"
          className="inline-block w-full text-center py-4 rounded text-sm font-sans font-medium tracking-widest uppercase transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--gold)', color: '#0d0c0b' }}
        >
          开始测试
        </Link>

        <p className="mt-4 text-center text-xs" style={{ color: 'var(--text-dim)' }}>
          20道问题 · 约5至7分钟
        </p>
      </div>
    </main>
  );
}
