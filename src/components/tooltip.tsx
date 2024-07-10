import React, { useId } from 'react'
// @ts-ignore
import { Tooltip as DefaultTooltip, type TooltipRefProps } from 'react-tooltip';

interface TooltipProps extends Partial<TooltipRefProps> {
  triggerElement: React.ReactNode;
  content: string;
  id?: string;
}

export const Tooltip = ({ triggerElement, id: propsId, content, ...props }: TooltipProps) => {
  const generatedId = useId();

  const id = propsId || generatedId;

  return (
    <>
      <div data-tooltip-id={id} data-tooltip-content={content || ''}>
        { triggerElement }
      </div>
      <DefaultTooltip
        id={id}
        classNameArrow="hidden"
        style={{
          backgroundColor: '#26272B',
          borderRadius: 8,
          opacity: 1,
          fontSize: 12,
          fontWeight: 500,
        }}
        {...props}
      />
    </>
  )
}