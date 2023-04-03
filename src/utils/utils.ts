export const getDecimals = (n: number): number => {
  return parseInt(n.toString().split('.')[1]) || 0;
}

export const getHighlightedProducts = () => {
  return [
    {
      id: 'MLA1219297521',
      title: 'Apple iPhone 14 Pro (256 Gb) - Morado Oscuro',
      price: {
        currency: 'ARS',
        amount: 664557,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_726811-MLM51559388195_092022-I.jpg',
      condition: 'new',
      freeShipping: true,
      city: 'Rosario',
    },
    {
      id: 'MLA1146179471',
      title: 'Microsoft Xbox Series S 512gb Standard  Color Blanco',
      price: {
        currency: 'ARS',
        amount: 164999,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_627149-MLA44484230438_012021-I.jpg',
      condition: 'new',
      freeShipping: true,
      city: 'Barracas',
    },
    {
      id: 'MLA932293921',
      title: 'Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480',
      price: {
        currency: 'ARS',
        amount: 194749.05,
        decimals: 5,
      },
      picture: 'http://http2.mlstatic.com/D_884368-MLA53087339003_122022-I.jpg',
      condition: 'new',
      freeShipping: true,
      city: 'Palermo',
    },
    {
      id: 'MLA1115076846',
      title: 'Apple iPad Mini (6ª Generación) 8.3  Wi-fi 64gb - Gris Espacial',
      price: {
        currency: 'ARS',
        amount: 239999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_713942-MLA48035175017_102021-I.jpg',
      condition: 'new',
      freeShipping: true,
      city: 'San Nicolás',
    },
  ];
}
