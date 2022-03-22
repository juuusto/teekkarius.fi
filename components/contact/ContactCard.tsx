import React from 'react';
import styled from 'styled-components';
import Portrait from '../common/Portrait';

type Props = {
  imageUrl?: string;
  name: string;
  occupation: string;
};

const ContactCard = ({ imageUrl, name, occupation }: Props) => {
  const emailJoined = name.split(' ')[0] + '.' + name.split(' ')[1] + '@ayy.fi';
  const emailString = emailJoined
    .toLowerCase()
    .replaceAll(/ä/g, 'a')
    .replaceAll(/ö/g, 'o');

  return (
    <Card>
      <Portrait image={imageUrl} />
      <Name>{name}</Name>
      <Occupation>{occupation}</Occupation>
      <Email>{emailString}</Email>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  text-align: center;
`;

const Name = styled.h2`
  margin-bottom: 0;
`;

const Occupation = styled.h3`
  margin-top: 0.5rem;
  opacity: 0.7;
`;

const Email = styled.p`
  margin-top: 0.5rem;
`;

export default ContactCard;
