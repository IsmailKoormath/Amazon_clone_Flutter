import { IsString, IsEmail, Length, isNotEmpty } from "class-validator";

export class CreateUserDTO {
  name: string;

  email!: string;

  password!: string;
}
