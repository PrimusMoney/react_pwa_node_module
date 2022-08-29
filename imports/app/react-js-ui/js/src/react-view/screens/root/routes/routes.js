class Routes {

	static async getRoutes(app) {
		let boot_webapp = app.boot_webapp;

		let routes = [];



		// xtra routes
		if (boot_webapp && boot_webapp.routes && boot_webapp.routes && boot_webapp.routes.xtra_routes) {
			try {
				const App = app.getAppClass();
				const AppStore = App.getAppStore();
				const route_modules = AppStore.route_modules;
				// note: paths have to be included by webpack before being used dynamically
				// so imports have to done on fixed strings (e.g. in index.js) prior to being used

				if (AppStore.route_modules) {
					const xtra_routes = Object.values(boot_webapp.routes.xtra_routes);
		
					for (var i = 0; i < xtra_routes.length; i++) {
						let route_def = xtra_routes[i];
		
						if (route_def.disabled === false) {
							let name = route_def.name;
							let TheRoutes = route_modules[name];

							if (!TheRoutes)
								continue;
		
							const theroutes = TheRoutes.default.getRoutes(app);
					
							if (theroutes) {
								for (var j = 0; j < theroutes.length; j++) {
									routes.push(theroutes[j]);
								}
							}
			
						}
					}
	
				}

			}
			catch(e) {
				console.log('exception in Routes.getRoutes for xtra routes: ' + e);
			}
		}

		return routes;
	}
}

export default Routes;