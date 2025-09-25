// Datos de testimonios para diferentes destinos turísticos
export const testimonialsData = {
  palestina: [
    {
      id: 'pal-1',
      name: 'María García',
      location: 'Lima, Perú',
      rating: 5,
      comment: 'Una experiencia increíble visitando la Cueva de Palestina. Los guías fueron muy profesionales y el lugar es simplemente mágico. Definitivamente regresaré.',
      initials: 'MG'
    },
    {
      id: 'pal-2', 
      name: 'Carlos Rodriguez',
      location: 'Trujillo, Perú',
      rating: 5,
      comment: 'La Cueva de Palestina superó todas mis expectativas. Es un lugar lleno de misterio y belleza natural. La aventura subterránea fue inolvidable.',
      initials: 'CR'
    },
    {
      id: 'pal-3',
      name: 'Ana Martínez',
      location: 'Arequipa, Perú', 
      rating: 4,
      comment: 'Excelente destino para los amantes de la naturaleza y la aventura. Las formaciones rocosas son impresionantes y la experiencia es única.',
      initials: 'AM'
    }
  ],
  
  colca: [
    {
      id: 'col-1',
      name: 'Diego Vargas',
      location: 'Cusco, Perú',
      rating: 5,
      comment: 'la cascada del colca es hermosa, el sonido del agua y la vista son impresionantes. Un lugar perfecto para relajarse y conectar con la naturaleza.',
      initials: 'DV'
    },
    {
      id: 'col-2',
      name: 'Lucia Torres',
      location: 'Huancayo, Perú',
      rating: 5,
      comment: 'la cascada del colca es un espectáculo de la naturaleza. La fuerza del agua y el entorno selvático crean una atmósfera mágica. Ideal para los amantes de la fotografía.',
      initials: 'LT'
    },
    {
      id: 'col-3',
      name: 'Roberto Silva',
      location: 'Iquitos, Perú',
      rating: 4,
      comment: 'la cascada del colca es un lugar impresionante. La caída de agua es majestuosa y el entorno natural es perfecto para una escapada relajante.',
      initials: 'RS'
    }
  ],

  mirador: [
    {
      id: 'mir-1',
      name: 'Fernanda López',
      location: 'Chiclayo, Perú',
      rating: 5,
      comment: 'Las vistas desde el Cerro Mirador son simplemente espectaculares. Puedes ver todo el Alto Mayo desde arriba. Un lugar perfecto para la fotografía.',
      initials: 'FL'
    },
    {
      id: 'mir-2',
      name: 'Javier Mendoza',
      location: 'Piura, Perú',
      rating: 4,
      comment: 'El atardecer desde el Mirador es una experiencia mágica. Los colores del cielo se reflejan en toda la selva. Totalmente recomendado.',
      initials: 'JM'
    },
    {
      id: 'mir-3',
      name: 'Carla Quispe',
      location: 'Tacna, Perú',
      rating: 5,
      comment: 'La caminata hasta la cima vale totalmente la pena. Las vistas panorámicas del valle son increíbles y el aire puro te renueva.',
      initials: 'CQ'
    }
  ],

  mariposario: [
    {
      id: 'mar-1',
      name: 'Patricia Ruiz',
      location: 'Cajamarca, Perú',
      rating: 5,
      comment: 'El Mariposario Morpho Azul es un paraíso de colores. Ver tantas especies de mariposas volando libremente es una experiencia única y relajante.',
      initials: 'PR'
    },
    {
      id: 'mar-2',
      name: 'Miguel Santos',
      location: 'Ayacucho, Perú',
      rating: 5,
      comment: 'Perfecto para visitar en familia. Los niños quedaron fascinados con las mariposas y aprendieron mucho sobre la naturaleza. Altamente recomendado.',
      initials: 'MS'
    },
    {
      id: 'mar-3',
      name: 'Rosa Campos',
      location: 'Pucallpa, Perú',
      rating: 4,
      comment: 'Un oasis de tranquilidad rodeado de belleza natural. Las mariposas son hermosas y el lugar está muy bien cuidado. Una experiencia relajante.',
      initials: 'RC'
    }
  ],

  escondida: [
    {
      id: 'esc-1',
      name: 'Valeria Moreno',
      location: 'Ica, Perú',
      rating: 5,
      comment: 'La Cueva Cascada Escondida es un paraíso oculto. El sonido del agua y la frescura del lugar te transportan a otro mundo. Una experiencia mágica.',
      initials: 'VM'
    },
    {
      id: 'esc-2',
      name: 'Gabriel Herrera',
      location: 'Lambayeque, Perú',
      rating: 5,
      comment: 'Un lugar increíblemente refrescante. Nadar en las pozas naturales después de la caminata fue perfecto. La naturaleza en su máximo esplendor.',
      initials: 'GH'
    },
    {
      id: 'esc-3',
      name: 'Camila Sánchez',
      location: 'Moquegua, Perú',
      rating: 4,
      comment: 'La aventura para llegar a la cascada escondida vale totalmente la pena. Es un refugio perfecto para desconectarse y disfrutar de la naturaleza.',
      initials: 'CS'
    }
  ],

  general: [
    {
      id: 'gen-1',
      name: 'Eduardo Vega',
      location: 'Moyobamba, Perú',
      rating: 5,
      comment: 'Alto Mayo es un destino turístico excepcional. Cada lugar tiene su magia especial y los paisajes son impresionantes. Un paraíso por descubrir.',
      initials: 'EV'
    },
    {
      id: 'gen-2',
      name: 'Isabella Morales',
      location: 'Tarapoto, Perú',
      rating: 5,
      comment: 'La diversidad de destinos en Alto Mayo es increíble. Desde cuevas misteriosas hasta mariposarios coloridos. Un lugar que tiene de todo.',
      initials: 'IM'
    },
    {
      id: 'gen-3',
      name: 'Andrés Chávez',
      location: 'Huánuco, Perú',
      rating: 5,
      comment: 'La organización de los tours y la atención al turista es excelente. Cada destino está bien señalizado y cuenta con guías profesionales.',
      initials: 'AC'
    }
  ]
};

// Función helper para obtener testimonios por destino
export const getTestimonialsByDestination = (destination: string) => {
  return testimonialsData[destination as keyof typeof testimonialsData] || testimonialsData.general;
};