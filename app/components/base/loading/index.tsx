import React from 'react'

import './style.css'

type ILoadingProps = {
  type?: 'area' | 'app'
}
const Loading = (
  { type = 'area' }: ILoadingProps = { type: 'area' },
) => {
  return (
    <div className={`flex w-full h-full justify-center items-center ${type === 'app' ? 'h-full' : ''}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1537">
          <circle id="Ellipse 25" cx="20" cy="20" r="20" fill="url(#paint0_linear_37_720)" />
          <g id="Group 1535">
            <path id="Vector 38" d="M25.5003 31.0901C18.8995 31.0901 19.9166 26.9196 22.1144 23.7012C15.8224 26.1256 14.5485 31.6451 15.2337 34.2944C16.3377 38.5628 24.8008 38.7711 30.0995 38.4892C43.935 37.7533 45.4069 37.1645 44.3397 43.2769C51.8323 40.7748 52.5072 36.3229 50.6967 33.6806C47.6882 29.2901 41.8008 31.0901 25.5003 31.0901Z" fill="url(#paint1_linear_37_720)" />
            <path id="Vector 39" d="M34.1992 45.4427C29.0079 45.4427 21.929 42.4493 19.0974 40.48C19.9626 45.3639 24.383 54.7961 34.1992 54.607C44.0153 54.418 47.9638 45.5215 48.829 40.9526C46.312 42.4493 40.8062 45.4427 34.1992 45.4427Z" fill="url(#paint2_linear_37_720)" />
            <path id="Vector 40" d="M35.3872 13.254C10.7813 12.883 9.40894 27.0894 15.2227 34.228C14.3397 22.1587 30.3939 21.57 35.3872 21.57C47.7756 21.57 51.8464 24.7232 54.2381 32.0131C61.0087 15.4547 43.0151 13.1221 35.3872 13.254Z" fill="url(#paint3_linear_37_720)" />
          </g>
        </g>
      </svg>
      <span className='text-gray-500'>加载中...</span>
    </div>
  )
}

export default Loading
