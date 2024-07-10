import * as React from "react"
import { SVGProps } from "react"

interface SvgProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const LogoIcon = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={47}
    fill="none"
    viewBox="0 0 55 47"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#3B64F4"
        d="M46.65 29.469a15.521 15.521 0 0 1-29.654-3.524H9.774A22.68 22.68 0 0 0 54.2 29.47h-7.55Z"
      />
      <path
        fill="#F42177"
        d="M54.618 19.263h-7.364a15.525 15.525 0 0 0-29.87 0h-7.346a22.679 22.679 0 0 1 44.562 0h.018Z"
      />
      <path
        fill="#18D680"
        d="M10.038 19.263a22.706 22.706 0 0 0-.267 6.682H0v-6.682h10.038Z"
      />
      <path
        fill="#FCC05E"
        d="M55 23.5c.001.817-.043 1.633-.132 2.445H16.996a15.346 15.346 0 0 1-.193-2.445 15.51 15.51 0 0 1 .585-4.237h37.23c.26 1.397.388 2.816.382 4.237Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .821h55v45.358H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const ArrowUpRightIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 15V9m0 0H9m6 0-6 6m-1.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z"
        {...rest as any}
      />
    </svg>
  )
}

export const ArrowRightIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 12.651h14m0 0-7-7m7 7-7 7"
        {...rest as any}
      />
    </svg>
  )
}

export const DownloadIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 12 4 4m0 0 4-4m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        {...rest as any}
      />
    </svg>
  )
}

export const MailIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M16.94 3A5.057 5.057 0 0 1 22 8.05v7.9c0 2.79-2.27 5.05-5.06 5.05H7.06A5.057 5.057 0 0 1 2 15.95v-7.9A5.05 5.05 0 0 1 7.06 3h9.88Zm1.59 6.54.08-.08a.773.773 0 0 0-.01-1 .84.84 0 0 0-.53-.26.76.76 0 0 0-.56.2L13 12a1.566 1.566 0 0 1-2 0L6.5 8.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 0 0 3.91 0l4.51-3.61Z"
        clipRule="evenodd"
        {...rest as any}
      />
    </svg>
  )
}

export const BehanceIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r={12} fill="#105DFB" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.5 17.058V6.75h4.784a2.777 2.777 0 0 1 2.782 2.771c0 .973-.3 1.575-1.401 2.193 1.317.598 1.683 1.427 1.683 2.583 0 1.563-1.394 2.76-2.964 2.76H4.5Zm2.024-8.602v2.479h2.37s1.151 0 1.151-1.24c0-1.239-1.151-1.239-1.151-1.239h-2.37Zm0 6.856v-2.676h2.542c.41 0 1.27.21 1.27 1.476 0 .939-.847 1.191-1.27 1.2H6.524ZM16.676 9.59c-1.456 0-3.613 1.042-3.613 3.81 0 1.686.926 3.85 3.706 3.85 2.224 0 3.247-1.626 3.481-2.439h-2.091c-.106.37-.517.778-1.39.778-1.27 0-1.72-1.081-1.787-1.622h5.268V13.4c0-2.768-2.118-3.81-3.574-3.81Zm0 1.582c-1.186 0-1.623.976-1.694 1.464h3.177c0-.488-.297-1.464-1.483-1.464Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M14.148 7.336v1.278h4.99V7.336h-4.99Z" />
    </svg>
  )
}

