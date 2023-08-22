import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ConnectRoom.module.scss';
import { useRoom } from '@/entities/Room/api/roomApi';
import { roomActions } from '@/entities/Room/model/slice/roomSlice';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { calcTheRemainingQuantity } from '../lib/calcTheRemainingQuantity';

interface ConnectRoomProps {
  className?: string;
}

export function ConnectRoom({ className }: ConnectRoomProps) {
  const { t } = useTranslation();
  const { data, isLoading } = useRoom();
  const [avatars, setAvatars] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(roomActions.setRoom(data));
      if (data.images.length > 4) {
        return setAvatars(data?.images.slice(0, 4));
      }
      return setAvatars(data?.images);
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <VStack align='center' justify='center' className={styles.ConnectRoom} max>
        <Skeleton width={393} margin='0px 0px 15px 0px' height={23} borderRadius='15px' />
        <Skeleton width={294} margin='0px 0px 15px 0px' height={55} borderRadius='15px' />
        <Skeleton width={120} margin='0px 0px 10px 0px' height={23} borderRadius='15px' />
        <Skeleton width={200} margin='0px' height={50} borderRadius='15px' />
        <Skeleton width={174} margin='10px 0px 0px 0px' height={23} borderRadius='15px' />
      </VStack>
    );
  }

  return (
    data && (
      <VStack
        align='center'
        justify='center'
        className={classNames(styles.ConnectRoom, {}, [className])}
      >
        <HStack className={styles.text}>
          <Text bold='bold_900' title='Вас пригласили в&nbsp;' size='size_xl' />
          <Text theme='placeholder' text={data.title} size='size_xl' />
        </HStack>
        <Button className={styles.button} size='size_xl'>
          {t('Присоединиться')}
        </Button>
        <Text className={styles.already} bold='bold_900' text={t('уже тут')} size='size_xl' />
        <HStack>
          {avatars.map((el) => (
            <Avatar size={50} borderRadius='50%' src={el} key={el} alt='Photo' />
          ))}
        </HStack>
        <p className={styles.more}>
          {t('и ещё')}
          <span className={styles.count}> {calcTheRemainingQuantity(data.images.length)} </span>
          {t('пользователей')}
        </p>
      </VStack>
    )
  );
}
