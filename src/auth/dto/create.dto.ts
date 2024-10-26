import { IsEmail, MinLength } from "class-validator";

export class RegistrDto {
    @IsEmail({}, {message: "Введите корректный Email"})
    email: string;

    @MinLength(5, {message: "Минимальное количество символов для пароля 5"})
    password: string
}