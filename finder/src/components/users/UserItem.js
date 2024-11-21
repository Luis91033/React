import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
      <div className='card text-center'>
        <img className='round-img' />
      </div>
    )
  
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
