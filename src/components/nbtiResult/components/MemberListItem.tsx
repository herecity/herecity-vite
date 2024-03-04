import { images } from '@assets/images';
import { NctMember } from '../types/Nbti.types';
import '../styles/memberListItem.styles.scss';

type Props = {
  member: NctMember | 'none';
};

const MemberListItem = ({ member }: Props) => {
  return (
    <li className='member-list-item-root'>
      <div>
        <img
          className='member-img'
          src={images.members[member]}
          alt='멤버 캐릭터 이미지'
        />
      </div>
      <span className='label'>{member === 'none' ? '없어요 🥹' : member}</span>
    </li>
  );
};

export default MemberListItem;
