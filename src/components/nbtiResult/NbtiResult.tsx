import Header from '@components/common/Header/Header';
import {
  NbtiType,
  NbtiMembers,
  NbtiResultFormItem,
  NBTI,
} from './types/Nbti.types';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import MemberListItem from './components/MemberListItem';
import './styles/nbtiResult.styles.scss';
import { images } from '@assets/images';

const NbtiResult = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const nbtiType = params.get('type') as Exclude<NbtiType, 'yet'>;

  const handleShareClick = (type: 'kakao' | 'twitter' | 'copy') => {
    const url = window.location.href;
    switch (type) {
      case 'kakao':
        window.Kakao.Share.sendCustom({
          templateId: 64624,
          templateArgs: {
            title: String(nbtiType).toUpperCase(),
          },
        });
        break;
      case 'twitter':
        window.open(
          `http://twitter.com/share?url=${url}` +
            '&text=' +
            `히어시티 N'BTI 당신은 어떤 시즈니인가요? 나의 덕질유형 알아보기`,
        );
        break;
      case 'copy':
        if (navigator.share) {
          navigator.share({
            title: `당신은 ${String(nbtiType).toUpperCase}이군요?`,
            text: `히어시티 N'BTI 당신은 어떤 시즈니인가요? 나의 덕질유형 알아보기`,
            url,
          });
        } else {
          window.navigator.clipboard.writeText(url).then(() => {
            alert(`복사 완료🧡\n원하는 곳에 바로 공유해보세요!`);
          });
        }
    }
  };

  if (!NBTI.includes(nbtiType)) {
    return <Navigate to={'/nbti'} />;
  }

  return (
    <div className='nbti-result-root'>
      <Header />
      <main>
        <div>
          <h1 className='result-title'>{`당신은 ${String(
            nbtiType,
          ).toUpperCase()}이군요?`}</h1>
          <div>
            <ul className='nbti-description-list'>
              {NBTI_RESULT_FORM[nbtiType].description.map((item) => {
                return <li key={item.slice(0, 10)}>🧡 {item}</li>;
              })}
            </ul>
          </div>
        </div>
        <section className='members-section'>
          <div className='member-group-container'>
            <div className='title'>{`나와 비슷한 멤버`}</div>
            <ul className='member-list'>
              {NBTI_RESULT_FORM[nbtiType].sameMembers.map((item) => (
                <MemberListItem member={item} key={item} />
              ))}
              {NBTI_RESULT_FORM[nbtiType].sameMembers.length === 0 && (
                <MemberListItem member={'none'} />
              )}
            </ul>
          </div>
          <div className='member-group-container'>
            <div className='title'>{`나와 잘맞는 멤버`}</div>
            <ul className='member-list'>
              {NBTI_RESULT_FORM[nbtiType].goodMembers.map((item) => (
                <MemberListItem member={item} key={item} />
              ))}
              {NBTI_RESULT_FORM[nbtiType].goodMembers.length === 0 &&
                NBTI_MEMBERS['yet'].map((item) => (
                  <MemberListItem member={item} key={item} />
                ))}
            </ul>
          </div>
        </section>
        <section className='share-section'>
          <ul className='icon-list'>
            <li>
              <button className='retry-btn' onClick={() => navigate(-1)}>
                {'다시하기'}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleShareClick('twitter')}
                className='share-btn'>
                <img src={images.sns.twitter} alt='' />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleShareClick('kakao')}
                className='share-btn'>
                <img src={images.sns.kakao} alt='' />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleShareClick('copy')}
                className='share-btn copy'>
                <img src={images.share} alt='' />
              </button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default NbtiResult;

const NBTI_MEMBERS: NbtiMembers = {
  isfp: ['태일', '제노', '쇼타로'],
  entp: ['쟈니', '헨드리', '태용'],
  esfj: ['쿤'],
  isfj: ['도영', '재민'],
  infj: ['텐', '윈윈', '정우', '마크', '지성'],
  esfp: ['재현'],
  enfj: [],
  entj: [],
  enfp: ['샤오쥔', '해찬'],
  intj: ['양양'],
  intp: ['태용'],
  istj: [],
  istp: [],
  estp: ['성찬'],
  estj: [],
  infp: ['천러', '지성'],
  yet: ['유타', '런쥔'],
} as const;

