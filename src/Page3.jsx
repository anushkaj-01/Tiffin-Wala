import "./Page3.css";
export default function Page3() {
  return (
    <>
      <section id="tiffins-page">
            <h1>Tiffins</h1>
        <div className="row">
          <div className="col-lg-4 tiffins">
            <img className="tiffins-img" src="/images/img1.jpg" alt="" />
            <h4>Bangali tiffin</h4>
          </div>
          <div className="col-lg-4 tiffins">
            <img className="tiffins-img" src="/images/img1.jpg" alt="" />
            <h4>Bangali tiffin</h4>
          </div>
          <div className="col-lg-4  tiffins">
            <img className="tiffins-img" src="/images/img1.jpg" alt="" />
            <h4>Bangali tiffin</h4>
          </div>
        </div>
        <div className=" tiffins-btn">
          <button type="button" class="btn btn-outline-dark  ">See More</button>
          </div>
      </section>
    </>
  )
}
