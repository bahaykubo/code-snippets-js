
const nameNewPromise = async (name) => {
  return new Promise((resolve, reject) => {
    if (!name || name === 'error') {
      setTimeout(() => reject('error'), 500);
    } else {
      setTimeout(() => resolve(`hello ${name}`), 500);
    }
  });
};

const namePromise = async (name) => {
  if (!name || name === 'error') {
    return 'error';
  } else {
    return `hello ${name}`;
  }
};

module.exports = {
  nameNewPromise,
  namePromise
};
