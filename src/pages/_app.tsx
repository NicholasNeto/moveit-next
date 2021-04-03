import { Provider as NextAuthProviderGitHub } from 'next-auth/client'
import { Menu } from '../components/menu/Menu';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (

    <NextAuthProviderGitHub session={pageProps.session}>
      <div style={{display: 'flex'}}>
        <Menu />
        <Component {...pageProps} />
      </div>
    </NextAuthProviderGitHub>
  )

}

export default MyApp
