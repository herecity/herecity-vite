import { Fragment, memo } from 'react';
import { CityBoardType } from '../types/cityboard.types';

type Props = {
  item: CityBoardType;
};

const CityboardItem = memo(({ item }: Props) => {
  const handleTextClick = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      alert(`복사 완료💚\n원하는 곳에 바로 사용해보세요!`);
    });
  };

  if (item.type === 'face') {
    return (
      <li className='face-item-section'>
        <div className='member-item'>{item.member}</div>
        <ul>
          {item.text.map((text, idx) => (
            <li
              onClick={() => {
                handleTextClick(text);
              }}
              className='text-item'
              key={idx}>
              <div>{text}</div>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <Fragment>
      {item.text.map((text, idx) => (
        <li
          onClick={() => {
            handleTextClick(text);
          }}
          key={idx}
          className='text-item'>
          {text}
        </li>
      ))}
    </Fragment>
  );
});

export default CityboardItem;
