import Image from 'next/image';
import sofa from './sofa.png';
import sofa360 from './sofa.gif';
import enable360Icon from './360.svg';
import disable360Icon from './close.svg';

import { Lato, Crimson_Pro } from 'next/font/google';
import { useState } from 'react';

const lato = Lato({ weight: '300', subsets: ['latin'] });
const crimsonPro = Crimson_Pro({ weight: '600', subsets: ['latin'] });

export const ProductPageScreen = () => {
  const [is360, setIs360] = useState(false);

  const toggle360 = () => {
    setIs360(!is360);
  };

  return (
    <div className={`${lato.className} flex flex-col md:flex-row gap-3 w-full h-fit`}>
      <article className="relative w-full mx-auto md:w-1/2 md:mx-0 h-80">
        <Image
          src={is360 ? sofa360 : sofa}
          alt={
            is360
              ? 'Animação do Sofá girando em 360 graus.'
              : 'Sofá com tom arrosado e pernas de madeira com detalhe cromado nos pés'
          }
          fill
          unoptimized
          className="object-contain"
        />
        <button
          aria-label={
            is360
              ? 'Desabilitar modo de visualização em 360 graus'
              : 'Habilitar modo de visualização em 360 graus'
          }
          onClick={toggle360}
        >
          <Image
            src={is360 ? disable360Icon : enable360Icon}
            alt={
              is360
                ? 'Desabilitar modo de visualização em 360 graus'
                : 'Habilitar modo de visualização em 360 graus'
            }
            className="absolute top-0 right-1/4"
          />
        </button>
      </article>
      <main className="px-10">
        <div className="flex flex-col gap-3 mb-12">
          <span className="uppercase text-sm">Código: 42404</span>
          <h1 className={`${crimsonPro.className} text-5xl md:text-6xl`}>Sofá Margot II - Rosé</h1>
          <span className="text-xl">R$ 4.000</span>
        </div>
        <button className="uppercase border-[1px] border-black rounded-full px-5 py-2">
          Adicionar à Cesta
        </button>
      </main>
    </div>
  );
};
