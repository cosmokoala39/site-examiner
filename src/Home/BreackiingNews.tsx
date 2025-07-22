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
  const { articles } = data;
  const main = articles[0];
  const others = articles.slice(1, 5);

  return (
    <div className="div">
      <div className="row">
        {/* ------------Vertical main article------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold  mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{main.title}</p>

          <div className="mb-2">
            <img
              src={main.image}
              alt={main.title}
              className="img-fluid w-100 rounded"
              style={{ fontFamily: 'Merriweather, serif' }}
            />
          </div>

          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {main.shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small"style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold"style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small"style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
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
      </div>

      <div className="divider"></div>

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6 border-end p-3" key={index}>
           <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>

            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
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

      {/* ------------Wide article (others[0] again for demo) ------------ */}
      <div className="row p-5">
        <div className="col-lg-9">
          <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>
{others[0]?.title}</p>
          <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>Jel Maco</p>
        </div>
        <div className="col-lg-3">
          <img
            src={others[0].image}
            alt={others[0]?.title}
            className="img-fluid w-100 rounded"
            style={{ fontFamily: 'Merriweather, serif' }}
          />
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}

export default BreackingNEws;
