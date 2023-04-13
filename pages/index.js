import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home() {
  return (
    <>
      <div className="bgslide  ">
        <div className="slide-container ">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image width={46} height={46} src="" className="d-block w-100 myImage" alt="/public/" />
              </div>
              <div className="carousel-item">
                <Image width={46} height={46} src="" className="d-block w-100 myImage" alt="/public/" />
              </div>
              <div className="carousel-item">
                <Image width={46} height={46} src="" className="d-block w-100 myImage" alt="/public/" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {'{'}/* {/* services  */} */{'}'}
      <h1 className="ser-title text-center mb-3">services</h1>
      <div className=" container ">
        <div className="row d-flex justify-content-center ">
          <div className="f-card col-lg-6 m-auto position-relative ">
            <Image width={46} height={46} className="doc-img myImage" src="/public/doctors.png" alt="" />
            <div className="img-sec position-absolute">
              <h2 style={{ color: 'var(--2ndColor)', fontFamily: 'pt sans' }}>
                our services
              </h2>
              <p style={{ font: 'size 14px', color: '#333' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, quod!
              </p>
              <button className="btn btn-danger">313</button>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6  m-auto my-sm-3  m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46} 
                  className="img-card img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6  m-auto my-sm-3  m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46} 
                  className="img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6  m-auto my-sm-3  m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46}
                  className="img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6  m-auto my-sm-3 m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46}
                  className="img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6 m-auto my-sm-3  m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46}
                  className="img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-6  m-auto my-sm-3 m-md-3"
            style={{ width: '16rem' }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <Image width={46} height={46}
                  className="img-card m-2 myImage"
                  src="/public/Vector.png"
                  alt=""
                />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container backGround pb-5 mt-5 ">
        <div className="row d-flex justify-content-center">
          <div className="col-1">
            <Image width={46} height={46}
              src="/public/Polygon 1.png"
              alt=""
              className="Polygon-img align-content-center myImage"
            />
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-6  position-relative">
            <Image width={46} height={46}
              src="/public/backLogo.png"
              alt=""
              className="backLogo myImage"
            />
            <h3 className="title-1 position-absolute  text-uppercase  ">
              Welcome to{'{'}' '{'}'}
            </h3>
            <h3 className="title-2 position-absolute  text-uppercase  ">
              our Hospital{'{'}' '{'}'}
            </h3>
            <p className="p-text position-absolute  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus,
              mauris sagittis et sem. Magna cursus orci id. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut lacus, mauris sagittis
              et sem. Magna cursus orci id. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut lacus, mauris sagittis et sem.
              Magna cursus orci id. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut lacus, mauris sagittis et sem. Magna cursus
              orci id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut lacus, mauris sagittis et sem. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{'{'}' '{'}'}
            </p>
          </div>
          <div className="hos-img-con col-lg-6 position-relative">
            <Image width={46} height={46}
              src="/public/hod.png"
              alt=""
              className="hos-img myImage "
            />
          </div>
        </div>
      </div>
      <h1 className="faq-dep-title mt-5">Our Departments</h1>
      <div className="row">
        <p className="des-dep col-lg-9">
          Lörem ipsum den val. Trejepp terade. Hexahet öpöd sologi. <br />
          Uhys terasång syk som roliga i mys. Preprenar ora dekav.
        </p>
        <div className="see-btn col-lg-2 m-md-5 btn btn-primary  ">see all</div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center m-md-auto m-sm-auto d-md-flex justify-content-center d-sm-flex justify-content-center   ">
          <div className="col-lg-3 my-md-4 my-sm-4 m-auto">
            <div className="card" style={{ width: '18rem' }}>
              <Image width={46} height={46}
                className="card-img-top myImage"
                src="/public/"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti facere quis, quidem suscipit quibusdam consequuntur?
                </p>
                <link href="#" className="btn btn-primary" />
                Go
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-md-4 my-sm-4 m-auto">
            <div className="card" style={{ width: '18rem' }}>
              <Image width={46} height={46}
                className="card-img-top myImage"
                src="/public/"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti facere quis, quidem suscipit quibusdam consequuntur?
                </p>
                <link href="#" className="btn btn-primary" />
                Go
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-md-4 my-sm-4 m-auto">
            <div className="card" style={{ width: '18rem' }}>
              <Image width={46} height={46}
                className="card-img-top myImage"
                src="/public/"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti facere quis, quidem suscipit quibusdam consequuntur?
                </p>
                <link href="#" className="btn btn-primary" />
                Go
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-md-4 my-sm-4 m-auto">
            <div className="card" style={{ width: '18rem' }}>
              <Image width={46} height={46}
                className="card-img-top myImage"
                src="/public/"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti facere quis, quidem suscipit quibusdam consequuntur?
                </p>
                <link href="#" className="btn btn-primary" />
                Go
              </div>
            </div>
          </div>
        </div>
      </div>
      {'{'}/* FAQ */{'}'}
      <h1 className="faq-dep-title mt-5" style={{ fontFamily: 'PT Serif' }}>
        Frequently Asked Questions
      </h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <p className="faq-q" data-toggle="collapse" data-target="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <p id="answer" className="faq-a collapse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <hr className="faq-line mb-3" />
            <p className="faq-q" data-toggle="collapse" data-target="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <p id="answer" className="faq-a collapse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <hr className="faq-line mb-3" />
            <p className="faq-q" data-toggle="collapse" data-target="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <p id="answer" className="faq-a collapse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <hr className="faq-line mb-3" />
            <p className="faq-q" data-toggle="collapse" data-target="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <p id="answer" className="faq-a collapse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <hr className="faq-line mb-3" />
            <p className="faq-q" data-toggle="collapse" data-target="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
            <p id="answer" className="faq-a collapse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              ut!
            </p>
          </div>
          <div className="col-lg-6 position-relative m-md5 ">
            <Image width={46} height={46}
              className="FAQ-doc myImage"
              src="/public/FAQ-doc.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
