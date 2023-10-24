import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <div className=' bg-white/70'>
     <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <p className='text-gray-400 text-md'>
                Copyright &copy; 2023, Quill.
            </p>
            <span className='text-gray-400 text-md hover:text-blue-300'>
                <Link href='/privacy'>
                    Privacy Policy
                </Link>
            </span>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer