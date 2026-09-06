import type { Shape, ShapeType } from '../types';

const colors = [
  '#ef4444',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#84cc16',
];

/**
 * Generate an array of shapes with random positions and colors
 * Intentionally not optimized to demonstrate performance issues
 */
export function generateShapes(count: number): Shape[] {
  const shapes: Shape[] = [];

  for (let i = 0; i < count; i++) {
    const type: ShapeType = i % 2 === 0 ? 'circle' : 'square';

    shapes.push({
      id: i,
      type,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  return shapes;
}
