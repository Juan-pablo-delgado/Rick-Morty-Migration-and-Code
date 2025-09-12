import { Router } from "express";
import { loadCharacter } from "../controllers/loadCharacters";

const router: Router = Router();

router.get("/load", loadCharacter);

export default router;
