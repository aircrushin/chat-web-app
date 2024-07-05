import type { FC } from 'react'
import React from 'react'

export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = () => {
  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-3 bg-gray-50">
      <img src='logo.png' alt='logo' className='h-10 w-auto'></img>
    </div>
  )
}

export default React.memo(Header)
