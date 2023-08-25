import { HStack } from '@/shared/ui/Stack';
import { UserProfile } from '@/widgets/UserProfile';

function ProfilePage() {
  return (
    <HStack data-testid='ProfilePage' align='center' justify='center'>
      <UserProfile />
    </HStack>
  );
}

export default ProfilePage;
