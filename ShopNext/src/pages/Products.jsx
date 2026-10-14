import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState("")
  const [filter, setfilter] = useState([])
  const [search, setsearch] = useState("")

  const navigate = useNavigate()


  async function getApiData() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products")
      console.log(result.data)
      setproducts(result.data)
      setfilter(result.data)
    }
    catch (error) {
      seterror("Failed to fetch products")
    }
    finally {
      setloading(false)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])

  useEffect(() => {
    const filtered = filter.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setproducts(filtered);
  }, [search, filter]);

  if (loading) {
    return <main className="products-loading"><p className="products-loading-text">Gathering the good things...</p></main>
  }
  if (error) {
    return <main className="products-error-page"><p className="products-error-box">{error}</p></main>
  }

  const handleCategory = (c) => {
    const result = filter.filter((p) => p.category === c)
    if (c === "all") {
      setproducts(filter)
    }
    else {
      setproducts(result)
    }
  }
  const handlePrice = (p) => {
    let filteredProducts
    switch (p) {
      case "Under 100":
        filteredProducts = filter.filter((p) => p.price < 100)
        break
      case "100-500":
        filteredProducts = filter.filter((p) => p.price >= 100 && p.price <= 500)
        break
      case "500-1000":
        filteredProducts = filter.filter((p) => p.price > 500 && p.price <= 1000)
        break
      case "Above 1000":
        filteredProducts = filter.filter((p) => p.price > 1000)
        break
      default:
        filteredProducts = filter
    }
    setproducts(filteredProducts)
  }

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  }

  return (
    <main className="products-page">
      <section className="products-header-section">
        <div className="products-header-wrap">
          <p className="products-edit-label">The ShopNext edit</p>
          <div className="products-header-row">
            <div>
              <h1 className="products-main-title">Find your good thing.</h1>
              <p className="products-subtitle">Thoughtful finds for everyday life, little luxuries, and everything in between.</p>
            </div>
            <label className="products-search-box">
              <span className="products-search-icon" aria-hidden="true">⌕</span>
              <input className="products-search-input" type="text" placeholder="Search the collection" onChange={(e) => setsearch(e.target.value)} />
            </label>
          </div>
        </div>
      </section>

      <section className="products-content-section">
        <div className="products-filters-card">
          <div>
            <h2 className="products-filter-heading">Categories</h2>
            <div className="products-chip-row">
              <button className="products-chip products-chip-active" onClick={() => handleCategory("all")}>All Categories</button>
              <button className="products-chip" onClick={() => handleCategory("electronics")}>Electronics</button>
              <button className="products-chip" onClick={() => handleCategory("jewelery")}>Jewelery</button>
              <button className="products-chip" onClick={() => handleCategory("men's clothing")}>Men&apos;s Clothing</button>
              <button className="products-chip" onClick={() => handleCategory("women's clothing")}>Women&apos;s Clothing</button>
            </div>
          </div>

          <div className="products-price-section">
            <h2 className="products-filter-heading">Price range</h2>
            <div className="products-chip-row">
              <button className="products-chip" onClick={() => handlePrice("Under 100")}>Under $100</button>
              <button className="products-chip" onClick={() => handlePrice("100-500")}>$100–500</button>
              <button className="products-chip" onClick={() => handlePrice("500-1000")}>$500–1,000</button>
              <button className="products-chip" onClick={() => handlePrice("Above 1000")}>Above $1,000</button>
            </div>
          </div>
        </div>

        <div className="products-list-header">
          <h2 className="products-section-title">The collection</h2>
          <p className="products-results-badge">{products.length} products found</p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <article
              key={p.id}
              onClick={() => { handleProductDetails(p.id) }}
              className="products-card"
            >
              <div className="products-image-wrap">
                <img src={p.image} alt={p.title} className="products-image" />
              </div>
              <div className="products-card-body">
                <p className="products-category">{p.category}</p>
                <h3 className="products-card-title">{p.title}</h3>
                <p className="products-card-description">{p.description}</p>
                <div className="products-card-footer">
                  <p className="products-card-price">${p.price.toFixed(2)}</p>
                  <span className="products-card-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products