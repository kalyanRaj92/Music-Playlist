import {MdDelete} from 'react-icons/md'

const PlayList = props => {
  const {musicDetails, deleteMusic} = props
  const {id, name, genre, duration, imageUrl} = musicDetails

  const onDelete = () => {
    deleteMusic(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="track" />
        <p>{name}</p>
        <p>{genre}</p>
        <p>{duration}</p>
      </div>
      <button type="button" onClick={onDelete} data-testid="delete">
        <MdDelete />
      </button>
    </li>
  )
}
export default PlayList
