import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { purple } from "./ProductData";

const ProductDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const obj = purple[id];
  console.log(obj);
  console.log(purple);

  return (
    <div>
      <div className="detailpage">
        <h1>{obj.name}</h1>
        <div className="albumdetail">
          <img src={`${obj.img}`} alt="" />
          <div className="albumdetail1">
            <p>
              Monotonectally impact fully tested manufactured products through
              technically sound.
            </p>
            <div className="row ">
              <h6 className="col-3">Price</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">${obj.price}</h6>
            </div>
            <div className="row ">
              <h6 className="col-3">Music</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.music}</h6>
            </div>
            <div className="row ">
              <h6 className="col-3">Lyrics</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.lyrics}</h6>
            </div>
            <div className="row ">
              <h6 className="col-3">Guiders</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.guiders}</h6>
            </div>
            <div className="row ">
              <h6 className="col-3">Bass</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.bass}</h6>
            </div>{" "}
            <div className="row ">
              <h6 className="col-3">Drums</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.drumbs}</h6>
            </div>
            <div className="row ">
              <h6 className="col-3">Vocals</h6>
              <h6 className="col-2">:</h6>
              <h6 className="col-7">{obj.Vocals}</h6>
            </div>
          </div>
        </div>
        <div className="smallImageBox">
          <img className="smallImage" src={`${obj.img}`} alt="" />
          <img className="smallImage" src={`${obj.img}`} alt="" />
          <img className="smallImage" src={`${obj.img}`} alt="" />
          <img className="smallImage" src={`${obj.img}`} alt="" />
          <img className="smallImage" src={`${obj.img}`} alt="" />
        </div>
        <div className="bg-light text-dark p-2 mt-3 mb-3 rounded">
          <i
            class="ri-arrow-left-circle-fill fs-3  "
            onClick={() => navigate("/product")}
          >
            <span className="ms-2">Back To Product</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