export const GithubIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
      fill="#fff"
      d="M12 1.5C6.199 1.5 1.5 6.199 1.5 12c0 4.646 3.006 8.57 7.18 9.962.524.092.721-.223.721-.499 0-.25-.013-1.076-.013-1.956-2.638.486-3.32-.643-3.53-1.233-.119-.302-.63-1.234-1.077-1.483-.367-.197-.892-.683-.013-.696.827-.013 1.418.761 1.615 1.076.944 1.588 2.454 1.142 3.058.867.091-.683.367-1.142.669-1.405-2.336-.262-4.777-1.168-4.777-5.184 0-1.142.406-2.087 1.076-2.822-.105-.263-.473-1.339.105-2.783 0 0 .88-.275 2.887 1.077a9.743 9.743 0 0 1 2.625-.355c.893 0 1.785.118 2.625.355 2.008-1.365 2.888-1.077 2.888-1.077.577 1.444.21 2.52.105 2.783.67.735 1.076 1.667 1.076 2.822 0 4.03-2.454 4.922-4.79 5.184.38.328.708.958.708 1.943 0 1.404-.013 2.533-.013 2.887 0 .276.197.604.722.499A10.518 10.518 0 0 0 22.5 12c0-5.801-4.699-10.5-10.5-10.5Z"
      {...rest as any}
      />
    </svg>
  )
}

export const MediumIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M4.425 16.536 2 19.648V20h5.98v-.352l-2.409-3.112V8.502L10.738 20h.73l4.419-11.498v9.44l-1.81 1.706V20H22v-.352l-1.76-1.707V6.06L22 4.402V4h-5.465l-3.987 9.858L8.096 4H2.282v.402l2.143 2.56v9.574Z"
      />
    </svg>
  )
}


export const LinkedInIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#a)">
        <path
          fill="#1275B1"
          d="M22.228 0H1.772A1.772 1.772 0 0 0 0 1.772v20.456A1.772 1.772 0 0 0 1.772 24h20.456A1.772 1.772 0 0 0 24 22.228V1.772A1.772 1.772 0 0 0 22.228 0ZM7.153 20.445H3.545V8.983h3.608v11.462ZM5.347 7.395a2.072 2.072 0 1 1 2.083-2.07 2.042 2.042 0 0 1-2.083 2.07Zm15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H9.32V8.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695l-.002 7.09Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}


export const XIcon = (props: SvgProps) => {
  const { size = 24, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="m2.45 2.729 7.41 9.908-7.457 8.056h1.679l6.528-7.053 5.275 7.053h5.711L13.77 10.227l6.941-7.498h-1.678l-6.013 6.495L8.161 2.73h-5.71Zm2.468 1.236h2.624l11.586 15.491h-2.624L4.918 3.965Z"
        {...rest as any}
      />
    </svg>
  )
}

export const PlayStoreIcon = (props: SvgProps) => {
  const { size = 36, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <rect width={36} height={36} fill="#000" rx={18} />
      <rect
        width={35}
        height={35}
        x={0.5}
        y={0.5}
        stroke="#fff"
        strokeOpacity={0.15}
        rx={17.5}
      />
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M11.28 10.443c-.176.187-.28.476-.28.852v13.41c0 .376.104.665.28.852l.046.043 7.512-7.512v-.177l-7.512-7.513-.045.045Z"
        />
        <path
          fill="url(#c)"
          d="m21.341 20.593-2.503-2.505v-.177l2.504-2.504.056.032 2.967 1.686c.847.481.847 1.27 0 1.751L21.4 20.562l-.058.031Z"
        />
        <g filter="url(#d)">
          <path
            fill="url(#e)"
            d="M21.399 20.561 18.837 18l-7.556 7.557c.28.296.74.332 1.26.038L21.4 20.56Z"
          />
        </g>
        <path
          fill="url(#f)"
          d="m21.399 15.439-8.858-5.033c-.52-.295-.98-.258-1.26.037L18.838 18l2.56-2.561Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={18.172}
          x2={7.996}
          y1={11.153}
          y2={21.328}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset={0.007} stopColor="#00A1FF" />
          <stop offset={0.26} stopColor="#00BEFF" />
          <stop offset={0.512} stopColor="#00D2FF" />
          <stop offset={0.76} stopColor="#00DFFF" />
          <stop offset={1} stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={25.468}
          x2={10.797}
          y1={18}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset={0.409} stopColor="#FFBD00" />
          <stop offset={0.775} stopColor="orange" />
          <stop offset={1} stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={20.008}
          x2={6.208}
          y1={19.391}
          y2={33.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset={1} stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={9.378}
          x2={15.54}
          y1={5.979}
          y2={12.141}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset={0.069} stopColor="#2DA771" />
          <stop offset={0.476} stopColor="#15CF74" />
          <stop offset={0.801} stopColor="#06E775" />
          <stop offset={1} stopColor="#00F076" />
        </linearGradient>
        <filter
          id="a"
          width={14.001}
          height={15.596}
          x={11}
          y={10.202}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.15} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1966_2311" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.15} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_innerShadow_1966_2311"
            result="effect2_innerShadow_1966_2311"
          />
        </filter>
        <filter
          id="d"
          width={10.117}
          height={7.798}
          x={11.281}
          y={18}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-0.15} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1966_2311" />
        </filter>
      </defs>
    </svg>
  )
}

