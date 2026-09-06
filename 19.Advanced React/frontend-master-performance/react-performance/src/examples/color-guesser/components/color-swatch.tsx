interface ColorSwatchProps {
  color: string;
}

export const ColorSwatch = ({ color }: ColorSwatchProps) => {
  console.log('ColorSwatch rendered');

  return (
    <div
      className="h-96 w-full rounded-lg border-4 border-slate-300 shadow-lg dark:border-slate-700"
      style={{ backgroundColor: '#' + color }}
      aria-label={`Color swatch showing ${color}`}
    />
  );
};
