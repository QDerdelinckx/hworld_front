import { StrValPipe } from './str-val.pipe';

describe('StrValPipe', () => {
  it('create an instance', () => {
    const pipe = new StrValPipe();
    expect(pipe).toBeTruthy();
  });
});
