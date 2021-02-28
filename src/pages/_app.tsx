import { useSession } from 'next-auth/client'
import '../styles/global.css';
import Login from './login';

function MyApp({ Component, pageProps }) {
  const [session] = useSession();
  return (
    <>
      { session ? <Component {...pageProps} session={session} /> : <Login {...pageProps} />}
    </>
  )
}

export default MyApp
