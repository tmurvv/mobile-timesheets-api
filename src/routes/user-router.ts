import express, { Request, Response } from "express";

import { getAll } from "../controllers/users";

const router = express.Router();

router.get("/", getAll);

router.get("/:email", (req: Request, res: Response) =>
  res.send("IMIN Get User By Email")
);
router.put("/:id", (req: Request, res: Response) => res.send("IMIN Save User"));
router.delete("/:id", (req: Request, res: Response) =>
  res.send("IMIN Delete User")
);

router.get("/profile/:id", (req: Request, res: Response) =>
  res.send("IMIN Get Profile")
);
router.post("/profile/reset/:email", (req: Request, res: Response) =>
  res.send("IMIN Send Reset Email")
);
router.patch("/profile/reset/:id", (req: Request, res: Response) =>
  res.send("IMIN Reset password")
);

export const userRouter = router;
