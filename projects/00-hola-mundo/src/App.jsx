import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'opeshm',
    name: 'Mario Domínguez Gómez',
    isFollowing: false
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  },
  {
    userName: 'flaisflais',
    name: 'Agromenauer de Construcciones',
    isFollowing: false
  }
]

export function App () {
  
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard 
              key={userName}
              initialIsFollowing={isFollowing} 
              userName={userName}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
