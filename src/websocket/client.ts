import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams {
	text: string;
	email: string;
}

io.on("connect", (socket) => {
	const connectionsService = new ConnectionsService();
	const usersService = new UsersService();
	const messagesService = new MessagesService();

	socket.on("client_first_access", async (params) => {
		console.log(params);
		const socket_id = socket.id;
		const { email, text } = params as IParams;
		let user_id = null;

		//conexao pra console.log
		let connectionToLog;

		const userExists = await usersService.findByEmail(email);

		if (!userExists) {
			const user = await usersService.create(email);

			connectionToLog = await connectionsService.create({
				socket_id,
				user_id: user.id,
			});

			user_id = user.id;
		} else {
			user_id = userExists.id;

			const connection = await connectionsService.findByUserId(userExists.id);

			if (!connection) {
				connectionToLog = await connectionsService.create({
					socket_id,
					user_id: userExists.id,
				});
			} else {
				connection.socket_id = socket_id;

				connectionToLog = await connectionsService.create(connection);
			}
		}

		console.log(connectionToLog);

		await messagesService.create({
			text,
			user_id,
		});
	});
});
