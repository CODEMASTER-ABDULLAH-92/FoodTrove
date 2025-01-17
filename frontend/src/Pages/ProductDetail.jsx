import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asset, popular } from '../assets/asset';
import { addToCart, removeToCart } from '../feacture/popular';
import { Link } from 'react-router-dom';
const ProductDetail = () => {
  const productList = useSelector((state) => state.populars.popular);
  const curr = useSelector((state) => state.populars.curr);
  const cartItems = useSelector((state) => state.populars.cartItems);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [productReview, setProductReview] = useState(1);
  const [productsFilter, setProductsFilter] = useState([]);

  // Fetch product data
  useEffect(() => {
    if (productList.length > 0) {
      const product = productList.find((item) => item._id === Number(productId));
      if (product) {
        setProductData(product);
        setImage(product.image[0]); // Default image
        setProductsFilter(popular.filter((item) => item.category === product.category));
      } else {
        console.error('Product not found');
      }
    }
  }, [productList, productId]);

  // Handlers for cart actions
  const handleCartItem = (itemId) => dispatch(addToCart(itemId));
  const handleDeleteItem = (itemId) => dispatch(removeToCart(itemId));

  if (!productData) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="transition-opacity opacity-100 ease-in duration-500">
      {/* SEO Improvements */}
      <head>
        <title>{productData.name} - Product Detail</title>
        <meta name="description" content={productData.smallDescription} />
      </head>

      {/* Header Section */}
      <div className="h-10 w-full text-white flex justify-between items-center bg-[#F53E32] px-[9vw] py-7">
        <p className="font-semibold text-[20px]">Product</p>
        <p className="font-medium text-[17px]">Product-Home</p>
      </div>

      {/* Main Content */}
      <div className="flex my-10 lg:px-[9vw] md:flex-row flex-col">
        {/* Product Images */}
        <div className="flex-1 flex flex-col px-[2vw] sm:px-[4vw] lg:px-[7vw]">
          <img src={image} alt={productData.name} className="rounded-lg" />
          <div className="flex justify-start mt-4 gap-3 overflow-scroll items-center">
            {productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                className={`w-16 cursor-pointer rounded-md border ${
                  item === image ? 'border-[#F53E32]' : 'border-gray-300'
                }`}
                onClick={() => setImage(item)}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col md:px-0 px-[4vw]">
          <h1 className="text-gray-700 text-[26px] font-light">{productData.name}</h1>
          <p className="text-gray-400 text-[16px]">{productData.smallDescription}</p>
          <hr className="w-[90%] h-[3px] rounded-full bg-gray-400 my-3" />

          {/* Product Rating */}
          <div className="flex items-center mb-4">
            {productData.starImage?.map((item, index) => (
              <img src={item} key={index} alt={`Star ${index + 1}`} />
            ))}
            <p className="ml-10 text-gray-400">{productData.statRate}</p>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            {[
              { label: 'Brand', value: productData.Brand },
              { label: 'Flavour', value: productData.Flavour },
              { label: 'Diet Type', value: productData.DietType },
              { label: 'Weight', value: productData.weight },
              { label: 'Speciality', value: productData.Info },
            ].map(({ label, value }) => (
              <div className="flex items-center w-full justify-start" key={label}>
                <b className="text-gray-700 text-[20px] w-[120px]">{label}</b>
                <p className="text-gray-400 ml-3 text-[20px]">
                  <span className="font-bold text-gray-700 mr-3">:</span>
                  {value?.toUpperCase() || 'N/A'}
                </p>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="my-4 flex items-end gap-5">
            <p className="text-[26px] text-[#F53E32] font-bold">
              {curr}
              {productData.price}
            </p>
            <p className="text-[20px] text-gray-900 line-through">
              {curr}
              {productData.oldPrice}
            </p>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center mt-5">
            <div className="flex items-center gap-5">
              <p className="border px-[22px] rounded-md py-3 text-lg">
                {cartItems[productId] || 0}
              </p>
              <div>
                <p
                  onClick={() => handleCartItem(productId)}
                  className="border py-[1px] px-2 rounded-md cursor-pointer"
                >
                  +
                </p>
                <p
                  onClick={() => handleDeleteItem(productId)}
                  className="border py-[1px] px-2 rounded-md cursor-pointer"
                >
                  -
                </p>
              </div>
              <button
                className="bg-[#F53E32] text-white px-4 py-3 rounded-md"
                onClick={() => handleCartItem(productId)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews & Information */}
      <div className="border-2 mx-[7vw] py-4 rounded-lg shadow-lg">
        <div className="flex gap-8 px-6 border-b-2 pb-5 md:flex-row flex-col">
          {['Description', 'Information', 'Review'].map((tab, idx) => (
            <h1
              key={idx}
              className={`text-xl font-bold cursor-pointer ${
                productReview === idx + 1 ? 'text-[#F53E32]' : 'hover:text-[#F53E32]'
              }`}
              onClick={() => setProductReview(idx + 1)}
            >
              {tab}
            </h1>
          ))}
        </div>
        <div className="mt-4 px-6">
          <p className="text-base text-gray-700 pb-6 pt-3">
            {productReview === 1
              ? productData.description
              : productReview === 2
              ? productData.Reviews
              : productData.Inforamtion}
          </p>
          <h1 className='text-[20px] border-b-2 pb-4 mb-4 font-bold '>Packing & Delivery</h1>
          <p>We prioritize the safety of your products during transit. Each item is meticulously packed using high-quality materials to ensure it reaches you in pristine condition. Fragile items are secured with bubble wrap, foam padding, or reinforced packaging to prevent any potential damage.

Our delivery service is prompt and reliable. Orders are processed swiftly and dispatched within 1-2 business days. Depending on your location, delivery typically takes between 3-7 working days. You will receive a tracking number once your order is shipped, enabling you to monitor its journey to your doorstep.

In the unlikely event of any issues during delivery, our customer support team is always ready to assist. Your satisfaction and trust are our top priorities.</p>
        </div>
      </div>

      {/* Popular Products */}
      <div className="mt-10 lg:px-[9vw]">
        <h2 className="text-2xl text-center font-bold mb-5">Popular Products</h2>
        <p className='text-center mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At molestias repellendus ex, dignissimos cupiditate corporis quos possimus placeat aliquid vel minima alias quisquam eius iusto in repudiandae, vitae aspernatur quae?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsFilter.slice(0,5).map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow">
               <Link to={`/productDetail/${item._id}`}>
                  <div className="px-2 relative flex justify-center items-center">
                    <img
                      src={item.image[0] || asset.placeholderImage} // Fallback image
                      className="object-contain object-center self-center"
                      alt={item.name || "Product Image"}
                    />
                    <div className="h-[30px] w-[30px] rounded-full border absolute right-[45%] bg-transparent -bottom-3 flex justify-center items-center">
                      <img
                        src={item.lockImg || asset.placeholderImage} // Fallback image
                        alt="Lock Icon"
                        className="ml-[5px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 items-center flex-col">
                    <p className="text-center text-[#777777] mt-4 text-[20px] font-light">
                      {item.category}
                    </p>
                    <div className="flex items-center">
                      
                      <p className="text-center ml-3 mt-1">{item.statRate}</p>
                    </div>
                    <p className="text-[15px] w-[90%] m-auto text-center font-medium">
                      {item.name}
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-center text-[#F53E32] font-semibold text-[16px]">

                        {item.price}
                      </p>
                      <p className="text-center text-[13px] text-[#7a7a7a] line-through">

                        {item.oldPrice}
                      </p>
                    </div>
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
