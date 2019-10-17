
export function convertTime(time) {
	let returnTime = time;
	returnTime = returnTime.toUpperCase();
	let isPM = false;
	if (returnTime.substring(time.length, time.length -2) === 'PM') {
		isPM = true;
	}

	returnTime = returnTime.substring(0, returnTime.length -2).split(':').map((string) => {
		return parseInt(string);
	});

	return returnTime[0] + returnTime[1]/60 + (isPM ? 12 : 0);
}