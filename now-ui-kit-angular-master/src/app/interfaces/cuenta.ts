import { Persona } from "./persona";

export interface Cuenta {
  id: string;
  nombre: string;
  correo: string;
  tipo: string;
  persona: Persona;
}