import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import Match from 'Components/match';
import SwissBracket from './swiss-bracket';
import { simpleBracket } from '../mock-data/simple-data';

export default {
  title: 'Components/Bracket',
  component: SwissBracket,
};

function Template({ ...args }) {
  return (
    <SwissBracket
      // currentRound={4}
      {...args}
    />
  );
}

export const SwissSmallBracket = Template.bind({});
SwissSmallBracket.args = {
  matches: simpleBracket,
  matchComponent: Match,
};
