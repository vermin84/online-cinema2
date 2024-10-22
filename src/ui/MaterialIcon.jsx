import * as ReactIcons from 'React-icons/md'

export default function MaterialIcon({ name }) {
  const IconComponent = ReactIcons[name]

  return <IconComponent /> || null
}
