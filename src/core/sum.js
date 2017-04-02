// @flow

const makeAdd = (a: number): function => (
  (b: number): number => a + b
);

export default makeAdd;
