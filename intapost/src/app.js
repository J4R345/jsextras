
import { Notifyer } from "./Notifyer.js"
const App = {
	
	async start() {
		
		try {
			await Notifyer.init()
			Notifyer.notify ({title: "Hora do Post",
			body: "Crie algum conteudo para ajuda a comunidade"
			})
		} catch (err) {
			console.log(err.message);
		}
	},
}
export { App }
