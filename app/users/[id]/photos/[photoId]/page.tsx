interface Props {
  params: { id: number, photoId: number }
}

const PhotoDetailsPage = ({ params: { id, photoId }}: Props) => {
  return (
    <div>PhotoDetailsPage {id} - {photoId}</div>
  )
}

export default PhotoDetailsPage;