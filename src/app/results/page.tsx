import { Suspense } from 'react';
import ResultsContent from './ResultsContent';

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
            正在解读你的结构……
          </p>
        </main>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
