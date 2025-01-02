import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import SnowflakesBackground from '../../components/SnowflakesBackground';

export default function Layout(props) {
  return (
    <>
      <SnowflakesBackground />
      <OriginalLayout {...props} />
    </>
  );
}
