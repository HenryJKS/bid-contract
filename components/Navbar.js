import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'


export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/" legacyBehavior>
      <a className="item">
        Bid
      </a>
      </Link>
    </Menu>
  );
}