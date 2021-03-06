export const data = JSON.stringify({
  score: { name: 'Indice Global', value: '50' },
  personal_report: {
    F: {
      name: 'ENERGÍA FÍSICA',
      sufix: 'F',
      value: '70',
      areas: {
        F1: {
          name: 'SALUD FISICA',
          value: '96',
          sufix: 'F1',
          criterias: {
            'F1.1': {
              name: 'IMC Indice Masa Corporal',
              sufix: 'F1.1',
              value: '100',
            },
            'F1.2': {
              name: 'Dolores físicos',
              sufix: 'F1.2',
              value: '60',
            },
            'F1.4': {
              name: 'Fumar',
              sufix: 'F1.4',
              value: '100',
            },
            'F1.5': {
              name: 'Consumo de alcohol',
              sufix: 'F1.5',
              value: '100',
            },
            'F1.6': {
              name: 'Tiempo de Pantalla',
              sufix: 'F1.6',
              value: '20',
            },
          },
        },
        F2: {
          name: 'SUEÑO',
          value: '49',
          sufix: 'F2',
          criterias: {
            'F2.1': {
              name: 'Horas de sueño',
              sufix: 'F2.1',
              value: '20',
            },
            'F2.2': {
              name: 'Calidad del sueño',
              sufix: 'F2.2',
              value: '67',
            },
            'F2.3': {
              name: 'Regularidad del sueño',
              sufix: 'F2.3',
              value: '40',
            },
            'F2.4': {
              name: 'Problemas de sueño',
              sufix: 'F2.4',
              value: '60',
            },
            'F2.5': {
              name: 'Rutinas antes de dormir',
              sufix: 'F2.5',
              value: '66',
            },
            'F2.6': {
              name: 'Ambiente para dormir',
              sufix: 'F2.6',
              value: '72',
            },
            'F2.7': {
              name: 'Siestas',
              sufix: 'F2.7',
              value: '20',
            },
          },
        },
        F3: {
          name: 'CUERPO EN MOVIMIENTO',
          value: '72',
          sufix: 'F3',
          criterias: {
            'F3.1': {
              name: 'Movimiento Diario Ligero',
              sufix: 'F3.1',
              value: '67',
            },
            'F3.2': {
              name: 'Actividad Física Moderada',
              sufix: 'F3.2',
              value: '100',
            },
            'F3.3': {
              name: 'Actividad Física Vigorosa',
              sufix: 'F3.3',
              value: '40',
            },
            'F3.4': {
              name: 'Tiempo Sentado/a',
              sufix: 'F3.4',
              value: '82',
            },
          },
        },
        F4: {
          name: 'NUTRICION E HIDRATACION',
          value: '82',
          sufix: 'F4',
          criterias: {
            'F4.1': {
              name: 'Hidratación',
              sufix: 'F4.1',
              value: '75',
            },
            'F4.2': {
              name: 'Habitos nutricionales',
              sufix: 'F4.2',
              value: '79',
            },
            'F4.3': {
              name: 'Tiempo para comer ',
              sufix: 'F4.3',
              value: '93',
            },
          },
        },
      },
    },
    M: {
      name: 'ENERGÍA MENTAL',
      sufix: 'M',
      value: '83',
      areas: {
        M1: {
          name: 'MENTALIDAD INNOVADORA',
          value: '84',
          sufix: 'M1',
          criterias: {
            'M1.1': {
              name: 'Creatividad',
              sufix: 'M1.1',
              value: '85',
            },
            'M1.2': {
              name: 'Curiosidad',
              sufix: 'M1.2',
              value: '100',
            },
            'M1.4': {
              name: 'Apertura al cambio',
              sufix: 'M1.4',
              value: '68',
            },
            'M1.5': {
              name: 'Adaptabilidad',
              sufix: 'M1.5',
              value: '80',
            },
            'M1.6': {
              name: 'Adopción Digital',
              sufix: 'M1.6',
              value: '87',
            },
            'M1.7': {
              name: 'Desafiando el status quo',
              sufix: 'M1.7',
              value: '75',
            },
            'M1.8': {
              name: 'Lidiando con la incertidumbre',
              sufix: 'M1.8',
              value: '85',
            },
            'M1.9': {
              name: 'Resolución de problemas',
              sufix: 'M1.9',
              value: '90',
            },
          },
        },
        M2: {
          name: 'MENTALIDAD GANADORA',
          value: '82',
          sufix: 'M2',
          criterias: {
            'M2.1': {
              name: 'Fijación de metas',
              sufix: 'M2.1',
              value: '85',
            },
            'M2.2': {
              name: 'Toma de decisiones',
              sufix: 'M2.2',
              value: '85',
            },
            'M2.3': {
              name: 'Orientado al logro',
              sufix: 'M2.3',
              value: '65',
            },
            'M2.4': {
              name: 'Planificación',
              sufix: 'M2.4',
              value: '73',
            },
            'M2.5': {
              name: 'Monitoreo',
              sufix: 'M2.5',
              value: '90',
            },
            'M2.6': {
              name: 'Foco',
              sufix: 'M2.6',
              value: '80',
            },
            'M2.7': {
              name: 'Competitividad',
              sufix: 'M2.7',
              value: '70',
            },
            'M2.8': {
              name: 'Definiendo prioridades',
              sufix: 'M2.8',
              value: '80',
            },
            'M2.9': {
              name: 'Oportunismo positivo',
              sufix: 'M2.9',
              value: '90',
            },
            'M2.10': {
              name: 'Manejo del tiempo',
              sufix: 'M2.10',
              value: '91',
            },
            'M2.11': {
              name: 'Eficiencia',
              sufix: 'M2.11',
              value: '80',
            },
            'M2.12': {
              name: 'Carga de trabajo',
              sufix: 'M2.12',
              value: '93',
            },
          },
        },
        M3: {
          name: 'RESILIENCIA MENTAL',
          value: '84',
          sufix: 'M3',
          criterias: {
            'M3.1': {
              name: 'Confianza',
              sufix: 'M3.1',
              value: '90',
            },
            'M3.2': {
              name: 'Manejo del fracaso',
              sufix: 'M3.2',
              value: '100',
            },
            'M3.3': {
              name: 'Manejo del éxito',
              sufix: 'M3.3',
              value: '80',
            },
            'M3.4': {
              name: 'Positivismo',
              sufix: 'M3.4',
              value: '85',
            },
            'M3.5': {
              name: 'Pensamiento crítico',
              sufix: 'M3.5',
              value: '87',
            },
            'M3.6': {
              name: 'Retar a otros',
              sufix: 'M3.6',
              value: '80',
            },
            'M3.7': {
              name: 'Seguridad',
              sufix: 'M3.7',
              value: '80',
            },
            'M3.8': {
              name: 'Perseverancia',
              sufix: 'M3.8',
              value: '60',
            },
            'M3.9': {
              name: 'Toma de riesgos',
              sufix: 'M3.9',
              value: '90',
            },
            'M3.10': {
              name: 'Liderazgo',
              sufix: 'M3.10',
              value: '75',
            },
            'M3.11': {
              name: 'Iniciativa',
              sufix: 'M3.11',
              value: '93',
            },
          },
        },
        M4: {
          name: 'MENTALIDAD DE CRECIMIENTO',
          value: '81',
          sufix: 'M4',
          criterias: {
            'M4.1': {
              name: 'Mentalidad de aprendizaje',
              sufix: 'M4.1',
              value: '79',
            },
            'M4.2': {
              name: 'Retroalimentación',
              sufix: 'M4.2',
              value: '88',
            },
            'M4.3': {
              name: 'Emprendimiento',
              sufix: 'M4.3',
              value: '76',
            },
          },
        },
      },
    },
    E: {
      name: 'ENERGÍA EMOCIONAL',
      sufix: 'E',
      value: '79',
      areas: {
        E1: {
          name: 'CONECTADO CON MIS EMOCIONES',
          value: '71',
          sufix: 'E1',
          criterias: {
            'E1.1': {
              name: 'Entendiendo mis emociones',
              sufix: 'E1.1',
              value: '73',
            },
            'E1.2': {
              name: 'Auto Reflexión',
              sufix: 'E1.2',
              value: '70',
            },
            'E1.3': {
              name: 'CompartIendo mis emociones',
              sufix: 'E1.3',
              value: '70',
            },
          },
        },
        E2: {
          name: 'MANEJANDO LA PRESIÓN',
          value: '83',
          sufix: 'E2',
          criterias: {
            'E2.1': {
              name: 'Estrés',
              sufix: 'E2.1',
              value: '75',
            },
            'E2.2': {
              name: 'Preocupaciones',
              sufix: 'E2.2',
              value: '67',
            },
            'E2.3': {
              name: 'Percepción de control',
              sufix: 'E2.3',
              value: '84',
            },
            'E2.4': {
              name: 'Calma',
              sufix: 'E2.4',
              value: '93',
            },
            'E2.5': {
              name: 'Relajación',
              sufix: 'E2.5',
              value: '90',
            },
            'E2.6': {
              name: 'Humor',
              sufix: 'E2.6',
              value: '80',
            },
            'E2.7': {
              name: 'Plazos de entrega',
              sufix: 'E2.7',
              value: '100',
            },
            'E2.8': {
              name: 'Diálogo interno positivo',
              sufix: 'E2.8',
              value: '85',
            },
            'E2.9': {
              name: 'Regulacíon emocional',
              sufix: 'E2.9',
              value: '74',
            },
            'E2.10': {
              name: 'Tiempo de calidad',
              sufix: 'E2.10',
              value: '80',
            },
          },
        },
        E3: {
          name: 'RELACION CON LOS COLEGAS',
          value: '82',
          sufix: 'E3',
          criterias: {
            'E3.1': {
              name: 'Cuidado',
              sufix: 'E3.1',
              value: '93',
            },
            'E3.2': {
              name: 'Empatía',
              sufix: 'E3.2',
              value: '90',
            },
            'E3.3': {
              name: 'Escucha',
              sufix: 'E3.3',
              value: '87',
            },
            'E3.4': {
              name: 'Asertividad',
              sufix: 'E3.4',
              value: '65',
            },
            'E3.5': {
              name: 'Manejo de conflictos',
              sufix: 'E3.5',
              value: '80',
            },
            'E3.6': {
              name: 'Redes',
              sufix: 'E3.6',
              value: '85',
            },
            'E3.7': {
              name: 'Dar apoyo',
              sufix: 'E3.7',
              value: '75',
            },
            'E3.8': {
              name: 'Solicitar ayuda',
              sufix: 'E3.8',
              value: '70',
            },
            'E3.9': {
              name: 'Comunicación Verbal',
              sufix: 'E3.9',
              value: '80',
            },
            'E3.10': {
              name: 'Comunicación no verbal',
              sufix: 'E3.10',
              value: '100',
            },
            'E3.11': {
              name: 'Relación con el supervisor',
              sufix: 'E3.11',
              value: '80',
            },
          },
        },
        E4: {
          name: 'TRABAJO EN EQUIPO',
          value: '80',
          sufix: 'E4',
          criterias: {
            'E4.1': {
              name: 'Compromiso',
              sufix: 'E4.1',
              value: '75',
            },
            'E4.2': {
              name: 'El Equipo Primero',
              sufix: 'E4.2',
              value: '70',
            },
            'E4.3': {
              name: 'Contribución',
              sufix: 'E4.3',
              value: '68',
            },
            'E4.4': {
              name: 'Compartir el éxito',
              sufix: 'E4.4',
              value: '80',
            },
            'E4.5': {
              name: 'Digno de confianza',
              sufix: 'E4.5',
              value: '80',
            },
            'E4.6': {
              name: 'Flexibilidad',
              sufix: 'E4.6',
              value: '90',
            },
            'E4.7': {
              name: 'Asumir responsanilidades',
              sufix: 'E4.7',
              value: '60',
            },
            'E4.8': {
              name: 'Puntualidad',
              sufix: 'E4.8',
              value: '80',
            },
            'E4.9': {
              name: 'Compañerismo',
              sufix: 'E4.9',
              value: '73',
            },
            'E4.10': {
              name: 'Trabajo colaborativo',
              sufix: 'E4.10',
              value: '80',
            },
            'E4.11': {
              name: 'Actitud positiva',
              sufix: 'E4.11',
              value: '100',
            },
            'E4.12': {
              name: 'Compartir las mejores prácticas',
              sufix: 'E4.12',
              value: '90',
            },
            'E4.13': {
              name: 'Inclusión',
              sufix: 'E4.13',
              value: '87',
            },
            'E4.14': {
              name: 'Mejorar el desempeño del equipo',
              sufix: 'E4.14',
              value: '85',
            },
          },
        },
      },
    },
    S: {
      name: 'ENERGÍA ESPIRITUAL',
      sufix: 'S',
      value: '91',
      areas: {
        S1: {
          name: 'IDENTIDAD',
          value: '89',
          sufix: 'S1',
          criterias: {
            'S1.1': {
              name: 'TALENTO',
              sufix: 'S1.1',
              value: '90',
            },
            'S1.2': {
              name: 'VALOR AGREGADO',
              sufix: 'S1.2',
              value: '90',
            },
            'S1.3': {
              name: 'VOCACIÓN',
              sufix: 'S1.3',
              value: '84',
            },
            'S1.4': {
              name: 'FELICIDAD',
              sufix: 'S1.4',
              value: '93',
            },
            'S1.5': {
              name: 'NECESIDADES',
              sufix: 'S1.5',
              value: '90',
            },
          },
        },
        S2: {
          name: 'VALORES',
          value: '90',
          sufix: 'S2',
          criterias: {
            'S2.1': {
              name: 'DISCIPLINA',
              sufix: 'S2.1',
              value: '87',
            },
            'S2.2': {
              name: 'RESPETO A LA DIVERSIDAD',
              sufix: 'S2.2',
              value: '100',
            },
            'S2.3': {
              name: 'HUMILDAD',
              sufix: 'S2.3',
              value: '88',
            },
            'S2.4': {
              name: 'INTEGRIDAD',
              sufix: 'S2.4',
              value: '80',
            },
            'S2.5': {
              name: 'PERSEVERANCIA',
              sufix: 'S2.5',
              value: '93',
            },
          },
        },
        S3: {
          name: 'SATISFACCIÓN EN EL TRABAJO',
          value: '90',
          sufix: 'S3',
          criterias: {
            'S3.1': {
              name: 'COMPROMISO',
              sufix: 'S3.1',
              value: '100',
            },
            'S3.2': {
              name: 'CONTENIDO DEL TRABAJO',
              sufix: 'S3.2',
              value: '87',
            },
            'S3.3': {
              name: 'DEMANDAS DEL TRABAJO',
              sufix: 'S3.3',
              value: '87',
            },
            'S3.4': {
              name: 'OPORTUNIDADES DE DESARROLLO',
              sufix: 'S3.4',
              value: '90',
            },
            'S3.5': {
              name: 'CONDICIONES DE TRABAJO',
              sufix: 'S3.5',
              value: '87',
            },
            'S3.6': {
              name: 'CULTURA CORPORATIVA',
              sufix: 'S3.6',
              value: '87',
            },
            'S3.7': {
              name: 'PASIÓN',
              sufix: 'S3.7',
              value: '90',
            },
          },
        },
        S4: {
          name: 'BÚSQUEDA',
          value: '100',
          sufix: 'S4',
          criterias: {
            'S4.1': {
              name: 'AMBICIÓN',
              sufix: 'S4.1',
              value: '95',
            },
            'S4.2': {
              name: 'PROPÓSITO',
              sufix: 'S4.2',
              value: '93',
            },
            'S4.3': {
              name: 'FUTURO',
              sufix: 'S4.3',
              value: '100',
            },
          },
        },
      },
    },
  },

  company_report: {
    F: {
      name: 'ENERGÍA FÍSICA',
      sufix: 'F',
      value: '66',
      areas: {
        F1: {
          name: 'SALUD FISICA',
          value: '30',
          sufix: 'F1',
          criterias: {
            'F1.1': {
              name: 'IMC Indice Masa Corporal',
              sufix: 'F1.1',
              value: '66',
            },
            'F1.2': {
              name: 'Dolores físicos',
              sufix: 'F1.2',
              value: '74',
            },
            'F1.4': {
              name: 'Fumar',
              sufix: 'F1.4',
              value: '99',
            },
            'F1.5': {
              name: 'Consumo de alcohol',
              sufix: 'F1.5',
              value: '80',
            },
            'F1.6': {
              name: 'Tiempo de Pantalla',
              sufix: 'F1.6',
              value: '24',
            },
          },
        },
        F2: {
          name: 'SUEÑO',
          value: '54',
          sufix: 'F2',
          criterias: {
            'F2.1': {
              name: 'Horas de sueño',
              sufix: 'F2.1',
              value: '59',
            },
            'F2.2': {
              name: 'Calidad del sueño',
              sufix: 'F2.2',
              value: '65',
            },
            'F2.3': {
              name: 'Regularidad del sueño',
              sufix: 'F2.3',
              value: '37',
            },
            'F2.4': {
              name: 'Problemas de sueño',
              sufix: 'F2.4',
              value: '46',
            },
            'F2.5': {
              name: 'Rutinas antes de dormir',
              sufix: 'F2.5',
              value: '61',
            },
            'F2.6': {
              name: 'Ambiente para dormir',
              sufix: 'F2.6',
              value: '64',
            },
            'F2.7': {
              name: 'Siestas',
              sufix: 'F2.7',
              value: '50',
            },
          },
        },
        F3: {
          name: 'CUERPO EN MOVIMIENTO',
          value: '70',
          sufix: 'F3',
          criterias: {
            'F3.1': {
              name: 'Movimiento Diario Ligero',
              sufix: 'F3.1',
              value: '74',
            },
            'F3.2': {
              name: 'Actividad Física Moderada',
              sufix: 'F3.2',
              value: '61',
            },
            'F3.3': {
              name: 'Actividad Física Vigorosa',
              sufix: 'F3.3',
              value: '76',
            },
            'F3.4': {
              name: 'Tiempo Sentado/a',
              sufix: 'F3.4',
              value: '69',
            },
          },
        },
        F4: {
          name: 'NUTRICION E HIDRATACION',
          value: '69',
          sufix: 'F4',
          criterias: {
            'F4.1': {
              name: 'Hidratación',
              sufix: 'F4.1',
              value: '72',
            },
            'F4.2': {
              name: 'Habitos nutricionales',
              sufix: 'F4.2',
              value: '68',
            },
            'F4.3': {
              name: 'Tiempo para comer ',
              sufix: 'F4.3',
              value: '69',
            },
          },
        },
      },
    },
    M: {
      name: 'ENERGÍA MENTAL',
      sufix: 'M',
      value: '79',
      areas: {
        M1: {
          name: 'MENTALIDAD INNOVADORA',
          value: '80',
          sufix: 'M1',
          criterias: {
            'M1.1': {
              name: 'Creatividad',
              sufix: 'M1.1',
              value: '82',
            },
            'M1.2': {
              name: 'Curiosidad',
              sufix: 'M1.2',
              value: '89',
            },
            'M1.4': {
              name: 'Apertura al cambio',
              sufix: 'M1.4',
              value: '76',
            },
            'M1.5': {
              name: 'Adaptabilidad',
              sufix: 'M1.5',
              value: '80',
            },
            'M1.6': {
              name: 'Adopción Digital',
              sufix: 'M1.6',
              value: '81',
            },
            'M1.7': {
              name: 'Desafiando el status quo',
              sufix: 'M1.7',
              value: '70',
            },
            'M1.8': {
              name: 'Lidiando con la incertidumbre',
              sufix: 'M1.8',
              value: '76',
            },
            'M1.9': {
              name: 'Resolución de problemas',
              sufix: 'M1.9',
              value: '83',
            },
          },
        },
        M2: {
          name: 'MENTALIDAD GANADORA',
          value: '80',
          sufix: 'M2',
          criterias: {
            'M2.1': {
              name: 'Fijación de metas',
              sufix: 'M2.1',
              value: '82',
            },
            'M2.2': {
              name: 'Toma de decisiones',
              sufix: 'M2.2',
              value: '82',
            },
            'M2.3': {
              name: 'Orientado al logro',
              sufix: 'M2.3',
              value: '80',
            },
            'M2.4': {
              name: 'Planificación',
              sufix: 'M2.4',
              value: '81',
            },
            'M2.5': {
              name: 'Monitoreo',
              sufix: 'M2.5',
              value: '83',
            },
            'M2.6': {
              name: 'Foco',
              sufix: 'M2.6',
              value: '76',
            },
            'M2.7': {
              name: 'Competitividad',
              sufix: 'M2.7',
              value: '75',
            },
            'M2.8': {
              name: 'Definiendo prioridades',
              sufix: 'M2.8',
              value: '79',
            },
            'M2.9': {
              name: 'Oportunismo positivo',
              sufix: 'M2.9',
              value: '79',
            },
            'M2.10': {
              name: 'Manejo del tiempo',
              sufix: 'M2.10',
              value: '80',
            },
            'M2.11': {
              name: 'Eficiencia',
              sufix: 'M2.11',
              value: '82',
            },
            'M2.12': {
              name: 'Carga de trabajo',
              sufix: 'M2.12',
              value: '78',
            },
          },
        },
        M3: {
          name: 'RESILIENCIA MENTAL',
          value: '79',
          sufix: 'M3',
          criterias: {
            'M3.1': {
              name: 'Confianza',
              sufix: 'M3.1',
              value: '84',
            },
            'M3.2': {
              name: 'Manejo del fracaso',
              sufix: 'M3.2',
              value: '77',
            },
            'M3.3': {
              name: 'Manejo del éxito',
              sufix: 'M3.3',
              value: '80',
            },
            'M3.4': {
              name: 'Positivismo',
              sufix: 'M3.4',
              value: '81',
            },
            'M3.5': {
              name: 'Pensamiento crítico',
              sufix: 'M3.5',
              value: '75',
            },
            'M3.6': {
              name: 'Retar a otros',
              sufix: 'M3.6',
              value: '74',
            },
            'M3.7': {
              name: 'Seguridad',
              sufix: 'M3.7',
              value: '74',
            },
            'M3.8': {
              name: 'Perseverancia',
              sufix: 'M3.8',
              value: '75',
            },
            'M3.9': {
              name: 'Toma de riesgos',
              sufix: 'M3.9',
              value: '86',
            },
            'M3.10': {
              name: 'Liderazgo',
              sufix: 'M3.10',
              value: '78',
            },
            'M3.11': {
              name: 'Iniciativa',
              sufix: 'M3.11',
              value: '79',
            },
          },
        },
        M4: {
          name: 'MENTALIDAD DE CRECIMIENTO',
          value: '80',
          sufix: 'M4',
          criterias: {
            'M4.1': {
              name: 'Mentalidad de aprendizaje',
              sufix: 'M4.1',
              value: '81',
            },
            'M4.2': {
              name: 'Retroalimentación',
              sufix: 'M4.2',
              value: '79',
            },
            'M4.3': {
              name: 'Emprendimiento',
              sufix: 'M4.3',
              value: '78',
            },
          },
        },
      },
    },
    E: {
      name: 'ENERGÍA EMOCIONAL',
      sufix: 'E',
      value: '78',
      areas: {
        E1: {
          name: 'CONECTADO CON MIS EMOCIONES',
          value: '77',
          sufix: 'E1',
          criterias: {
            'E1.1': {
              name: 'Entendiendo mis emociones',
              sufix: 'E1.1',
              value: '82',
            },
            'E1.2': {
              name: 'Auto Reflexión',
              sufix: 'E1.2',
              value: '79',
            },
            'E1.3': {
              name: 'CompartIendo mis emociones',
              sufix: 'E1.3',
              value: '71',
            },
          },
        },
        E2: {
          name: 'MANEJANDO LA PRESIÓN',
          value: '77',
          sufix: 'E2',
          criterias: {
            'E2.1': {
              name: 'Estrés',
              sufix: 'E2.1',
              value: '78',
            },
            'E2.2': {
              name: 'Preocupaciones',
              sufix: 'E2.2',
              value: '71',
            },
            'E2.3': {
              name: 'Percepción de control',
              sufix: 'E2.3',
              value: '71',
            },
            'E2.4': {
              name: 'Calma',
              sufix: 'E2.4',
              value: '76',
            },
            'E2.5': {
              name: 'Relajación',
              sufix: 'E2.5',
              value: '78',
            },
            'E2.6': {
              name: 'Humor',
              sufix: 'E2.6',
              value: '83',
            },
            'E2.7': {
              name: 'Plazos de entrega',
              sufix: 'E2.7',
              value: '82',
            },
            'E2.8': {
              name: 'Diálogo interno positivo',
              sufix: 'E2.8',
              value: '75',
            },
            'E2.9': {
              name: 'Regulacíon emocional',
              sufix: 'E2.9',
              value: '80',
            },
            'E2.10': {
              name: 'Tiempo de calidad',
              sufix: 'E2.10',
              value: '74',
            },
          },
        },
        E3: {
          name: 'RELACION CON LOS COLEGAS',
          value: '79',
          sufix: 'E3',
          criterias: {
            'E3.1': {
              name: 'Cuidado',
              sufix: 'E3.1',
              value: '83',
            },
            'E3.2': {
              name: 'Empatía',
              sufix: 'E3.2',
              value: '73',
            },
            'E3.3': {
              name: 'Escucha',
              sufix: 'E3.3',
              value: '77',
            },
            'E3.4': {
              name: 'Asertividad',
              sufix: 'E3.4',
              value: '74',
            },
            'E3.5': {
              name: 'Manejo de conflictos',
              sufix: 'E3.5',
              value: '77',
            },
            'E3.6': {
              name: 'Redes',
              sufix: 'E3.6',
              value: '81',
            },
            'E3.7': {
              name: 'Dar apoyo',
              sufix: 'E3.7',
              value: '77',
            },
            'E3.8': {
              name: 'Solicitar ayuda',
              sufix: 'E3.8',
              value: '79',
            },
            'E3.9': {
              name: 'Comunicación Verbal',
              sufix: 'E3.9',
              value: '82',
            },
            'E3.10': {
              name: 'Comunicación no verbal',
              sufix: 'E3.10',
              value: '86',
            },
            'E3.11': {
              name: 'Relación con el supervisor',
              sufix: 'E3.11',
              value: '77',
            },
          },
        },
        E4: {
          name: 'TRABAJO EN EQUIPO',
          value: '81',
          sufix: 'E4',
          criterias: {
            'E4.1': {
              name: 'Compromiso',
              sufix: 'E4.1',
              value: '82',
            },
            'E4.2': {
              name: 'El Equipo Primero',
              sufix: 'E4.2',
              value: '78',
            },
            'E4.3': {
              name: 'Contribución',
              sufix: 'E4.3',
              value: '81',
            },
            'E4.4': {
              name: 'Compartir el éxito',
              sufix: 'E4.4',
              value: '80',
            },
            'E4.5': {
              name: 'Digno de confianza',
              sufix: 'E4.5',
              value: '81',
            },
            'E4.6': {
              name: 'Flexibilidad',
              sufix: 'E4.6',
              value: '80',
            },
            'E4.7': {
              name: 'Asumir responsanilidades',
              sufix: 'E4.7',
              value: '80',
            },
            'E4.8': {
              name: 'Puntualidad',
              sufix: 'E4.8',
              value: '78',
            },
            'E4.9': {
              name: 'Compañerismo',
              sufix: 'E4.9',
              value: '79',
            },
            'E4.10': {
              name: 'Trabajo colaborativo',
              sufix: 'E4.10',
              value: '83',
            },
            'E4.11': {
              name: 'Actitud positiva',
              sufix: 'E4.11',
              value: '88',
            },
            'E4.12': {
              name: 'Compartir las mejores prácticas',
              sufix: 'E4.12',
              value: '81',
            },
            'E4.13': {
              name: 'Inclusión',
              sufix: 'E4.13',
              value: '81',
            },
            'E4.14': {
              name: 'Mejorar el desempeño del equipo',
              sufix: 'E4.14',
              value: '84',
            },
          },
        },
      },
    },
    S: {
      name: 'ENERGÍA ESPIRITUAL',
      sufix: 'S',
      value: '87',
      areas: {
        S1: {
          name: 'IDENTIDAD',
          value: '86',
          sufix: 'S1',
          criterias: {
            'S1.1': {
              name: 'TALENTO',
              sufix: 'S1.1',
              value: '84',
            },
            'S1.2': {
              name: 'VALOR AGREGADO',
              sufix: 'S1.2',
              value: '90',
            },
            'S1.3': {
              name: 'VOCACIÓN',
              sufix: 'S1.3',
              value: '84',
            },
            'S1.4': {
              name: 'FELICIDAD',
              sufix: 'S1.4',
              value: '85',
            },
            'S1.5': {
              name: 'NECESIDADES',
              sufix: 'S1.5',
              value: '87',
            },
          },
        },
        S2: {
          name: 'VALORES',
          value: '87',
          sufix: 'S2',
          criterias: {
            'S2.1': {
              name: 'DISCIPLINA',
              sufix: 'S2.1',
              value: '85',
            },
            'S2.2': {
              name: 'RESPETO A LA DIVERSIDAD',
              sufix: 'S2.2',
              value: '86',
            },
            'S2.3': {
              name: 'HUMILDAD',
              sufix: 'S2.3',
              value: '90',
            },
            'S2.4': {
              name: 'INTEGRIDAD',
              sufix: 'S2.4',
              value: '86',
            },
            'S2.5': {
              name: 'PERSEVERANCIA',
              sufix: 'S2.5',
              value: '88',
            },
          },
        },
        S3: {
          name: 'SATISFACCIÓN EN EL TRABAJO',
          value: '87',
          sufix: 'S3',
          criterias: {
            'S3.1': {
              name: 'COMPROMISO',
              sufix: 'S3.1',
              value: '86',
            },
            'S3.2': {
              name: 'CONTENIDO DEL TRABAJO',
              sufix: 'S3.2',
              value: '85',
            },
            'S3.3': {
              name: 'DEMANDAS DEL TRABAJO',
              sufix: 'S3.3',
              value: '90',
            },
            'S3.4': {
              name: 'OPORTUNIDADES DE DESARROLLO',
              sufix: 'S3.4',
              value: '88',
            },
            'S3.5': {
              name: 'CONDICIONES DE TRABAJO',
              sufix: 'S3.5',
              value: '82',
            },
            'S3.6': {
              name: 'CULTURA CORPORATIVA',
              sufix: 'S3.6',
              value: '89',
            },
            'S3.7': {
              name: 'PASIÓN',
              sufix: 'S3.7',
              value: '89',
            },
          },
        },
        S4: {
          name: 'BÚSQUEDA',
          value: '88',
          sufix: 'S4',
          criterias: {
            'S4.1': {
              name: 'AMBICIÓN',
              sufix: 'S4.1',
              value: '88',
            },
            'S4.2': {
              name: 'PROPÓSITO',
              sufix: 'S4.2',
              value: '87',
            },
            'S4.3': {
              name: 'FUTURO',
              sufix: 'S4.3',
              value: '89',
            },
          },
        },
      },
    },
  },
});
