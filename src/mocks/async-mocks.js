const products = [
    { id: "1", name: "Hell Let Loose", category: "accion", image: "hll.png", description: "Shooter en primera persona." },
    { id: "2", name: "DayZ", category: "survival", image: "dayz.jpg", description: "Terror y supervivencia." },
    { id: "3", name: "VEIN", category: "survival", image: "vein.png", description: "Sobrevive al apocalipsis zombie." },
    { id: "4", name: "SCUM", category: "survival", image: "scum.jpg", description: "Sobreviví en una isla." },
  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === id))
      }, 500)
    })
  }
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(p => p.category === category))
      }, 500)
    })
  }
  