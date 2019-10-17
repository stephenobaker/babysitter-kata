
import { convertTime } from '../utils';
 

export function calculatePay(start, end, family) {
	let startTime = (start ? start : '5:00PM');
	let endTime = (end ? end : '4:00AM');
	let pay;
	const timeError = 'start or end time is outside of bounds';


	if (convertTime(startTime) < 17 || convertTime(endTime) > 4) {
		pay = timeError;
	}

	return pay;



}