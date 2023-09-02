// import { memo } from 'react';
import React from 'react';

interface Props {
  value: number;
}

export const Small = React.memo(({ value }: Props) => {
  console.log('Me volví a generar :(');
  return <small>{value}</small>;
});
