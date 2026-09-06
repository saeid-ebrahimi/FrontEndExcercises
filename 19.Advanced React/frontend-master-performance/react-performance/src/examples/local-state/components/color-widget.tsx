import { Card } from '$components/card';
import { Input } from '$components/input';
import { Button } from '$components/button';

// WRONG: Receiving state and setter as props
interface ColorWidgetWrongProps {
  color: string;
  onColorChange: (color: string) => void;
}

export function ColorWidgetWrong({ color, onColorChange }: ColorWidgetWrongProps) {
  console.log('ColorWidget rendered');

  const presetColors = [
    '#ef4444', // red
    '#f59e0b', // amber
    '#10b981', // emerald
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#ec4899', // pink
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Color Widget
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        Pick a color. Notice this re-renders when ANY widget updates because state is in the parent.
      </p>

      <div className="space-y-4">
        <div
          className="h-24 rounded-lg border-2 border-slate-200 dark:border-slate-700"
          style={{ backgroundColor: color }}
        />

        <Input
          type="color"
          label="Choose color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        />

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Preset colors:
          </p>
          <div className="flex gap-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="h-8 w-8 rounded border-2 border-slate-200 transition-transform hover:scale-110 dark:border-slate-700"
                style={{ backgroundColor: presetColor }}
                onClick={() => onColorChange(presetColor)}
                aria-label={`Select ${presetColor}`}
              />
            ))}
          </div>
        </div>

        <Button onClick={() => onColorChange('#3b82f6')} variant="secondary" size="small">
          Reset to Blue
        </Button>
      </div>
    </Card>
  );
}
