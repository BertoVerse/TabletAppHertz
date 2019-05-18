//../components/TimerFunction

function signUpTimer(callback) {
    setTimeout(() => {
      callback && callback();
        
      // set the time out at 5 minutes after 1 minute not interacting on the page
      setTimeout(() => {
        signUpTimer(callback);
      }, 50000);
    }, 10000);
  }

  module.exports = signUpTimer;
