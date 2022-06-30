const sinon = require('sinon');
const { expect } = require('chai');

const characterService = require('../../services/character');
const characterController = require('../../controller/character');

describe('Chamada da getById da controller de characters', ()=>{
  describe('Quando não existe o personagem no BD', ()=>{
    const req = {};
    const res = {};
    const next = sinon.spy();
    const erro = {status: 400, message: 'personagem não econtrado'};
    beforeEach(()=>{
      req.params = 10;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(characterService, 'getById').throws(erro);
    });
    afterEach(()=>{
      characterService.getById.restore();
    })
    it('é chamado a função next passando como parâmetro um ojeto de erro', async()=>{
      await characterController.getById(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
})
