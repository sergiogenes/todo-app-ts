import { FILTERS_BUTTONS } from '../consts'
import { type FilterValues } from '../types'

interface Props {
  filterSelected: FilterValues
  handleFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  handleFilterChange
}): JSX.Element => {
  const handleClick =
    (filter: FilterValues) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      handleFilterChange(filter)
    }
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValues)}>
              {literal}
            </a>
          </li>
        )
      })}
      {/* <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('all')
          }}>
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('active')
          }}>
          Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => onFilterChange('completed')}>
          Completos
        </a>
      </li> */}
    </ul>
  )
}
