import React from 'react';
import Image from 'next/image';
import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

const Footer = ({ user, type = 'desktop' }: FooterProps) => {

  const router = useRouter();
  const handleLogOut = async () => {
    const loggetOut = await logoutAccount();

    if(loggetOut) router.push('sign-in');
  }
  return (
    <footer className='footer'>
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className='font-bold text-gray-700 text-xl'>
          {user?.name[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className='font-semibold text-14 text-gray-600 truncate'>
          {user?.name}
        </h1>
        <p className='font-normal text-14 text-gray-600 truncate'>
          {user?.email}
        </p>
      </div>

      <div className='footer_image' onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm"/>
      </div>
    </footer>
  )
}

export default Footer;