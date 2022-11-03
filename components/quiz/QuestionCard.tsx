import React from 'react';
import styled from 'styled-components';
import { Question } from '../../pages/quiz';

const QuestionCard = ({
  question,
  currentIndex,
  total,
  handleNext,
}: {
  question: Question;
  currentIndex: number;
  total: number;
  handleNext: (eventId: number | null) => void;
}) => {
  return (
    <Card>
      <p>{`${currentIndex + 1}/${total}`}</p>
      <h2>{question.title}</h2>
      <AnswersContainer>
        {question.answers.map((answer, i) => (
          <AnswerButton key={i} onClick={() => handleNext(answer?.eventId)}>
            {answer.title}
          </AnswerButton>
        ))}
      </AnswersContainer>
    </Card>
  );
};

const Card = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: rgba(1, 1, 1, 0.2);
  border-radius: 1rem;
  text-align: center;

  & > h2 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const AnswerButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  margin: 1rem;
  color: inherit;
  background: rgba(1, 1, 1, 0.2);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default QuestionCard;
