//__tests__TimerFunction-test

  jest.useFakeTimers();

describe('', () => {
  test('times the form out after 5 minutes', () => {
    const signUpTimer = require('../components/TimerFunction');
    const callback = jest.fn();

    signUpTimer(callback);

    // should be called if 1 minute elapses
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

    // Fast forward
    jest.runOnlyPendingTimers();
    expect(callback).toBeCalled();

    // // Should be called if 5 minutes elapses
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50000);
  });
});