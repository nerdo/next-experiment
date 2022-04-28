import { useState } from 'react'

export const Header = ({ title }: { title: string }) => <h1>{title ? title : 'Default title'}</h1>

export const HomePage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  const handleClick = () => setLikes(likes + 1)

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />

      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}

export default HomePage
