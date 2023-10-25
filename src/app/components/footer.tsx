import { WhiteLogo } from './svgs/Index';

export default function Footer() {
  return (
    <footer className="flex flex-col h-[51px] justify-center items-center px-[34px] mt-8 border-t border-lightGrey">
      <WhiteLogo className="text-[20px]" />
      <span className="text-sm">© fnmatheus</span>
    </footer>
  )
}
