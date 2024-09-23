import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-left">
          <strong>From 11 Am to 12 pm</strong>
          <h1>Best Foods</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            laboriosam nam iure mollitia eligendi quos deleniti, culpa, esse
            quasi, dicta quidem. Mollitia, quibusdam sequi. Ipsa unde
            reprehenderit cum corporis ut.
          </p>
          <Link className="btn" href="/">
            Find Store
          </Link>
        </div>
        <div className="banner-right">
          <div className="banner-right-wrp">
            <div className="banner-right-img">
              <Image
                src={"/images/chai.png"}
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            <div className="content">
              <strong>Call Us:</strong>
              <Link href="tel:+91 78389 87700">+91 78389 87700</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
