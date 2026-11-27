import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
    }

    getProducts()
  }, [])

  return (
    <div>
      <h1 className="m-6 text-5xl">Products</h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.id} className="m-2">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg">{product.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 h-40 w-full object-contain"
              />
              <p className="mb-4">${product.price}</p>
              <Button>
                <Link to={`/productDetails/${product.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products
