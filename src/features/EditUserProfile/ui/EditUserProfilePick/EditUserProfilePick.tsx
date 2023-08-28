import { useTranslation } from 'react-i18next';

import { useCallback, useState } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './EditUserProfilePick.module.scss';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { EditUserProfileTag } from '../EditUserProfileTag/EditUserProfileTag';
import { TagInfo } from '../../model/types/EditUserProfileSchema';

interface EditUserProfilePickProps {
  className?: string;
}

export function EditUserProfilePick({ className }: EditUserProfilePickProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [limitError, setLimitError] = useState(false);
  const [data, setData] = useState<TagInfo[]>([
    { id: '1', important: true, content: '3' },
    { id: '2', important: false, content: '321321321321' },
    { id: '3', important: false, content: '321321321321' },
    { id: '4', important: false, content: '2' },
    { id: '5', important: false, content: '321321321321' },
    { id: '6', important: false, content: '321321321321' },
    { id: '7', important: false, content: '321321321321' },
    { id: '8', important: false, content: '3' },
    { id: '9', important: false, content: '321321321321' },
    { id: '10', important: false, content: '321321321321' },
  ]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  const addItem = useCallback(() => {
    if (data.length === 10) {
      setLimitError(true);
      return setTimeout(() => {
        setLimitError(false);
      }, 3000);
    }
    return setData((prev) => [...prev, { id: '421421', content: '321', important: false }]);
  }, [data.length]);

  return (
    <div className={classNames(styles.EditUserProfilePick, {}, [className])}>
      <Text
        className={styles.limit}
        align='right'
        bold='bold_900'
        size='size_l'
        text={`${data.length}/10`}
      />
      {/* TODO LIMITERROR */}
      <HStack
        className={`${styles.new} ${limitError && styles.limitError}`}
        align='center'
        justify='center'
      >
        <Input value={value} onChange={onChange} theme='dark-pick' className={styles.input} />
        <Button className={styles.add} theme='clear'>
          +
        </Button>
      </HStack>
      <div className={styles.tags}>
        {data.map((el) => (
          <EditUserProfileTag key={el.id} info={el} />
        ))}
      </div>
      <HStack justify='between'>
        <Button className={styles.button} size='size_l' theme='attention'>
          {t('Отмена')}
        </Button>
        <Button className={styles.button} size='size_l' theme='success'>
          {t('Сохранить')}
        </Button>
      </HStack>
    </div>
  );
}
