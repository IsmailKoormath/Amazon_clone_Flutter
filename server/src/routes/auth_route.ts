import { CreateUserDTO } from 'dtos/userDto';
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import express,{Request,Response} from 'express';

const authRouter = express.Router();

authRouter.post("/api/signup",async (req: Request, res: Response) => {
  //   try {
  // Convert the incoming data to CreateUserDTO class instance using class-transformer
  const createUserDto = plainToClass(CreateUserDTO, req.body);

  // Validate the CreateUserDTO instance
  const errors = await validate(createUserDto);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
});

export default authRouter;