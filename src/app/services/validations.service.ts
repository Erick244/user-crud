import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ValidationsService {

	constructor() { }

	existsOrError(value: any, errMsg: string) {
		if (!value) throw errMsg;
		return;
	}

	validateUrl(url: string, errMsg: string) {
		try {
			new URL(url);
			return;
		} catch(err) {
			throw errMsg;
		}
	}
}
