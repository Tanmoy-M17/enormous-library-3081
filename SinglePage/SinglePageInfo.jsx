import styles from "./SinglePageInfo.module.css";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import avatar from "../../Images/avatar.png";

function SinglePageInfo({
  image,
  brand,
  year,
  model,
  distance,
  price,
  address,
  postDate,
  description,
  sellerName,
  memeberSince,
  fuel,
  totalOwners,
}) {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.subtwoContainer}>
        <div style={{ border: "1px solid black" }} className={styles.customDiv}>
          <img src={image} alt="content" />
        </div>
        <div style={{ textAlign: "left", border: "1px solid black" }}>
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "black",
              marginBottom: "2%",
            }}
          >
            Details
          </div>
          <div className={styles.spanstyle}>
            <span style={{ color: "black", marginBottom: "2%" }}>
              Brand
            </span>
            <span style={{ color: "black" }}>{brand}</span>
            <span style={{ color: "black" }}>Model</span>
            <span style={{ color: "black" }}>{model}</span>
            <span style={{ color: "black" }}>Year</span>
            <span style={{ color: "black" }}>{year}</span>
            <span style={{ color: "black", marginBottom: "2%" }}>
              KM driven
            </span>
            <span style={{ color: "black" }}>{distance} km</span>
            <span style={{ color: "black" }}>No. of Owners</span>
            <span style={{ color: "black" }}>{totalOwners}</span>
          </div>
          <hr />
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "black",
              marginBottom: "2%",
              marginTop: "2%",
            }}
          >
            Description
          </div>
          <div style={{ color: "black" }}>{description}</div>
        </div>
      </div>
      <div className={styles.subtwoContainer}>
        <div style={{ border: "1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: "2%",
            }}
          >
            <div
              style={{ flexBasis: "50%", textAlign: "left", color: "black" }}
            >
              {" "}
              <h1> ₹ {price}</h1>{" "}
            </div>
            <div style={{ flexGrow: "1" }}></div>
            <div className={styles.hoverDiv} style={{ flexBasis: "8%" }}>
              <ShareAltOutlined />
            </div>
            <div className={styles.hoverDiv} style={{ flexBasis: "8%" }}>
              <HeartOutlined />
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              marginLeft: "2%",
              color: "black",
            }}
          >
            {year} - {distance} km
          </div>
          <div style={{ marginLeft: "2%", color: "black" }}>
            {" "}
            <h3>
              {brand} {model}, {year} {fuel}
            </h3>{" "}
          </div>

          <div className={styles.styleDivv}>
            <div
              style={{
                color: "black",
                fontSize: "12px",
                marginLeft: "2%",
              }}
            >
              {address}
            </div>
            <div></div>
            <div style={{ color: "black", fontSize: "12px" }}>
              {postDate}
            </div>
          </div>
        </div>
        <div style={{ border: "1px solid black" }} className={styles.boldDiv}>
          <p style={{ marginLeft: "2%", color: "black" }}>
            Seller Description
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={avatar}
                alt=""
                style={{ height: "70px", width: "70px" }}
              />
            </div>
            <h4
              style={{
                textAlign: "left",
                marginLeft: "3%",
                marginRight: "3%",
                color: "black",
              }}
            >
              {sellerName}
            </h4>
            <h6 style={{ color: "black" }}>
              Member since {memeberSince}
            </h6>
            <div></div>
          </div>
          <button style={{ cursor: "pointer" }}>Chat with seller</button>
          <button style={{ cursor: "pointer" }}>Make an offer</button>

         
        </div>
      </div>
    </div>
  );
}

export default SinglePageInfo;
