import React from 'react';
import DefaultFade from 'react-reveal/Fade';

export const Fade = ({ children, ...props }: any) => {
  return (
    <DefaultFade default={500} {...props}>
      {children}
    </DefaultFade>
  )
}
