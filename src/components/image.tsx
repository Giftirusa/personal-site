import React from "react"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  bg?: string;
}

export const Image = (props: ImageProps) => {
  const { className, bg = '#1C2125', style, ...rest } = props

  return (
    <img 
      className={`object-cover ${className || 'md-h-[300px] md:min-h-[350px]'}`}
      style={{ background: bg, ...(style || {}) }}
      loading="lazy"
      {...rest}
    />
  )
}

interface ImageRowProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ImageProps[];
}

export const ImageRow = (props: ImageRowProps) => {
  const { data, className, ...rest } = props

  return (
    <div className={`w-full flex gap-x-4 ${className || ''}`} {...rest}>
      { data.map((item, index) => {
        const percentage = 100 / data.length;
        const width = `${percentage}%`;

        return <Image style={{ width: `calc(${width} - 0.5rem)` }} key={index} {...item} />
      }) }
    </div>
  )
}