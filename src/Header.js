//공통으로 불러올 모듈
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//원하는 아이콘 카테고리와 이름을 확인해서 모듈로 개별적으로 불러옴
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(){
  return (
    <header>
      <h1>LOGO</h1>
      <a href="#">
        <FontAwesomeIcon icon={faBars} />
      </a>
    </header>
  );
}

export default Header;



/*
export default function Header(){
  return (
    <header>
      <h1>LOGO</h1>
      <a href="#">
        <FontAwesomeIcon icon={faBars} />
      </a>
    </header>
  );
}
 */