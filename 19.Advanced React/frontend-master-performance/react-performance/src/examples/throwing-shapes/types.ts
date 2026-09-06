export type ShapeType = 'circle' | 'square';

export interface Shape {
  id: number;
  type: ShapeType;
  x: number;
  y: number;
  size: number;
  color: string;
}
