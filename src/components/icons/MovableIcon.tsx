import { SVGProps } from 'react';

export const MovableIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 5C0.75 4.43046 1.21171 3.96875 1.78125 3.96875H16.2188C16.7883 3.96875 17.25 4.43046 17.25 5C17.25 5.56954 16.7883 6.03125 16.2188 6.03125H1.78125C1.21171 6.03125 0.75 5.56954 0.75 5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 1.25C0.75 0.680456 1.21171 0.21875 1.78125 0.21875H16.2188C16.7883 0.21875 17.25 0.680456 17.25 1.25C17.25 1.81954 16.7883 2.28125 16.2188 2.28125H1.78125C1.21171 2.28125 0.75 1.81954 0.75 1.25Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 8.75C0.75 8.18046 1.21171 7.71875 1.78125 7.71875H16.2188C16.7883 7.71875 17.25 8.18046 17.25 8.75C17.25 9.31954 16.7883 9.78125 16.2188 9.78125H1.78125C1.21171 9.78125 0.75 9.31954 0.75 8.75Z"
        fill="white"
      />
    </svg>
  );
};
