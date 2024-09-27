import Image from "next/image";

export default function Product() {
  const products = [
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, ",
    },
  ];
  return (
    <div className="product">
      <div className="container">
        <h2 className="title">Our Products</h2>
        <div className="product-wrp">
          {products?.map((product, i) => (
            <div className="product-item">
              <Image
                src={product?.img}
                alt={product?.name}
                width={200}
                height={200}
              />
              <h4>{product.name}</h4>
              <p>{product?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
