import { Router } from "express";
import TAKControllers from "../controllers/takControllers";

const router = Router();
router.get("/", TAKControllers.getAllTAK);
router.get("/:id", TAKControllers.getDetailTAK);
router.post("/", TAKControllers.createTAK);
router.patch("/:id", TAKControllers.updateTAK);
router.patch("/validate/:id", TAKControllers.validateTAK);
router.delete("/:id", TAKControllers.deleteTAK);

export default router;
