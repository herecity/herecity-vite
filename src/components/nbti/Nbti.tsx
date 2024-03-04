import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/nbti.styles.scss';
import Header from '@components/common/Header/Header';

type NbtiAnswerType = 'e' | 'i' | 's' | 'n' | 'f' | 't' | 'j' | 'p';

type NbtiForm = {
  question: string;
  answers: { type: NbtiAnswerType; description: string }[];
};

const Nbti = () => {
  const navigate = useNavigate();
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [result, setResult] = useState<Record<NbtiAnswerType, number>>({
    i: 0,
    e: 0,
    n: 0,
    s: 0,
    f: 0,
    t: 0,
    j: 0,
    p: 0,
  });

  const handleAnswerClick = (type: NbtiAnswerType) => {
    setResult((prev) => {
      const clone = { ...prev };
      clone[type]++;
      return clone;
    });

    currentQuestion === NBTI_FORM.length - 1
      ? goToResultPage()
      : setcurrentQuestion((prev) => prev + 1);
  };

  const goToResultPage = () => {
    const nbtiResultStr = [];
    result.i > result.e ? nbtiResultStr.push('i') : nbtiResultStr.push('e');
    result.n > result.s ? nbtiResultStr.push('n') : nbtiResultStr.push('s');
    result.t > result.f ? nbtiResultStr.push('t') : nbtiResultStr.push('f');
    result.j > result.p ? nbtiResultStr.push('j') : nbtiResultStr.push('p');

    navigate(`result?type=${nbtiResultStr.join('')}`);
  };

  return (
    <div className='nbti-root'>
      <Header />
      <main>
        <div className='form'>
          <h1 className='question'>{`Q${currentQuestion + 1}. ${
            NBTI_FORM[currentQuestion].question
          }`}</h1>
          <ul className='answer-list'>
            {NBTI_FORM[currentQuestion].answers.map((item) => {
              return (
                <li
                  className='item'
                  key={item.description.slice(0, 20)}
                  onClick={() => handleAnswerClick(item.type)}>
                  {item.description}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='progress-container'>
          <div
            style={{
              width: `${(currentQuestion / NBTI_FORM.length) * 100}%`,
            }}
            className='status'
          />
        </div>
      </main>
    </div>
  );
};

export default Nbti;

const NBTI_FORM: readonly NbtiForm[] = [
  {
    question:
      '치열한 포도알 경쟁 속\n겨우 티켓팅에 성공해서 오게 된 여기는 엔시티 콘서트장!',
    answers: [
      {
        type: 'e',
        description: '"안녕하세요~" 옆에 앉은 시즈니에게 말을 건다',
      },
      { type: 'i', description: '그런거 못한다고.. 혼자 즐긴다' },
    ],
  },
  {
    question:
      '금손문선생 시즈니 특집편 기획! \n내게 문선생과 조수들이 직접 만든 음식을 먹을 수 있는\n기회가 주어진다면... 나는...',
    answers: [
      {
        type: 'e',
        description:
          '문선생과 만나고 유튜브에 나의 감격한 표정, 리액션 평생 저장..❤',
      },
      {
        type: 'i',
        description: '그냥 방구석에서 앓는다',
      },
    ],
  },
  {
    question: '나는 내 카카오톡 프로필에',
    answers: [
      {
        type: 'e',
        description:
          '사회적 체면? 버려! 나? 엔시티좋아한다!!! 당당히 잘생긴 우리시티얼굴을 올린다',
      },
      {
        type: 'i',
        description:
          ' 아예 꽁꽁 숨기거나, 친구들이 누군지 못알아보고 남친이야? 할 것 같은 일코짤만 올려봤다',
      },
    ],
  },
  {
    question: '덕준이가 갔던 맛집에 갔다 왔다는 친구를 보고 나는',
    answers: [
      {
        type: 'f',
        description: '좋았겠다..부러워..나도 갈래..',
      },
      {
        type: 't',
        description: '헉 거기 사람 많았어? 웨이팅 얼마나 했어?',
      },
    ],
  },
  {
    question: '뮤지컬을 하면서 한능검을 딴 도영이를 보면서 나는',
    answers: [
      {
        type: 'f',
        description:
          '와..난 뭐했지...반성하며 나도 도영이처럼 열심히 살겠다고 다짐한다',
      },
      {
        type: 't',
        description:
          '도영이가 대단하다고 느끼지만 도영이는 도영이고 나는 나야~ 하며 원래대로 산다',
      },
    ],
  },
  {
    question:
      '오랜만에 덕메 시즈니를 만난 나! 덕메가 제노포카를 다 모았다며 자랑하는데..내가 먼저 드는 생각은?',
    answers: [
      {
        type: 'f',
        description: '“뭐 드래곤볼?? 대박...축하해..” 덕메가 너무 부럽다....',
      },
      {
        type: 't',
        description:
          '“와 어떻게 다 모은거지” 내가 구하지 못한 하키제노의 실물이 궁금해서 덕메에게 보여달라고 하고싶다',
      },
    ],
  },
  {
    question: '나는 해찬이를 생각하면',
    answers: [
      {
        type: 'n',
        description: ' 데구르르..굴려굴려 초코볼~ 깜찍한 곰돌이가 생각난다!',
      },
      {
        type: 's',
        description:
          '무대 위에서 카리스마 넘치게 노래하며 춤추는 해찬이가 떠오른다!',
      },
    ],
  },
  {
    question: '나는 평소에 엔시티를 만나면...하고',
    answers: [
      {
        type: 's',
        description: '그럴리가 없잖아요..상상해 본 적 없다',
      },
      {
        type: 'n',
        description:
          '또 나만 진심이지...어디서 어떻게 만날지, 만나면 뭐라고 할지, 어떻게 행동할지까지 이미 시뮬레이션 돌려봤다',
      },
    ],
  },
  {
    question: '엔시티가 왜 좋아? 라는 질문을 받는다면 나는',
    answers: [
      {
        type: 'n',
        description:
          '엔시티는 일단 대단한 사람들이구, 멤버 각각 매력이 넘치고.. 팀 색깔이 뚜렷하고... 좋은 이유를 자세히 이야기한다',
      },
      {
        type: 's',
        description: '그냥 좋은걸 어떡하라구! 단순하게 말한다',
      },
    ],
  },
  {
    question: '지성이의 부산 브이로그를 보면서 나는',
    answers: [
      {
        type: 'j',
        description:
          '지성이가 갔던 코스대로 꼼꼼히 적어두고 덕질투어를 계획한다',
      },
      {
        type: 'p',
        description:
          '부산여행하다 우연히 지성이가 탄 케이블카가 생각나서 찾아가본다',
      },
    ],
  },
  {
    question:
      '오늘은 엔시티 앨범 발매일!  친구와 함께 앨범을 사러 가기로 했는데..침대에 누워서 당신은',
    answers: [
      {
        type: 'j',
        description:
          '(약속시간 한참 전) 가는데까지는 30분정도 걸리니까..여유있게 20분있다 준비해야지!',
      },
      {
        type: 'p',
        description:
          '(약속시간 30분전) 헉 페이스캠보다가 시간이 이렇게 됐네! 빨리 준비해야겠다!',
      },
    ],
  },
  {
    question: '앨범을 사러 슴스토어에 간 당신!',
    answers: [
      {
        type: 'p',
        description:
          '“아니 이것도 예쁘잖아...” 분명히 앨범만 사려고 갔지만 마음을 빼앗겨 다른 굿즈를 자주 사게된다',
      },
      {
        type: 'j',
        description:
          '예쁜게 많지만 그러면 한도 끝도 없어! 이미 예산 초과라고! 정신차리고 원래 사려고 했던 앨범만 산다',
      },
    ],
  },
];
