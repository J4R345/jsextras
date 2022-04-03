const Notifyer = {
	async init() {
		const permission = await Notification.requestPermission()
		if (permission !== "granted") {
			throw new Error("Permissão Negada")
		}
	},
	notify({ title, body, icon }) {
		
		return () => new Notification(title, 
			{ body: body, 
			  icon })
	},
}
export { Notifyer }
