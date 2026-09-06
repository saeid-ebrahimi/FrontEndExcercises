import { Card } from '$components/card';
import { Button } from '$components/button';
import type { ThemeSettings } from '../types';

interface ThemeSettingsCardProps {
  theme: ThemeSettings;
  onUpdateTheme: (theme: Partial<ThemeSettings>) => void;
}

export function ThemeSettingsCard({ theme, onUpdateTheme }: ThemeSettingsCardProps) {
  console.log('🎨 ThemeSettingsCard rendered');

  const colors = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Red', value: '#ef4444' },
  ];

  const fontSizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        Theme Settings
      </h2>

      <div className="space-y-4">
        <div>
          <div className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Primary Color
          </div>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => onUpdateTheme({ primaryColor: color.value })}
                className={`h-10 w-10 rounded-lg border-2 transition-transform hover:scale-110 ${
                  theme.primaryColor === color.value
                    ? 'border-slate-900 dark:border-slate-100'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={color.name}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Font Size
          </div>
          <div className="flex gap-2">
            {fontSizes.map((size) => (
              <Button
                key={size}
                onClick={() => onUpdateTheme({ fontSize: size })}
                variant={theme.fontSize === size ? 'primary' : 'secondary'}
                size="small"
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-md bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <p className="text-xs text-yellow-800 dark:text-yellow-200">
            This component only uses <strong>theme</strong> from context
          </p>
        </div>
      </div>
    </Card>
  );
}
