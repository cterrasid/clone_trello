import React from 'react'
import { StyledCard } from './styles'

export default function Card({ task, profiles }) {
  //   const { image, title, tags, users } = task

  return (
    <StyledCard>
      {task !== undefined ? (
        <>
          Tasks
          {/* <img src={image.src} alt={image.description} />
          <h2>{title}</h2>
          <ul>
            {tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
          <div>
            <ul>
              {users.map(user => (
                <li>
                  <img src={user.img} alt={user.name} />
                </li>
              ))}
            </ul>
            <button>+</button>
          </div>
          <div></div> */}
        </>
      ) : (
        <form>
          <h2>Title</h2>
          <h3>Subtitle</h3>
          <div>
            // Icon
            <input type="mail" name="email" required />
          </div>
          <div>
            // Icon
            <input type="password" name="password" required />
          </div>
          <div>
            // Icon
            <input type="password" name="repeat-password" required />
          </div>
          <button>Start</button>
          <p>or continue with these social profile</p>
          {/* <div>
            {profiles.map(profile => (
              <input profile={profile} />
            ))}
          </div> */}
          <span>
            Already a member? <a>Login</a>
          </span>
        </form>
      )}
    </StyledCard>
  )
}
