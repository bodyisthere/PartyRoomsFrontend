import styles from './CircleLoader.module.scss';

interface CircleLoaderProps {
  className?: string;
  width?: string;
  height?: string;
}

export function CircleLoader({ className, height = '16px', width = '16px' }: CircleLoaderProps) {
  return (
    <div className={styles.loader} style={{ width, height }}>
      <span style={{ width, height }} />
    </div>
  );
}
