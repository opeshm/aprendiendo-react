import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialIsFollowing = false}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const butonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar' 
          alt="Avatar del usuario" 
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <string>{children}</string>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={butonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>

    </article>
    
  )
}
