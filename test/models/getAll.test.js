const sinon = require('sinon');
const { expect } = require('chai');
const characterModel =  require('../../model/character');
const connection = require('../../model/connection');

describe('ao ser chamada retorna um array', ()=>{
  describe('caso não tenham dados no banco, retorna array vazio', ()=>{
    const result = [[]];

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves(result);
    });

    afterEach(()=>{
      connection.execute.restore();
    })

    it('retorna um array',  async ()=>{
      const result = await characterModel.getAll();
      expect(result).to.be.an('array');
    })
  });


  describe('caso tenham dados no banco, retorna array com objetos', ()=>{
    describe('o objeto tem as chaves id e name', ()=>{
      
      const result = [[{id:3, name:'Marina'}]];

      beforeEach(()=>{
        sinon.stub(connection, 'execute').resolves(result);
      });

      afterEach(()=>{
        connection.execute.restore();
      })

      it('retorna um array',  async ()=>{
        const result = await characterModel.getAll();
        expect(result).to.be.an('array');
      })
      it('o objeto dentro do array tem as chaves id e name',  async ()=>{
        const [result] = await characterModel.getAll();
        expect(result).to.includes.all.keys('id', 'name');
      })

    })

  });

})