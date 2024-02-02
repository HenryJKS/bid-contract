import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'


export default () => {
  return (
    <Menu style={{ marginTop: '1%'}}>
      <Link route="/" legacyBehavior>
      <a className="item">
        Bid
      </a>
      </Link>
      
      <Link route="/winnersBid" legacyBehavior>
      <a className="item">
        WinnersBid
      </a>
      </Link>
    </Menu>
  );
}