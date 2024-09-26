import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-left">
          <div className="img">
            <Image
              src="/images/food/Samosa.jpg"
              width={200}
              height={320}
              alt=""
            />
          </div>
          <div className="img">
            <Image
              src="/images/food/pani-puri.jpg"
              width={320}
              height={300}
              alt=""
            />{" "}
            <Image
              src="/images/food/biriani.jpg"
              width={320}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="about-right">
          <h2>Imported spices and Basmati rice from India</h2>
          <p>
            Our commitment to authenticity extends to our ingredients. We source
            the finest Indian spices and basmati rice directly from India,
            ensuring a truly authentic taste experience. These premium
            ingredients are the foundation of our flavorful dishes, bringing the
            rich heritage of Indian cuisine to Bangkok.
          </p>

          <strong>
            Our mission is to introduce Bangkok to the vibrant and diverse
            culinary heritage of India. We strive to capture the essence of
            authentic Indian street food, bringing the unique and delicious
            flavors of the subcontinent to the heart of Thailand.
          </strong>
          <Link href="#contact" className="btn">
            GO to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
