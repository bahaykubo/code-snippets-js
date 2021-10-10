const { expect } = require('chai');
const { nameNewPromise, namePromise } = require('./working-with-promises');

describe('working with promises', function () {

  context('that resolves and rejects', function () {
    it('should resolve given a valid name', async function () {
      await nameNewPromise('bing')
        .then(response => expect(response).to.contain('hello'));
    });

    it('should reject given an error name', async function () {
      await nameNewPromise('error')
        .catch(error => expect(error).to.equal('error'));
    });

    it('should reject given name is undefined', async function () {
      await nameNewPromise('error')
        .catch(error => expect(error).to.equal('error'));
    });

    context('using all settled', function () {
      it('should fulfill all promises', async function () {
        await Promise.allSettled([
          nameNewPromise('jim'),
          nameNewPromise('bob'),
          nameNewPromise('cam')
        ]).then(response => {
          response.forEach(promise => {
            expect(promise.status).to.equal('fulfilled');
          });
        });
      });

      it('should have one promise rejected', async function () {
        await Promise.allSettled([
          nameNewPromise('jim'),
          nameNewPromise('bob'),
          nameNewPromise()
        ]).then(response => {
          const rejectedResponse = response.filter(promise => promise.status === 'rejected');
          expect(rejectedResponse.length).to.equal(1);
        });
      });
    });
  });

  context('that just resolves', function () {
    it('should resolve given a valid name', async function () {
      await namePromise('bing')
        .then(response => expect(response).to.contain('hello'));
    });

    it('should reject given an error name', async function () {
      await namePromise('error')
        .then(response => expect(response).to.equal('error'));
    });

    it('should reject given name is undefined', async function () {
      await namePromise('error')
        .then(response => expect(response).to.equal('error'));
    });
  });

});
