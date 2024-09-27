import { PropsWithChildren } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

// const override: CSSProperties = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: 'red',
// };

export function LoadingSpinner({
  color = 'white',
  size = 50,
}: PropsWithChildren<{ color?: string; size?: number }>) {
  return (
    <div className="sweet-loading">
      <CircleLoader
        color={color}
        loading
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
