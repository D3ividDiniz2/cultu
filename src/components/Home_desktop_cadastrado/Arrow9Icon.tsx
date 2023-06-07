import { memo, SVGProps } from 'react';

const Arrow9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.707108 -0.707107C0.316584 -1.09763 -0.316581 -1.09763 -0.707106 -0.707107L-7.07107 5.65685C-7.46159 6.04738 -7.46159 6.68054 -7.07107 7.07107C-6.68054 7.46159 -6.04738 7.46159 -5.65685 7.07107L1.1621e-06 1.41421L5.65686 7.07107C6.04738 7.46159 6.68054 7.46159 7.07107 7.07107C7.46159 6.68054 7.46159 6.04738 7.07107 5.65685L0.707108 -0.707107ZM1 28L1 4.37114e-08L-0.999999 -4.37114e-08L-1 28L1 28Z'
      fill='#FAFAFA'
    />
  </svg>
);
const Memo = memo(Arrow9Icon);
export { Memo as Arrow9Icon };
