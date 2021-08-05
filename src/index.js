export default () => {
  const MAX_FAIL_COUNT = 0;
  const MIN_SUCCESS_COUNT = 3;
  let NameUser = null;
  let succCnt = 0;
  let failCnt = 0;

  function reset() {
    succCnt = 0;
    failCnt = 0;
  }

  function finishWithLoose() {
    console.log(`Let's try again, ${NameUser}!`);
    reset();
  }

  function finishWithWin() {
    console.log(`Congratulations, ${NameUser}!`);
    reset();
  }

  function check({ rightAns, answer }, cb) {
    if (answer === rightAns.toString()) {
      console.log('Correct!');
      succCnt += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAns}'.`);
      failCnt += 1;
    }

    if (failCnt > MAX_FAIL_COUNT) {
      finishWithLoose();
    } else if (succCnt >= MIN_SUCCESS_COUNT) {
      finishWithWin();
    } else {
      cb();
    }
  }

  return {
    NameUser,

    setUserName(name) {
      NameUser = name;
    },

    check({ rightAnswer, answer }, cb) {
      check({ rightAnswer, answer }, cb);
    },

    reset() {
      reset();
    },
  };
};
