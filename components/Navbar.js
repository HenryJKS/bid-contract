import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

export default () => {
  return (
    <Menu style={{
      backgroundImage: "url(https://img.freepik.com/free-photo/close-up-colorful-smoky-abstract_53876-148112.jpg?w=1060&t=st=1707399740~exp=1707400340~hmac=aacdffe4aaf131d3fe0fe79ffda72e21d7e3115be7be719f109bf0cc4d561a87)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Link route="/">
        <span className="item">
          Bid
        </span>
      </Link>

      <Link route="/winnersBid">
        <span className="item">
          WinnersBid
        </span>
      </Link>
    </Menu>
  );
}
