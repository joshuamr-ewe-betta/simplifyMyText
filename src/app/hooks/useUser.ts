import { useEffect, useState } from 'react';
import { Hub } from 'aws-amplify/utils';
import {
  fetchUserAttributes,
  FetchUserAttributesOutput,
} from '@aws-amplify/auth';

export function useUser() {
  const [user, setUser] = useState<FetchUserAttributesOutput | undefined>();
  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await fetchUserAttributes();
        setUser(user);
      } catch {
        setUser(undefined);
      }
    };
    const hubListenerCancelToken = Hub.listen('auth', updateUser); // listen for login/signup events

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => hubListenerCancelToken(); // cleanup
  }, []);
  return {
    user,
  };
}
