export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return { bgState: {bgColor: "black"}, activeState: {activeColor: "info"} } 
    }
    return JSON.parse(serializedData); 
  } catch (error) {
    console.error(error)
  }
}
export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  } catch (error) {
    console.error(error)
  }
}