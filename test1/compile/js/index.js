let SubCookieUtil = {
	get: function (name, subName) {
		let subCookies = this.getAll(name);
		if (subCookies) {
			return subCookies(subName)
		} else {
			return null;
		}
	},
	getAll: function (name) {
		let cookieName = encodeURIComponent(name) + '=';
		let cookieStart = document.cookie.indexOf(cookieName);
		let cookieValue = null;
		let cookieEnd
		let subCookies
		let parts
		let result = {};

		if (cookieStart > -1) {
			cookieEnd = document.cookie.indexOf(';', cookieStart)
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
			if (cookieValue.length > 0) {
				subCookies = cookieValue.split('&');

				for (let i = 0; i < subCookies.length; i++) {
					parts = subCookies[i].split('=');
					result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
				}
				return result;
			}
		}
		return null;
	}

}