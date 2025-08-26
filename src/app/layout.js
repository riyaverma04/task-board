import CustomHeader from '@/components/CustomHeader'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import UserProvider from '@/context/UserProvider';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
      <ToastContainer />
      <CustomHeader/>
      {children}
      <Footer/>
      </UserProvider>
      </body>
    </html>
  )
}
