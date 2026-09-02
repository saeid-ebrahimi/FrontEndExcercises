export type IconProps = {
  size?: string;
  color?: string;
};
export const Loading = ({ size, color }: IconProps) => {
  return <span style={{ fontSize: size, color: color }}>⏳</span>;
};

export const Error = ({ size, color }: IconProps) => {
  return <span style={{ fontSize: size, color: color }}>❌</span>;
};

export const Warning = ({ size, color }: IconProps) => {
  return <span style={{ fontSize: size, color: color }}>⚠️</span>;
};

export const Avatar = ({ size, color }: IconProps) => {
  return <span style={{ fontSize: size, color: color }}>😎</span>;
};