export const AppStoreIcon = (props: SvgProps) => {
  const { size = 36, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <rect width={36} height={36} fill="#000" rx={18} />
      <rect
        width={35}
        height={35}
        x={0.5}
        y={0.5}
        stroke="#fff"
        strokeOpacity={0.15}
        rx={17.5}
      />
      <path
        fill="#fff"
        d="M22.693 18.547a3.942 3.942 0 0 1 1.862-3.28 4.053 4.053 0 0 0-3.154-1.706c-1.326-.139-2.613.794-3.29.794-.688 0-1.73-.78-2.85-.757a4.235 4.235 0 0 0-3.535 2.156c-1.529 2.646-.389 6.535 1.075 8.673.733 1.048 1.589 2.218 2.709 2.176 1.096-.045 1.505-.699 2.829-.699 1.31 0 1.694.7 2.837.673 1.176-.02 1.917-1.052 2.624-2.11a8.662 8.662 0 0 0 1.2-2.443 3.812 3.812 0 0 1-2.307-3.477ZM20.535 12.155a3.85 3.85 0 0 0 .88-2.759 3.917 3.917 0 0 0-2.534 1.312 3.697 3.697 0 0 0-.904 2.656c.98.01 1.943-.445 2.558-1.21Z"
      />
    </svg>
  )
}

export const WebStoreIcon = (props: SvgProps) => {
  const { size = 36, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <rect width={36} height={36} fill="#000" rx={18} />
      <rect
        width={35}
        height={35}
        x={0.5}
        y={0.5}
        stroke="#fff"
        strokeOpacity={0.15}
        rx={17.5}
      />
      <path
        fill="#fff"
        d="M26.994 18a8.994 8.994 0 1 1-9.251-8.983c.17-.022.342-.022.512 0A8.989 8.989 0 0 1 26.994 18ZM14.99 25.12c.192.081.387.154.585.22a13.374 13.374 0 0 1-1.786-6.726h-3.498a7.743 7.743 0 0 0 4.7 6.506Zm-4.117-10.128a7.64 7.64 0 0 0-.58 2.365h3.496a13.44 13.44 0 0 1 1.761-6.691 7.763 7.763 0 0 0-4.677 4.326Zm10.077 2.365a16.374 16.374 0 0 0-.297-2.624 11.187 11.187 0 0 0-.81-2.568c-.508-1.081-1.146-1.786-1.7-1.893a9.178 9.178 0 0 0-.288 0c-.554.107-1.193.812-1.7 1.895-.373.82-.644 1.682-.81 2.567-.169.865-.268 1.742-.296 2.623h5.9Zm-1.107 6.448c.372-.82.644-1.682.81-2.568.169-.864.268-1.742.295-2.623H15.05c.028.882.127 1.76.297 2.625.165.884.437 1.746.809 2.566.553 1.177 1.26 1.908 1.844 1.908.585 0 1.292-.731 1.844-1.908h-.001Zm5.285-2.797c.322-.761.519-1.57.582-2.394h-3.5a13.371 13.371 0 0 1-1.787 6.728 7.731 7.731 0 0 0 4.705-4.334Zm-4.117-10.13a7.798 7.798 0 0 0-.564-.213 13.436 13.436 0 0 1 1.761 6.69h3.5a7.742 7.742 0 0 0-4.697-6.478Z"
      />
    </svg>
  )
}