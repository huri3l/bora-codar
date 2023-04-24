import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { SkipBackIcon, SkipForwardIcon, PlayIcon } from 'lucide-react';

const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700'] });

export const PlayerScreen = () => {
  return (
    <div className={`${roboto.className} bg-[#2A2141] w-fit p-9 text-white space-y-8 rounded-xl`}>
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="w-48 h-48 md:w-20 md:h-20 relative">
          <Image src="/images/01-player.png" fill alt="teste" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="font-bold text-xl">Acorda Devinho</h1>
          <span className="font-normal text-[#E1E1E6] text-md">Banda Rocketseat</span>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="transition-all hover:opacity-80">
          <SkipBackIcon className="fill-[#E1E1E6] stroke-[#E1E1E6]" />
        </button>
        <button className="transition-all hover:opacity-80">
          <PlayIcon className="fill-[#E1E1E6] stroke-[#E1E1E6]" />
        </button>
        <button className="transition-all hover:opacity-80">
          <SkipForwardIcon className="fill-[#E1E1E6] stroke-[#E1E1E6]" />
        </button>
      </div>
      <div className="space-y-2">
        <div className="relative">
          <div className="w-3/4 z-10 rounded-lg h-1.5 bg-[#D9D9D9]" />
          <div className="w-full rounded-lg h-1.5 bg-[#D9D9D9] opacity-30 absolute top-0" />
        </div>
        <div className="text-[#C4C4CC] flex justify-between">
          <span className="text-[#C4C4CC]">03:20</span>
          <span>00:12</span>
        </div>
      </div>
    </div>
  );
};
