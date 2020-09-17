import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false });

const Page = () => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/inicio');
    }
  }, [user, loading]);

  return <p>Redirecting...</p>;
};

export default Page;
