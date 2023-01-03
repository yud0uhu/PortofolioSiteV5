import { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button/index';

const ReturnTopButton: React.FC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(!isButtonActive);
    }
  };

  // const normalStyle = {
  //   opacity: 0,
  //   transition: '0.5s',
  //   pointerEvents: 'none',
  // };
  // const activeStyle = {
  //   opacity: 1,
  //   transition: '0.5s',
  // };

  return (
    <button onClick={returnTop}>
      <Button text={'トップへ戻る'} />
    </button>
  );
};

export default ReturnTopButton;
