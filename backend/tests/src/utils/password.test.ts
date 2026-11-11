import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util";

describe("Ejercicio 1: contraseñas", () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";

  it("Generación de hashes: debe retornar cadenas no vacías y diferentes a la contraseña original", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(hash1).toBeTruthy();
    expect(hash2).toBeTruthy();
    expect(hash1).not.toBe(password1);
    expect(hash2).not.toBe(password2);
    expect(hash1).not.toBe(hash2);
  });

  it("Contraseña correcta: comparePassword devuelve true para ambas contraseñas", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const isMatch1 = await comparePassword(password1, hash1);
    const isMatch2 = await comparePassword(password2, hash2);

    expect(isMatch1).toBe(true);
    expect(isMatch2).toBe(true);
  });

  it("Contraseña incorrecta: comparePassword devuelve false al comparar contraseñas cruzadas", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    const isMatchWrong1 = await comparePassword(password2, hash1);
    const isMatchWrong2 = await comparePassword(password1, hash2);

    expect(isMatchWrong1).toBe(false);
    expect(isMatchWrong2).toBe(false);
  });
});