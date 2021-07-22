import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const HeaderAdmin: FC = () => {
  const history = useHistory();

  return (
    <div className='header admin'>
      <div className="admin_header">
        <div className='admin-navigation'>
            <div onClick={() => history.push('/category')}>Categories</div>
            <div>Words</div>
        </div>
        <div onClick={() => history.push('/')}>Log out</div>
      </div>
    </div>
  );
};

export default HeaderAdmin;