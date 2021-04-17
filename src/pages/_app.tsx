import { Provider as NextAuthProviderGitHub } from 'next-auth/client'
import { ToastContainer } from 'react-toastify';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (

    <NextAuthProviderGitHub session={pageProps.session}>
      <Component {...pageProps} >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Component>
    </NextAuthProviderGitHub>
  )

}

export default MyApp
