// Shapes
// Area, Perimeter
// Simple - single function calculateTotalArea

// Interface A Shape
interface Shape {
    area(): number;
    perimeter(): number;
}

export class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}

export class Rectangle implements Shape {
    constructor(
        private width: number,
        private height: number,
    ) {}
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return this.width + this.height;
    }
}

export function calculateTotalArea(shape: Shape): number {
    return shape.area();
}

export function calculateTotalPerimeter(shape: Shape): number {
    return shape.perimeter();
}
