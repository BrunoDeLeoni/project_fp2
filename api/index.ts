/* Imports */
import {
    userCreate,
    userAuth,
    // userData,
    // userUpdate,
} from "./controllers/user-controllers";
// import { petCreate, petVisit, petMyReports, petReported, changeSearch } from "./controllers/pet-controllers";
// import { petMyReportsInfo, petReportedInfo, petReportedInfoAdd, petMyReportsInfoAdd, sendEmail } from "./controllers/info-controllers";
import { User, Auth /* Pet, Info  */ } from "./models";
import express from "express";
import * as path from "path";
import * as jwt from "jsonwebtoken";
import cors from "cors";

/* Varibales */
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const staticDirPath = path.resolve(__dirname, "./..");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.static(staticDirPath));
app.use(cors());

/* Información: Middleware */
function authMiddleware(req, res, next) {
    try {
        req._user = jwt.verify(
            req.headers.authorization.split(" ")[1],
            TOKEN_SECRET
        );
        next();
    } catch (e) {
        res.status(401).json({ error: e });
    }
}

/* Información: Test de Conexión */
app.get("/test", async (req, res) => {
    res.json({
        connection: true,
    });
});

/* Información: Base de datos */
app.get("/database", async (req, res) => {
    const user = await User.findAll();
    const auth = await Auth.findAll();
    // const pet = await Pet.findAll();
    // const info = await Info.findAll();
    res.json({
        user,
        auth,
        // pet,
        // info,
    });
});

/* User: Registrar un nuevo usuario */
app.post("/new-user", async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "Not Data",
        });
    }
    const response = await userCreate(req.body);
    try {
        res.json(response);
    } catch (e) {
        res.status(401).json({ error: e });
    }
});

/* User: Login - Authorization */
app.post("/login", async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "Not Data",
        });
    }
    const response = await userAuth(req.body, TOKEN_SECRET);
    try {
        res.json(response);
    } catch (e) {
        res.status(401).json({ error: e });
    }
});

// /* User: Data del usuario logueado */
// app.get("/me", authMiddleware, async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await userData(req._user.id)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* User: Actualizar el usuario logueado */
// app.put("/me", authMiddleware, async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await userUpdate(req._user.id, req.body)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Pet: Crear una nueva mascota perdida */
// app.post("/new-pet", authMiddleware, async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petCreate(req._user.id, req.body)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Pet: Ver las mascotas perdidas en ghost */
// app.get("/pet-visit", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petVisit();
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Pet: Ver mis mascotas reportadas */
// app.get("/pet-my-reports", authMiddleware, async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petMyReports(req._user.id);
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Info: Ver información de una mascota reportada por mi */
// app.get("/pet-my-reports-info/:petId", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petMyReportsInfo(req.params.petId);
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Pet: Ver las mascotas reportadas activas */
// app.get("/pet-reported", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petReported();
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Info: Ver información de una mascota reportada */
// app.get("/pet-reported-info/:petId", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petReportedInfo(req.params.petId);
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Info: Añado informacion a mascota reportada */
// app.post("/pet-reported-info-add", authMiddleware, async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petReportedInfoAdd(req._user.id, req.body)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Info: Busca la información añadida por otros usuarios */
// app.post("/pet-my-reports-info-add", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await petMyReportsInfoAdd(req.body)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

// /* Pet: Status Search */
// app.put("/change-search", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await changeSearch(req.body)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// })

// /* Info: Envia un Email con Notificación */
// app.post("/send-email", async (req, res) => {
//     if(!req.body){
//         res.status(400).json({
//             message: "Not Data"
//         })
//     }
//     const response = await sendEmail(req.body.petInfo, req.body.petEmail)
//     try{
//         res.json(response)
//     }
//     catch (e){
//         res.status(401).json({ error: e})
//     }
// });

/* Web - Home */
app.get("*", (req, res) => {
    res.sendFile(staticDirPath + "/index.html");
});

/* Listen */
app.listen(port, () => {
    console.log("Connected");
});
