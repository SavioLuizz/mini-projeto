import Server from "./server";

const PORT = 3001

new Server().server.listen(PORT, () => console.log(`Rodando na pota ${PORT}`))