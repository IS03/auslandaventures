/** Coincide tipo de viaje del destino con el filtro UI (Bus, Aéreo, Full Day). */
export function matchesTravelType(destinationType: string, filter: string): boolean {
  if (filter === "Todos") return true;

  const type = destinationType.toLowerCase();

  if (filter === "Bus") return type.includes("bus");
  if (filter === "Aéreo") return type.includes("aéreo") || type.includes("aereo");
  if (filter === "Full Day") return type.includes("full day");

  return true;
}
