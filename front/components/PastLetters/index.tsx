import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userIdState } from '@/recoil/states';
import * as S from './styles';

import LeftBtnSVG from '../../public/assets/icons/leftBtn.svg';
import RightBtnSVG from '../../public/assets/icons/rightBtn.svg';
import LetterDateRange from '../LetterDateRange';
import LetterPaper from '../LetterPaper';

interface LetterProps {
  letterId: number;
  letter: string;
  arrivalDate: string;
  sendDate: string;
  userId: number;
}

const PastLetters = ({ letters }: { letters: LetterProps[] }) => {
  const [letter, setLetter] = useState<LetterProps>();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setLetter(letters[index]);
  }, [index]);

  return (
    <S.Containter>
      {letter && (
        <S.Box>
          <LetterDateRange
            sendDate={letter.sendDate}
            arrivalDate={letter.arrivalDate}
          />
          <LetterPaper message={letter.letter}></LetterPaper>
          <S.ButtonWrapper>
            {index >= 1 && <LeftBtnSVG onClick={() => setIndex(index - 1)} />}
            {index < letters.length - 1 && (
              <RightBtnSVG onClick={() => setIndex(index + 1)} />
            )}
          </S.ButtonWrapper>
        </S.Box>
      )}
    </S.Containter>
  );
};

export default PastLetters;
