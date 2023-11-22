import Record from '@components/record/Record';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withRouter } from '@tests/withRouter';
import { Route, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Record', () => {
  it('keywords can not be selected more then 3', async () => {
    render(withRouter(<Route path='/' element={<Record />} />));

    const keywords = document.querySelectorAll('.keyword');

    await userEvent.click(keywords[0]);
    await userEvent.click(keywords[1]);
    await userEvent.click(keywords[2]);
    await userEvent.click(keywords[3]);
    await userEvent.click(keywords[4]);

    const selectedKeywords = document.querySelectorAll('.keyword.active');

    expect(selectedKeywords.length).toBe(3);
  });

  it('make keyword active when click once, make keyword inactive when click twice', async () => {
    render(withRouter(<Route path='/' element={<Record />} />));

    const keyword = document.querySelector('.keyword')!;

    await userEvent.click(keyword);
    expect(keyword.classList.contains('active')).toBe(true);

    await userEvent.click(keyword);
    expect(keyword.classList.contains('active')).toBe(false);
  });

  it('navigate with selected tags query string', async () => {
    function TmpRecordResult() {
      return <div>{JSON.stringify(useLocation().search)}</div>;
    }

    render(
      withRouter(
        <>
          <Route path='/' element={<Record />} />
          <Route path={`/result`} element={<TmpRecordResult />} />
        </>,
      ),
    );

    const keywords = document.querySelectorAll('.keyword');

    await userEvent.click(keywords[0]);
    await userEvent.click(keywords[1]);

    const makePlaylistBtn = screen.getByText('🎵 플리 만들기');
    await userEvent.click(makePlaylistBtn);

    expect(screen.getByText(`"?tags=${keywords[0].id},${keywords[1].id}"`))
      .toBeInTheDocument;
  });
});
