import Record from '@/components/record/Record';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withRouter } from '@/tests/withRouter';
import { Route, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Record', () => {
  it('activate a tag when click once', async () => {
    render(withRouter(<Route path='/' element={<Record />} />));

    const tag = document.querySelector('.tag')!;

    await userEvent.click(tag);
    expect(tag.classList.contains('active')).toBe(true);
  });

  it('inactive a tag when click twice', async () => {
    render(withRouter(<Route path='/' element={<Record />} />));

    const tag = document.querySelector('.tag')!;

    await userEvent.click(tag);
    await userEvent.click(tag);
    expect(tag.classList.contains('active')).toBe(false);
  });

  it('tags can not be selected more then 3', async () => {
    render(withRouter(<Route path='/' element={<Record />} />));

    const tags = document.querySelectorAll('.tag');

    await userEvent.click(tags[0]);
    await userEvent.click(tags[1]);
    await userEvent.click(tags[2]);
    await userEvent.click(tags[3]);
    await userEvent.click(tags[4]);

    const selectedTags = document.querySelectorAll('.tag.active');

    expect(selectedTags.length).toBe(3);
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

    const tags = document.querySelectorAll('.tag');

    await userEvent.click(tags[0]);
    await userEvent.click(tags[1]);

    const makePlaylistBtn = screen.getByText('🎵 플리 만들기');
    await userEvent.click(makePlaylistBtn);

    expect(screen.getByText(`"?tags=${tags[0].id},${tags[1].id}"`))
      .toBeInTheDocument;
  });
});
