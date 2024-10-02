import Image from "next/image";

export default function Contact() {
  return (
    <div id="offer" className="contact">
      <div className="container">
        <h2 className="title">Offers</h2>
        <div className="food-menu-offers">
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="/images/offer-1.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            {/* <div className="content">
              <strong>-20%</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam praesentium odit dolorem quasi dignissimos nobis,
              </p>
            </div> */}
          </div>
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="/images/offer-2.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
