import { Router } from "express";
import musicController from "../controllers/music-controller";
import input_validate from "middlewares/input.validate";
import musicService from "services/music-service";

const musicRouter = Router();

musicRouter.get("/musics",input_validate(musicService), musicController.getMusics);
musicRouter.post("/musics", musicController.createMusic); // TODO: validação via Joi

export default musicRouter;