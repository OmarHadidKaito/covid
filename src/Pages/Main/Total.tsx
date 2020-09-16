import React from 'react';
import {getAllCase} from '../../services';

const logger = async () => {
  const data = await getAllCase();
  console.log(data);
};

export const Total = () => {
  logger();
  return <div>oasdasdne</div>;
};
