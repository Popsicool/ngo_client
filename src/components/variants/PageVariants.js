
const pageVariant = {
  start: {
    opacity: 0,
    x:"100vw"
  },
  end:{
    opacity: 1,
    x: 0,
    transition: {duration: .5}
  },
  exit:{
    opacity: 1,
    x:"-100vw"
  }
}
export default pageVariant