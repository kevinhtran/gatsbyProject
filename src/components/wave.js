import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;

// the goal of this component is to have somebody to be able to click a button and it'll tell them that they waved and we want to know how many times they've waved
