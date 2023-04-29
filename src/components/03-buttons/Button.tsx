import { Inter } from 'next/font/google';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { LoadingIcon } from '../icons/LoadingIcon';
import { MovableIcon } from '../icons/MovableIcon';

const inter = Inter({ weight: '500', subsets: ['latin'] });

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  movable?: boolean;
}

export const Button = ({
  variant = 'primary',
  disabled,
  movable,
  children,
  ...props
}: ButtonProps) => {
  const ButtonToRender = buttonController[variant];
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  }, [isLoading]);

  return (
    <ButtonToRender
      {...props}
      className={`
        ${inter.className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-125'}
        ${isLoading && !disabled && !movable && 'cursor-wait'}
        ${movable && 'cursor-move'}
        rounded-full text-white uppercase py-3 transition-all focus:border-2 focus:border-[#D9CDF7] flex justify-center items-center gap-2`}
      onClick={handleClick}
    >
      {isLoading && !movable && <LoadingIcon />}
      {movable && <MovableIcon />}
      {children}
    </ButtonToRender>
  );
};

export const PrimaryButton = ({ children, className, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className} bg-[#8257E5]`}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className} bg-[#3C3748]`}>
      {children}
    </button>
  );
};
export const TertiaryButton = ({ children, className, disabled, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className} bg-transparent`}>
      {children}
    </button>
  );
};

const buttonController = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
};
