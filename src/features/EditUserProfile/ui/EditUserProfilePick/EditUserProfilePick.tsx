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
  onSave: () => void;
  onCancel: () => void;
  tags?: TagInfo[];
  addItem: (tag: TagInfo) => void;
  removeItem: (id: string) => void;
}

export function EditUserProfilePick({
  className,
  addItem,
  onCancel,
  onSave,
  removeItem,
  tags,
}: EditUserProfilePickProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [limitError, setLimitError] = useState(false);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  const onAdd = useCallback(() => {
    const item: TagInfo = {
      id: `${Math.random()}`,
      content: value,
      important: false,
    };
    if (tags?.length === 10) {
      setLimitError(true);
      return setTimeout(() => {
        setLimitError(false);
      }, 3000);
    }
    addItem(item);
    return setValue('');
  }, [addItem, tags?.length, value]);

  return (
    <div className={classNames(styles.EditUserProfilePick, {}, [className])}>
      <Text
        className={`${styles.limit} ${limitError && styles.limitTextError}`}
        align='right'
        bold='bold_900'
        size='size_l'
        text={`${tags ? tags.length : 0}/10`}
      />
      <HStack
        className={`${styles.new} ${limitError && styles.limitError}`}
        align='center'
        justify='center'
      >
        <Input value={value} onChange={onChange} theme='dark-pick' className={styles.input} />
        <Button onClick={onAdd} disabled={limitError} className={styles.add} theme='clear'>
          +
        </Button>
      </HStack>
      <div className={styles.tags}>
        {tags && tags.length ? (
          tags.map((el) => <EditUserProfileTag onDelete={removeItem} key={el.id} info={el} />)
        ) : (
          <Text text={t('Пока ничего нет!')} align='center' bold='bold_900' theme='placeholder' />
        )}
      </div>
      <HStack justify='between'>
        <Button className={styles.button} onClick={onCancel} size='size_l' theme='attention'>
          {t('Отмена')}
        </Button>
        <Button className={styles.button} onClick={onSave} size='size_l' theme='success'>
          {t('Сохранить')}
        </Button>
      </HStack>
    </div>
  );
}
