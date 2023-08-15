module.exports = (componentName) => (
  `import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './${componentName}.module.scss';

interface ${componentName}Props {
 className?: string
}

export const ${componentName} = ({ }: ${componentName}Props) => {
 return <div className={classNames(styles.${componentName}, [className], {})} />
}
 `
);
