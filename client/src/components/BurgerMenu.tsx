import React, { FC, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IMenuReducer, actionType } from '../redux/mainReducer';

// interface IBurgerMenuProps {
//   onShowMenu: (num: number) => void;
// }

const BurgerMenu: FC = () => {
  // const onBurgerShowMenu = () => {
  //   onShowMenu(3);
  // }

  const pageNow = useSelector((state: IMenuReducer) => state.page);
  const dispatch = useDispatch();
  // const cash = useSelector<IMenuReducer>(state => state.cash);

  const menuClose = () => {
    dispatch({
      type: actionType.switchMenu,
    })
  }

  const changePage = (event: React.MouseEvent<HTMLElement>) => {
    dispatch({
      type: actionType.resetState,
    });
    dispatch({
      type: actionType.pageNumber,
      payload: (event.target as HTMLInputElement).value,
    });
    dispatch({
      type: actionType.switchMenu,
    });
  }
  const history = useHistory();
  const showLoginPage = () => {
    // dispatch({
    //   type: actionType.showLogin,
    // });
    history.push('/category');
    
  }

  const menuOpen = useSelector((state: IMenuReducer) => state.menuOpen);

  return (
    <div className='nav'>
      <div className="menu">
        <div onClick={menuClose} className={(menuOpen === true) ? 'menu-list transformX-menu-list' : 'menu-list'}>
          <div className="close_menu">
            <svg className="close_menu-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"      xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 121.31 122.876" enableBackground="new 0 0 121.31 122.876" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"/></g>
            </svg>
          </div>
          <ul className="menu-ul">
            <li onClick={changePage} 
            className={pageNow === 10 ? 'menu-link active-link' : "menu-link"} value={10}>Main Page</li>
            <li onClick={changePage} 
            className={pageNow === 0 ? 'menu-link active-link' : "menu-link"} value={0}>Fairytales</li>
            <li onClick={changePage} value={1} 
            className={pageNow === 1 ? 'menu-link active-link' : "menu-link"}>Animals 1</li>
            <li onClick={changePage} value={2} 
            className={pageNow === 2 ? 'menu-link active-link' : "menu-link"}>Animals 2</li>
            <li onClick={changePage} value={3} 
            className={pageNow === 3 ? 'menu-link active-link' : "menu-link"}>Animals 3</li>
            <li onClick={changePage} 
            className={pageNow === 4 ? 'menu-link active-link' : "menu-link"} value={4}>Food 1</li>
            <li onClick={changePage} 
            className={pageNow === 5 ? 'menu-link active-link' : "menu-link"} value={5}>Food 2</li>
            <li onClick={changePage} 
            className={pageNow === 6 ? 'menu-link active-link' : "menu-link"} value={6}>Sport</li>
            <li onClick={changePage} 
            className={pageNow === 7 ? 'menu-link active-link' : "menu-link"} value={7}>Colors</li>
          </ul>
          <button onClick={showLoginPage} className='login_btn'>Login</button>
        </div>
      </div>
      <div onClick={menuClose} className={(menuOpen === true) ? 'menu-open transparent-menu-open' : 'menu-open none'}></div>
        <div onClick={menuClose} className={(menuOpen === true) ? 'menu-content purple-bg transformX-menu-list' : 'menu-content purple-bg'}></div>
    </div>
  );
};

export default BurgerMenu;