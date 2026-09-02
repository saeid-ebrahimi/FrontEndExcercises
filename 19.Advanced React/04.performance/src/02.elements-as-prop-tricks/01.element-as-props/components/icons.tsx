export const Loading = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>⏳</span>;
};

export const Error = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>❌</span>;
};

export const Warning = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>⚠️</span>;
};

export const Avatar = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>😎</span>;
};
