import ItemList from './ItemList'

function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>You list is empty</p>
      )}
    </>
  )

  // const [name, setName] = useState('Dave')
  // const [count, setCount] = useState(0)
  // function handleNameChange() {
  //   const names = ['Dave', 'Libovsky', 'Sobor']
  //   const int = Math.floor(Math.random() * 3)
  //   setName(names[int])
  // }

  // const contentStyles = {
  //   background: 'red',
  // }

  // function handleClick() {
  //   setCount(count + 1)
  //   console.log(count)
  // }
  // function handleClick2() {
  //   console.log(count)
  // }

  // function handleClickTwo(text) {
  //   console.log(text)
  // }

  // function handleClickTree(e) {
  //   console.log(e)
  // }

  // return (
  //   <main style={contentStyles}>
  //     <p onDoubleClick={handleClick}>Where is the money {name}</p>

  //     <button onClick={handleClick}>CLick me</button>
  //     <button onClick={handleClick2}>CLick me</button>
  //     <button onClick={handleNameChange}>CLick me</button>
  //     <button onClick={() => handleClickTwo('O my god')}>CLick me</button>
  //     <button onClick={(e) => handleClickTree(e)}>CLick me</button>
  //     <button onDoubleClick={() => handleClickTwo('ddd')}>CLick me</button>
  //   </main>
  // )
}

export default Content
