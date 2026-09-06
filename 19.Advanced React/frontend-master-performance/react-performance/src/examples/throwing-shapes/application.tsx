import { Container } from '$components/container';
import { Range } from '$components/range';
import { useMemo, useState } from 'react';
import { ShapesGrid } from './components/shapes-grid';
import { generateShapes } from './utilities/generate-shapes';

function Application() {
  const [shapeCount, setShapeCount] = useState(1000);

  const shapes = useMemo(() => generateShapes(shapeCount), [shapeCount]);

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Throwing Shapes
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Drag the slider to control how many shapes are rendered. Notice how the slider feels
          sluggish as it rerenders thousands of shapes on every change.
        </p>
      </section>

      <section className="space-y-4">
        <Range
          label={`Number of shapes: ${shapeCount.toLocaleString()}`}
          min={1000}
          max={20000}
          step={1000}
          value={shapeCount}
          onChange={setShapeCount}
        />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Currently rendering {shapes.length.toLocaleString()} shapes.
        </p>
      </section>

      <section>
        <ShapesGrid shapes={shapes} />
      </section>
    </Container>
  );
}

export default Application;
