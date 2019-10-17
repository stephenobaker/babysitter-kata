
import { calculatePay } from '../src/calcpay.js';

import Family from '../src/family.js';

import 'chai/register-expect';

import { convertTime } from '../utils';

describe('a family', () => {
	it('exists', () => {
		let family = new Family();
		expect(family).not.to.equal(undefined);
	});
})

describe('calculate pay function', () => {
	it('returns a error message if start before 5pm', () => {
		
		expect(calculatePay('4:59pm')).to.equal('start or end time is outside of bounds');
	});
	it('returns a error message if end is after 4am', () => {
		
		expect(calculatePay('5:00pm', '4:01am')).to.equal('start or end time is outside of bounds');
	});
	it('doesn\'t return error if no start or end time given', () => {
		
		expect(calculatePay()).not.to.equal('start or end time is outside of bounds');
	});
	it('doesn\'t return error if no end time given', () => {
		
		expect(calculatePay('5:01pm')).not.to.equal('start or end time is outside of bounds');
	});
})

describe('convertTime function', () => {
	it('returns a float from a time string', () => {
		
		expect(convertTime('5:00pm')).to.equal(17);
		expect(convertTime('5:30pm')).to.equal(17.5);
		expect(convertTime('2:00am')).to.equal(2);
		expect(convertTime('3:15am')).to.equal(3.25);
		expect(convertTime('4:59pm')).not.to.equal(17);
		console.log(convertTime('4:59pm'));

	});
	it('takes either uppercase or lowercase am/pm', () => {
		
		expect(convertTime('6:00PM')).to.equal(18);
		expect(convertTime('6:00pm')).to.equal(18);
		expect(convertTime('2:00AM')).to.equal(2);
		expect(convertTime('2:00am')).to.equal(2);

	});
})
