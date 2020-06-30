import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {auth, guest, login} from "./routes.ts";
const router = new Router();

router.post('/login', login)

router.get('/guest', guest)

router.post('/auth', auth)

const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())
app.listen({port: 8000})

console.log("http://localhost:8000/");
