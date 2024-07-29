import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
     <Link href="/" className='bank-card'>
      <div className='bank-card_content'>
       <div>
        <h1 className='font-semibold text-16 text-white'>
         {account.name || userName}
        </h1>
        <p className='font-black font-ibm-plex-serif text-white'>
         {formatAmount(account.currentBalance)}
        </p>
       </div>
       <article className='flex flex-col gap-2'>
        <div className='flex justify-between'>
         <h1 className='font-semibold text-12 text-white'>
          {userName}
         </h1>
         <h2 className='font-semibold text-12 text-white'>
          ●● / ●●
         </h2>
        </div>
        <p className='font-semibold text-14 text-white tracking-[1.1px]'>
         ●●●● ●●●● ●●●● ●●●● <span className='text-16'>{account.mask}</span>
        </p>
       </article>
      </div>

      <div className='bank-card_icon'>
       <Image 
        src="/icons/Paypass.svg"
        width={20}
        height={24}
        alt='pay'
       />
       <Image 
        src="/icons/mastercard.svg"
        width={45}
        height={32}
        alt='mastercard'
        className='ml-5'
       />
      </div>
      <Image 
       src="/icons/lines.png"
       width={316}
       height={190}
       alt='lines'
       className='top-0 left-0 absolute'
      />
     </Link>


    </div>
  )
}

export default BankCard