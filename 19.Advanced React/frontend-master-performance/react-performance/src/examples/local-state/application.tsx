import { Container } from '$components/container';
import { CounterWidget } from './components/counter-widget';
import { TextWidget } from './components/text-widget';
import { ColorWidget } from './components/color-widget';

function Application() {
  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Local State Demo
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CounterWidget />
        <TextWidget />
        <ColorWidget />
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Problem
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• Each widget&apos;s state is stored in the parent component</li>
          <li>• When ANY widget&apos;s state changes, the parent re-renders</li>
          <li>• When the parent re-renders, ALL children re-render</li>
          <li>• This creates unnecessary work and hurts performance</li>
          <li>• It also makes the code harder to maintain and understand</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
