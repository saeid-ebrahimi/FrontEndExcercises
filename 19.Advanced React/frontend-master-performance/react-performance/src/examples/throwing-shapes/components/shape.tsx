import { memo } from 'react';
import type { Shape as ShapeType } from '../types';

interface ShapeProps {
  shape: ShapeType;
}

export const Shape = memo(({ shape }: ShapeProps) => {
  const style = {
    position: 'absolute' as const,
    left: `${shape.x}%`,
    top: `${shape.y}%`,
    width: `${shape.size}px`,
    height: `${shape.size}px`,
    backgroundColor: shape.color,
    borderRadius: shape.type === 'circle' ? '50%' : '0',
  };

  return <div style={style} />;
});

Shape.displayName = 'Shape';
