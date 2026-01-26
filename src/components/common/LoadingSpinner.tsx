interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

export function LoadingSpinner({ size = 'medium', fullScreen = false }: LoadingSpinnerProps) {
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60,
  };

  const spinnerSize = sizeMap[size];

  const spinner = (
    <div
      className="spinner"
      style={{
        width: spinnerSize,
        height: spinnerSize,
      }}
    />
  );

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}>
        {spinner}
      </div>
    );
  }

  return spinner;
}
