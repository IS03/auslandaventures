/** Contenido legal y comercial publicado en /politicas. */

export const travelAgencyRegistry = {
  legajo: "21.037",
  /** Consulta pública RNAV — Ministerio de Turismo de la Nación. */
  verifyUrl: "https://www.argentina.gob.ar/turismo/rnav/consulta-de-agencias",
} as const;

export const paymentPolicy = {
  methods: ["Efectivo", "Transferencia bancaria"],
  depositNote:
    "En general se abona el 30% del viaje para señar el lugar. El saldo debe estar cancelado al 100% hasta 20 días antes de la salida.",
  installmentsNote:
    "En algunos programas —por ejemplo Brasil Canasvieiras— pueden ofrecerse cuotas fijas de 6 a 10 pagos. Consultá condiciones al reservar.",
  installmentPackagesTitle: "Paquetes con pagos en cuotas con la agencia",
  installmentPackagesText:
    "Se deben respetar los pagos mensuales pactados. El incumplimiento puede dejar sujeto el precio a actualización o cancelar la reserva si la mora supera dos cuotas.",
} as const;

export const cancellationPolicy = {
  intro:
    "Las cancelaciones solo pueden tramitarse por el pasajero o pasajeros del viaje, mediante solicitud de baja o cancelación por escrito o personalmente con quien realizó la reserva. Toda cancelación tiene un costo en concepto de gastos de reservación y gestión, más cualquier gasto adicional que pudiera corresponder.",
  busServicesTitle: "Servicios terrestres en bus",
  busServicesNote:
    "Comprende alojamiento, traslados, excursiones, comidas, guías, asistencia médica, gastos administrativos y bancarios, entre otros. Porcentajes a descontar del precio total:",
  busTiers: [
    { days: "15 días o menos antes de la salida", retention: "100%" },
    { days: "20 días antes de la salida", retention: "80%" },
    { days: "30 días antes de la salida", retention: "55%" },
    { days: "35 días o más antes de la salida", retention: "20%" },
  ],
  duringTrip:
    "No se realizará devolución por servicios a los que el pasajero renuncie voluntariamente durante el viaje.",
  airPackagesTitle: "Paquetes combinados aéreo-terrestres",
  airPackagesText:
    "Comprende tickets aéreos, traslados, alojamiento, gastronomía, excursiones y demás servicios del programa. En este caso no rigen los plazos anteriores: se aplican las normas de la compañía aérea y del resto de prestadores, más lo que fije el operador.",
  cruisesCharters:
    "Estas condiciones no aplican a reservas de cruceros o chárter aéreos. En esos casos rigen las condiciones de la naviera o aerolínea, pudiendo perderse hasta el 100% del importe abonado.",
} as const;

export const agencyLocationNote =
  "Atención desde Córdoba, Argentina. Agencia con operación virtual; consultá horarios y modalidad de atención al reservar.";
