class HomeLinks {

	static getHomeLinks(app) {
		var homelinks = [];

		const appconfig = app.getConfig();

		// xtra routes
		let boot_webapp = app.boot_webapp;

		if (boot_webapp && boot_webapp.routes && boot_webapp.homelinks && boot_webapp.homelinks.xtra_homelinks) {
			try {
				const xtra_homelinks = boot_webapp.homelinks.xtra_homelinks;

				for (var i = 0; i < xtra_homelinks.length; i++) {
					let homelink_def = xtra_homelinks[i];

					if (homelink_def.disabled === true)
						continue;

					switch(homelink_def.type) {
						case 'separator':
							homelinks.push({type:'separator'});
							break;
						case 'link': {
								let pathname = homelink_def.pathname;
								let label = app.t(homelink_def.label);
								homelinks.push({type:'link', pathname, label});
							}
							break;
						default:
							break;
					}

				}

			}
			catch(e) {
				console.log('exception in MenuLinks.getMenuLinks for xtra menu links: ' + e);
			}
		}
		
		return homelinks;
	}
}

export default HomeLinks;