import './styles/loading.styles.scss';

type Props = {
  color?: 'green' | 'blue' | 'pink' | 'yellow';
};

const Loading = ({ color = 'green' }: Props) => {
  return (
    <div className='loading-root'>
      <div className={`spinner ${color}`} />
    </div>
  );
};

export default Loading;