// mbti 결과 16가지
const NBTI_RESULT_FORM: Record<Exclude<NbtiType, 'yet'>, NbtiResultFormItem> = {
  enfj: {
    type: 'ENFJ',
    sameMembers: NBTI_MEMBERS.enfj,
    goodMembers: [...NBTI_MEMBERS.isfp, ...NBTI_MEMBERS.infp],
    description: [
      '우리시티가 벌써 6년차...칠감이 오년전이래..감수성이 풍부한 덕질을 즐기는 당신!',
      '다정하면서도 책임감이 강해 다른 덕후들의 마음을 꽉 사로잡고 계시는군요?',
      '덕메들과의 모임에서도 대화를 이끌어 나가는 걸 좋아하시네요.',
      '"아름다운 시간만 쌓자 예에~ 예에~" 갈등을 싫어해 말을 할 때 상대방의 기분이 나쁘지 않게 잘 돌려말해요.',
    ],
  },
  enfp: {
    type: 'ENFP',
    sameMembers: NBTI_MEMBERS.enfp,
    goodMembers: [...NBTI_MEMBERS.infj, ...NBTI_MEMBERS.intj],
    description: [
      '엔시티 앨범 오프깡..좋아하시죠?..활동적이고 바쁜 덕질을 즐기는 당신!',
      '덕질을 숨기지 않아 주변 사람들은 덕후를 생각하면 당신을 먼저 떠올리곤 합니다.',
      '활발하고 열정적이라 총대를 메거나, 창작을 하거나, 네임드인 경우가 많아요.',
      '비교적 예리하고 민감한 편이라 덕질에서 스트레스를 자주 받기도 하는데, 그 스트레스를 다시 덕질로 푸는 타입이시네요.',
    ],
  },
  entj: {
    type: 'ENTJ',
    sameMembers: NBTI_MEMBERS.entj,
    goodMembers: NBTI_MEMBERS.infp,

    description: [
      '굳이 공동체에 속하지 않고 자유로운 덕질을 추구는 당신!',
      '솔직하면서도 열정적이라 덕질판의 흐름을 잘 읽어 물 흐르듯 덕질하시네요.',
      '무언가를 할 때 사전 준비를 철저히 하고 체계적으로 일을 추진하시는군요.',
      '꼼꼼한 검색을 통해 검증된 맛집만 가시진 않나요? 그렇다면 엔슐랭가이드 애용 #가보자고..plz',
    ],
  },
  entp: {
    type: 'ENTP',
    sameMembers: NBTI_MEMBERS.entp,
    goodMembers: [...NBTI_MEMBERS.infj, ...NBTI_MEMBERS.intj],
    description: [
      '"우리 제노 용안..보셨어요? 보셨냐구" 주변 사람들에게 덕질 대상에 대해 이야기하는 걸 좋아하는 당신!',
      '다재다능하며 새로운 것을 받아들이는 것에 거리낌이 없는 멋진 분이시군요.',
      '자기합리화를 잘하는 편이라 계획에 없던 굿즈를 자주 구매하는 편이에요.',
      '하지만 이러한 부분에서 크게 스트레스를 받지는 않으며, 즐거운 덕질을 하고 계시네요!',
    ],
  },
  esfj: {
    type: 'ESFJ',
    sameMembers: NBTI_MEMBERS.esfj,
    goodMembers: [...NBTI_MEMBERS.isfp, ...NBTI_MEMBERS.istp],
    description: [
      '트위터, 인스타, 유튜브 등에 마음껏 앓으면서 덕질하는 걸 좋아하는 당신!',
      '혹시 유튜브 닉네임이 "엔시티 미래 내 치아보다 빛나"와 같은 재질은 아니신가요?',
      '재미난 글로 다른 덕후들의 마음까지도 사로잡고, 그 과정에서 또다른 즐거움과 뿌듯함을 느끼고 계시는군요!',
      '덕질에 대한 소비계획은 늘 있지만 막상 결제창까지 가서 멈칫하는 경우가 있으시네요.',
    ],
  },
  esfp: {
    type: 'ESFP',
    sameMembers: NBTI_MEMBERS.esfp,
    goodMembers: [...NBTI_MEMBERS.isfj, ...NBTI_MEMBERS.istj],
    description: [
      '"견뎌..버텨..달려 렛츠기릿!!" 에너지가 넘쳐 순간순간 온 마음을 다해 덕질하는 당신!',
      '자유로운 우리를 봐 자유로워..낙천적이고 자유로운 영혼의 소유자이시네요.',
      '주변 사람들에게 관심이 많으며, 자신이 관심의 중심이 되는 것도 즐기시는군요?',
      '유머러스하고 사교적이라 덕메들과 모이는 것을 좋아해요.',
    ],
  },
  estj: {
    type: 'ESTJ',
    sameMembers: NBTI_MEMBERS.estj,
    goodMembers: NBTI_MEMBERS.isfp,
    description: [
      '덕질과 현생을 확실히 분리하는 이성적인 사랑꾼인 당신!',
      '지금 내가 이어파티를 127번째 보는 이유는..나의 시력 상승과 심신 안정을 위함입니다.. 노는 것도 자는 것도 스스로를 위한 투자의 일종이라고 생각해요.',
      '덕질은 현생을 즐겁게 하는 선에서만! 크게 스트레스를 받지 않는 덕질을 하고 있어요.',
      '책임감이 강하고 이성적이라 주변 덕메들에게 정신적 지주의 역할이 되어주곤 하시네요.',
    ],
  },
  estp: {
    type: 'ESTP',
    sameMembers: NBTI_MEMBERS.estp,
    goodMembers: NBTI_MEMBERS.isfj,
    description: [
      '좋은 건 함께! 혹시 덕질의 즐거움을 나누고 싶어하는 스타일은 아닌가요?',
      '유쾌하고 길게 생각하는 것을 좋아하지 않아 싸워도 금방 풀리는 쿨한 분이시네요.',
      '인생은 한방..알아서 되겠지..대충 살자! 모험과 스릴을 좋아하시는군요?',
      '"엔시티에 돈쓰자! 간장에 밥먹자! 계란은 사치!!" 종종 즉흥적인 끌림에 의해 충동적인 덕질을 할 때가 많아요. 오히려 좋아.',
    ],
  },
  infj: {
    type: 'INFJ',
    sameMembers: NBTI_MEMBERS.infj,
    goodMembers: [...NBTI_MEMBERS.enfp, ...NBTI_MEMBERS.intj],
    description: [
      '사랑을 가득 주는 덕질을 하며 그런 스스로의 모습을 좋아하는 당신!',
      '속마음을 잘 드러내지 않아 파악하기 쉽지 않다는 이야기를 자주 들어요.',
      '신중한 타입이라 넘치는 덕심을 가지고 있지만 정작 행동으로 옮기기 전에는 많은 고민을 하시는군요!',
      '평생 시즈니하겠다는 피의 다짐.. 한번 입덕하면 그 마음이 잘 변하지 않아 조용하지만 꾸준하게 덕질하는 타입입니다.',
    ],
  },
  infp: {
    type: 'INFP',
    sameMembers: NBTI_MEMBERS.infp,
    goodMembers: NBTI_MEMBERS.yet,
    description: [
      '조용하게, 하지만 열렬하게 덕심을 불태우는 당신!',
      '이번 시그? 말해 뭐해 당연히 사야지~ 덕질이 당신을 즐겁게 하기에, 소비에 별로 망설임이 없으시죠?',
      '갈등을 싫어하는 평화주의자이며 작은 것에도 행복을 느껴 욕심이 크게 없어요.',
      '좋아할 때 몰입을 잘해 현생에도 꽤나 영향을 받는 타입이에요.',
    ],
  },
  intj: {
    type: 'INTJ',
    sameMembers: NBTI_MEMBERS.intj,
    goodMembers: [...NBTI_MEMBERS.enfp, ...NBTI_MEMBERS.entp],
    description: [
      '홀로 편안하게 덕질하는 것을 좋아하는 당신!',
      '독립적인 성향이 강해 인간관계를 크게 신경 쓰지 않는 타입이군요.',
      '엔시티 엔시티 그리고 엔시티..하나에 빠지면 목표를 달성할 때까지 전념하는 경향이 있어 좋아하는 것에는 과몰입하기도 해요.',
      '하지만 현생이 지장을 받으면 덕질을 조절할 수 있는 단호함을 가지고 있으시네요.',
    ],
  },
  intp: {
    type: 'INTP',
    sameMembers: NBTI_MEMBERS.intp,
    goodMembers: NBTI_MEMBERS.yet,
    description: [
      '불 타는 마음과 별개로 이성을 지키며 건강하게 덕질하는 당신!',
      '타인에 대한 관심이 적어 자발적 아싸를 자처하는 경향이 있어요.',
      '하지만 가까운 덕친들에게는 따뜻하며 오손도손 이야기하며 덕질하는 걸 좋아하시는군요!',
      '인셉션이랑 매트릭스 시청은 필수! 분석과 추리를 좋아해 엔시티 세계관 해석을 찾아보는 걸 좋아해요.',
    ],
  },
  isfj: {
    type: 'ISFJ',
    sameMembers: NBTI_MEMBERS.isfj,
    goodMembers: [...NBTI_MEMBERS.esfp, ...NBTI_MEMBERS.estp],
    description: [
      '남들에게 영업하기 보다는 조용히 덕질을 즐기는 당신!',
      '"헬로퓨쳐 배경 위영이랑 비슷한 거 알아?" 예리해서 덕질할 때 떡밥 디테일 하나하나를 놓치지 않아요.',
      '티는 안 내지만 한없이 챙겨주며 애정을 퍼주는 스타일입니다.',
      '모든 일에 최선을 다하며 인내심과 책임감이 강한 타입이시네요.',
    ],
  },
  isfp: {
    type: 'ISFP',
    sameMembers: NBTI_MEMBERS.isfp,
    goodMembers: NBTI_MEMBERS.yet,
    description: [
      '혼자만의 시간을 소중히 여기며 느긋하고 조용한 덕질을 즐기는 당신!',
      '친해지기 까지 시간이 걸리는 편이지만 친해지면 최선을 다해 관계 유지를 하려고 하시는군요.',
      '이번 스쿨키트가 넘 예뻤을 뿐이고..가끔은 지름신도 강림하고 충동적인 덕질을 즐기곤 합니다.',
      '작은 것에도 만족감과 즐거움을 찾으며 평화로운 덕질을 지향하시네요!',
    ],
  },
  istj: {
    type: 'ISTJ',
    sameMembers: NBTI_MEMBERS.istj,
    goodMembers: [...NBTI_MEMBERS.esfp, ...NBTI_MEMBERS.estp],
    description: [
      '홀로 편안하게 덕질하는 것을 좋아하는 당신!',
      '무리에서 튀고 싶지 않아하며 언제나 한결같은 모습을 보여주시네요.',
      '계획에 없던 즉흥적인 일이나 생산성이 없다고 판단되는 일은 딱히 끌리지 않아요.',
      '기억력이 뛰어나서 사소한 것도 잘 기억하는 편이군요! 우리 시티들.. 몇 명까지 생일을 외우고 계시나요? ',
    ],
  },
  istp: {
    type: 'ISTP',
    sameMembers: NBTI_MEMBERS.istp,
    goodMembers: NBTI_MEMBERS.esfj,
    description: [
      '일반인에게 영업하기보다는 조용히 혼자만의 덕질을 즐기는 당신!',
      '에너지 소비를 싫어해서 먼저 약속을 잡지 않고, 관심 받는 것도 싫어하시는군요.',
      '자주는 아니지만 덕질 때문에 계획에 없는 일들이 생기곤 하시죠?',
      '무언가에 꽂히면 끝까지 가는 성향이군요. 그렇다면 혹시 당신..엔아일체 시즈니?',
    ],
  },
} as const;
