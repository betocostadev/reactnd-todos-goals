const List = (props) => {
  return (
    <ul>
      { props.items.map(item => (
          <li key={item.id}>
            <span 
              onClick={() => props.toggle && props.toggle(item.id)}
              style={{textDecoration: item.complete ? 'line-through' : 'none'}}
              >{item.name}</span>
            <button style={{ marginLeft: '10px'}} onClick={() => props.remove(item)}>
              X
            </button>
          </li>
      ))}
    </ul>
  )
}

export default List