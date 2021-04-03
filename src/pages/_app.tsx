import { Provider as NextAuthProviderGitHub } from 'next-auth/client'
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (

    <NextAuthProviderGitHub session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProviderGitHub>
  )

}

export default MyApp
