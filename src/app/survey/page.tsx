'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { DiscourseType, NeurosisType } from '@/types';

type Answer = DiscourseType | NeurosisType;

export default function SurveyPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(Answer | null)[]>(Array(questions.length).fill(null));
  const [selected, setSelected] = useState<Answer | null>(null);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const question = questions[current];
  const progress = (current / questions.length) * 100;
  const isLast = current === questions.length - 1;

  useEffect(() => {
    setSelected(answers[current]);
  }, [current, answers]);

  function handleSelect(value: Answer) {
    if (animating) return;
    setSelected(value);

    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);

    setTimeout(() => advance(newAnswers), 400);
  }

  function advance(newAnswers: (Answer | null)[]) {
    setAnimating(true);
    setVisible(false);

    setTimeout(() => {
      if (isLast) {
        const discourseScores: Record<DiscourseType, number> = { M: 0, U: 0, H: 0, A: 0 };
        const neurosisScores: Record<NeurosisType, number> = { Obs: 0, Hys: 0 };

        newAnswers.forEach((ans, i) => {
          if (!ans) return;
          if (questions[i].type === 'discourse') {
            discourseScores[ans as DiscourseType]++;
          } else {
            neurosisScores[ans as NeurosisType]++;
          }
        });

        const discourse = (Object.entries(discourseScores) as [DiscourseType, number][]).reduce(
          (a, b) => (b[1] > a[1] ? b : a)
        )[0];
        const neurosis = (Object.entries(neurosisScores) as [NeurosisType, number][]).reduce(
          (a, b) => (b[1] > a[1] ? b : a)
        )[0];

        router.push(`/results?d=${discourse}&n=${neurosis}`);
      } else {
        setCurrent((c) => c + 1);
        setAnimating(false);
        setVisible(true);
      }
    }, 300);
  }

  function handleBack() {
    if (current === 0 || animating) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => c - 1);
      setVisible(true);
    }, 200);
  }

  const isNeurosis = question.type === 'neurosis';

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-px" style={{ background: 'var(--border)' }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%`, background: 'var(--gold)' }}
        />
      </div>

      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handleBack}
            disabled={current === 0}
            className="text-xs tracking-widest uppercase transition-colors duration-150 disabled:opacity-20"
            style={{ color: 'var(--text-muted)' }}
          >
            ← 返回
          </button>
          <span className="text-xs font-sans tabular-nums" style={{ color: 'var(--text-dim)' }}>
            {current + 1} / {questions.length}
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: isNeurosis ? '#9b7a5c' : 'var(--gold)' }}
          >
            {isNeurosis ? '神经症' : '话语'}
          </span>
        </div>

        {/* Question */}
        <div
          className="transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
        >
          <p
            className="font-display text-2xl leading-snug mb-10"
            style={{ color: 'var(--text)' }}
          >
            {question.text}
          </p>

          {/* Options */}
          <div className={`flex flex-col gap-3 ${isNeurosis ? '' : ''}`}>
            {question.options.map((opt, i) => {
              const val = 'discourse' in opt ? opt.value : (opt as { text: string; value: NeurosisType }).value;
              const isChosen = selected === val;

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(val as Answer)}
                  disabled={animating}
                  className="w-full text-left p-4 rounded transition-all duration-200 group"
                  style={{
                    background: isChosen ? 'var(--gold)' : 'var(--surface)',
                    border: `1px solid ${isChosen ? 'var(--gold)' : 'var(--border)'}`,
                    color: isChosen ? '#0d0c0b' : 'var(--text-muted)',
                  }}
                >
                  <span className="text-sm leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Neurosis section label */}
          {isNeurosis && current === 12 && (
            <p className="mt-8 text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              以下问题探讨你与欲望及症状形成的关系。请选择感觉最真实的选项——而非最动听的那个。
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
