import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});
server.register(cors,{
    origin: "*",
})

const teams = [
{ "id": 1, "name": "McLaren", "base": "Woking, Reino Unido" },
    { "id": 2, "name": "Ferrari", "base": "Maranello, Itália" },
    { "id": 3, "name": "Mercedes", "base": "Brackley, Reino Unido" },
    { "id": 4, "name": "Red Bull Racing", "base": "Milton Keynes, Reino Unido" },
    { "id": 5, "name": "Williams", "base": "Grove, Reino Unido" },
    { "id": 6, "name": "Aston Martin", "base": "Silverstone, Reino Unido" },
    { "id": 7, "name": "Alpine", "base": "Enstone, Reino Unido" },
    { "id": 8, "name": "Haas", "base": "Kannapolis, Estados Unidos" },
    { "id": 9, "name": "Racing Bulls (Visa Cash App Racing Bulls)", "base": "Faenza, Itália" },
    { "id": 10, "name": "Sauber (Kick Sauber)", "base": "Hinwil, Suíça" }
]

const drivers = [
    { "id": 1, "name": "Lando Norris", "team": "McLaren" },
    { "id": 2, "name": "Oscar Piastri", "team": "McLaren" },
    { "id": 3, "name": "Charles Leclerc", "team": "Ferrari" },
    { "id": 4, "name": "Lewis Hamilton", "team": "Ferrari" },
    { "id": 5, "name": "George Russell", "team": "Mercedes" },
    { "id": 6, "name": "Andrea Kimi Antonelli", "team": "Mercedes" },
    { "id": 7, "name": "Fernando Alonso", "team": "Aston Martin" },
    { "id": 8, "name": "Lance Stroll", "team": "Aston Martin" },
    { "id": 9, "name": "Pierre Gasly", "team": "Alpine" },
    { "id": 10, "name": "Franco Colapinto", "team": "Alpine" },
    { "id": 11, "name": "Esteban Ocon", "team": "Haas" },
    { "id": 12, "name": "Oliver Bearman", "team": "Haas" },
    { "id": 13, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 14, "name": "Yuki Tsunoda", "team": "Red Bull Racing" },
    { "id": 15, "name": "Isack Hadjar", "team": "Racing Bulls" },
    { "id": 16, "name": "Carlos Sainz", "team": "Williams" },
    { "id": 17, "name": "Alexander Albon", "team": "Williams" },
    { "id": 18, "name": "Nico Hülkenberg", "team": "Sauber" },
    { "id": 19, "name": "Gabriel Bortoleto", "team": "Sauber" }
  ]

server.get('/teams', async (request, response) => {
    response.type("application/json").code(200)

    return {teams}

})

server.get("/drivers", async (req, res) =>{
    res.type("application/json").code(200)

    return {drivers}
})

interface DriverParams{
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const driver = drivers.find(d => d.id === id)

    if(!driver){
        res.type("application/json").code(404)

        return {message: "Driver not found"}
    }else{
        res.type("application/json").code(200)
        return {driver}
    }
})

const port = process.env.PORT

server.listen({port: 3333}, () =>{
    console.log("Server init")
})