import styles from './CircleLoader.module.scss';

interface CircleLoaderProps {
  className?: string;
  width?: string;
  height?: string;
}

export const CircleLoader = ({ className, height = '16px', width = '16px' }: CircleLoaderProps) => (
  <div
    className={styles.loader}
    style={{ width, height }}
  >
    <span style={{ width, height }} />
  </div>
);
