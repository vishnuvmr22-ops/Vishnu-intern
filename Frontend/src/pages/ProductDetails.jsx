import { Card } from '@/components/ui/card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(response.data)
    }

    getProduct()
  }, [id])

  if (!product) {
    return <h1 className="m-6 text-4xl">Loading product…</h1>
  }

  return (
    <div>
      <h1 className="m-6 text-5xl">Product Details</h1>
      <Card className="m-6 flex flex-col gap-6 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-70 w-full object-contain"
        />
        <h1 className="text-4xl font-extrabold">{product.title}</h1>
        <h2 className="text-2xl">Price: ${product.price}</h2>
        <p className="text-lg">{product.description}</p>
      </Card>
    </div>
  )
}

export default ProductDetails
