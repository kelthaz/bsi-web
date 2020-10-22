const solicitudRoutes = [
  {
    path: 'configuracion',
    data: { title: 'Configuración elementos hidráulicos' },
    component: ConfiguracionElementosHidraulicosComponent,
  },
  {
    path: 'modificacion',
    data: { title: 'Modificación elementos hidráulicos' },
    component: ModificacionElementosHidraulicosComponent,
  },
  {
    path: 'mantenimiento',
    data: { title: 'Mantenimiento elementos hidráulicos' },
    component: MantenimientoElementosHidraulicosComponent,
  },
  {
    path: 'restricciones-por-embalse',
    data: { title: 'Restricciones por embalse' },
    component: RestriccionesPorEmbalseComponent,
  },
  {
    path: 'curvas-centrales-embalse',
    data: { title: 'Curvas centrales con embalse' },
    component: CurvasCentralesEmbalseComponent,
  },
  {
    path: 'restricciones-por-elemento-hidro',
    data: { title: 'Restricciones por elemento hidro' },
    component: RestriccionesPorElementoHidroComponent,
  },
  {
    path: 'curva-aversion-riesgo',
    data: { title: 'Curva de aversión al riesgo' },
    component: CurvaAversionRiesgoComponent,
  },
  {
    path: 'escenarios-de-aportes',
    data: { title: 'Escenarios de aportes' },
    component: EscenariosDeAportesComponent,
  },
  {
    path: 'condicion-final-embalse',
    data: { title: 'Condicion final embalse' },
    component: CondicionFinalEmbalseComponent,
  },
];

export default solicitudRoutes;
