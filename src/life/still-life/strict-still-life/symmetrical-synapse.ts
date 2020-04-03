import {renderLife} from 'renderer';

export const title = 'Symmetrical synapse';

renderLife([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
