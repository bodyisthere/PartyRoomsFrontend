import { useTranslation } from 'react-i18next';

// import { classNames } from '@/shared/lib/classNames/classNames';

// import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
      const { i18n } = useTranslation();

      const toggle = async () => {
        console.log('current: ', i18n.language);
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
      };

      return (
        <div className={className} style={{'background':'red','width':'50x','height':'50px'}} onClick={toggle}>{i18n.language}</div>
      )
};