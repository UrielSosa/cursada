/* Ejemplo de destructuracion */
export const perro = {
    name: 'firu',
    edad: 10
}
let { name, edad } = perro;
console.log(name, edad);

/* Links */
export const links = [
    {
      name: 'left-navbar',
      links: [
        {
            title: 'Todos los productos',
            icon: '',
            href: '/products'
        },
        {
            title: 'Resultados',
            icon: '',
            href: '/results'
        },
        {
            title: 'Crear',
            icon: '',
            href: '/create'
        },
        {
            title: 'Editar',
            icon: '',
            href: '/edit'
        }
      ]
    },
    {
      name: 'right-navbar',
      links: [
        {
            title: 'Crea tu cuenta',
            icon: 'far fa-address-card',
            href: '/register'
        },
        {
            title: 'Ingresá',
            icon: 'fas fa-sign-in-alt',
            href: '/login'
        },
        {
            title: 'Mis compras',
            icon: 'fas fa-shopping-basket',
            href: '/cart'
        }
      ]
    }
  ];