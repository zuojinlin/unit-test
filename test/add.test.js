const add = require('../add')
const expect = require('chai').expect;

describe('加法函数的单元测试', function(){
	it('0+0 = 0',function(){ // 测试套件
		expect(add(0,0)).to.be.equal(0);
	});
	it('1+0 = 1',function(){// 测试用例
		expect(add(1,0)).to.be.equal(1)
	})
})
