import { memo } from 'react';
import type { Shape as ShapeType } from '../types';
import { Shape } from './shape';

interface ShapesGridProps {
  shapes: ShapeType[];
}

export const ShapesGrid = memo(({ shapes }: ShapesGridProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-lg border-2 border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
      {shapes.map((shape) => (
        <Shape key={shape.id} shape={shape} />
      ))}
    </div>
  );
});

ShapesGrid.displayName = 'ShapesGrid';
