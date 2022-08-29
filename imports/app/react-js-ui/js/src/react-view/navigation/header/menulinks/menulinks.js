class MenuLinks {

	static getMenuLinks(app) {
		var menulinks = [];

		const appconfig = app.getConfig();

		// xtra routes
		let boot_webapp = app.boot_webapp;

		if (boot_webapp && boot_webapp.routes && boot_webapp.menulinks && boot_webapp.menulinks.xtra_menulinks) {
			try {
				const xtra_menulinks = boot_webapp.menulinks.xtra_menulinks;

				for (var i = 0; i < xtra_menulinks.length; i++) {
					let menulink_def = xtra_menulinks[i];

					if (menulink_def.disabled === true)
						continue;

					switch(menulink_def.type) {
						case 'separator':
							menulinks.push({type:'separator'});
							break;
						case 'link': {
								let route = menulink_def.route;
								let label = app.t(menulink_def.label);
								menulinks.push({type:'link', route, label});
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

		return menulinks;
	}
}

export default MenuLinks;