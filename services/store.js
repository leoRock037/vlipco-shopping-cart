/* Mocking client-server processing */

const _products = [
  {
    id: 1,
    name: 'milk',
    price: 1.50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3295320-750-750/7702177001783-1.jpg?v=636646652313570000',
    quantity: 0,
    amount: 0
  },
  {
    id: 2,
    name: 'Milo',
    price: 2.50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3471591-750-750/7702024056102-1.jpg?v=637111569561730000',
    quantity: 0,
    amount: 0
  },
  {
    id: 3,
    name: 'De todito',
    price: 3,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://carulla.vtexassets.com/arquivos/ids/201528-800-auto?width=800&height=auto&aspect=true',
    quantity: 0,
    amount: 0
  },
  {
    id: 4,
    name: 'Zucaritas',
    price: 3,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3398945-1000-1000/7702103015075.jpg?v=636887935462900000',
    quantity: 0,
    amount: 0
  },
  {
    id: 5,
    name: 'Milo',
    price: 2.50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3471591-750-750/7702024056102-1.jpg?v=637111569561730000',
    quantity: 0,
    amount: 0
  },
  {
    id: 6,
    name: 'Zucaritas',
    price: 3,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3398945-1000-1000/7702103015075.jpg?v=636887935462900000',
    quantity: 0,
    amount: 0
  },
  {
    id: 7,
    name: 'milk',
    price: 1.50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3295320-750-750/7702177001783-1.jpg?v=636646652313570000',
    quantity: 0,
    amount: 0
  }
]

export default {
  getProducts (cb) {
    setTimeout(cb(_products), 100)
  }
}
