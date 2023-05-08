import Head from 'next/head';
import Nav from './Nav';
import { UserProvider } from '../lib/authContext';

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>Film Database</title>
    </Head>

    <Nav />
    <main className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          w-2/4
          rounded-lg
          my-16
          p-16
        "
      >
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
    {/* <footer>
        <p>hi</p>
        <h1>ManExpeditions</h1>
        <h2>About Us</h2>
        <h3>Hello!</h3>
        <h4>hello</h4>
    </footer> */}
  </UserProvider>
);
export default Layout;