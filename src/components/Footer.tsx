import { type Todo as TodoType } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  todos: TodoType[]
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span>
        <strong>{todos.length}</strong> tareas pendientes
      </span>

      <Filters filterSelected={'algo'} onFilterChange={'algo'} />
    </footer>
  )
}
