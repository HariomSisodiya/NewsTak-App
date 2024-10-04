import image from "../news-icon-13630.png";

export default function NewsCard({ title, description, src, url }) {
  return (
    <>
      <div
        className="card d-inline-block bg-dark text-light mx-4 my-3 px-2 py-2 mb-3"
        style={{ maxWidth: "350px" }}
      >
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "340px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "News description is not available"}
          </p>
          <a href={url} className="btn btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
