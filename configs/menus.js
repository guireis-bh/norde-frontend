export const menus = [
  {
    id: 'dashboard',
    text: 'Dashboard',
    link: '/'
  },
  {
    id: 'studants',
    text: 'Alunos',
    children: [
      {
        id: 'studant-add',
        text: 'Adicionar Aluno',
        link: '/aluno/novo'
      },
      {
        id: 'relative-add',
        text: 'Adicionar Familiar',
        link: '/familiar/novo'
      }
    ]
  },
  {
    id: 'employees',
    text: 'Funcionários',
    children: [
      {
        id: 'employees-add',
        text: 'Adicionar Funcionário',
        link: '/funcionario/novo'
      }
    ]
  },
  {
    id: 'calendar',
    text: 'Calendario',
    link: '/calendario'
  }
]

export const configs = [
  {
    id: 'configs',
    text: 'Configurações',
    children: [
      {
        id: 'default-values-add',
        text: 'Valores Padrões',
        link: '/configs/valores-padroes'
      }
    ]
  }
]
