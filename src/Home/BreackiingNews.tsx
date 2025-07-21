import React from "react";

export type Article = {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
};

export type CategoryData = {
  category: string;
  articles: Article[];
};

function BreackingNEws({ data }: { data: CategoryData }) {
  if (!data || !data.articles || data.articles.length === 0) return null;

  const { articles } = data;
  const main = articles[0];
  const others = articles.slice(1, 7);

  return (
    <div className="div">
      <div className="row">
        {/* ------------Vertical main article------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2">{main.title}</p>
          <div className="mb-2">
            <img
              src={main.image}
              alt={main.title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted small mb-0">
            {main.shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold">{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100 rounded"
                    style={{ height: "80px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6 border-end p-3" key={index}>
            <p className="fw-bold">{item.title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{item.shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 min ago</p>
              </div>
              <div className="col-lg-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100 rounded"
                  style={{  objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      {/* ------------Wide article (others[4]) ------------ */}
      {others[4] && (
        <div className="row p-5">
          <div className="col-lg-9">
            <p className="fw-bold text-muted">{others[4].title}</p>
            <p className="text-muted">Jel Maco</p>
          </div>
          <div className="col-lg-3">
            <img
              src={others[4].image}
              alt={others[4].title}
              className="img-fluid w-100 rounded"
              style={{ height: "140px", objectFit: "cover" }}
            />
          </div>
        </div>
      )}

      <div className="divider"></div>
    </div>
  );
}

export default BreackingNEws;
