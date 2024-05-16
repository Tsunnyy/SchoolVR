import { FormFeedback } from "../components/FormFeedback";

export const ModalFeedback = ({ modalActive, setModalActive, blog }) => {
  return (
    <div
      className="modal modal-feedback"
      style={{
        opacity: modalActive ? 1 : 0,
        pointerEvents: modalActive ? "all" : "none",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transition: "opacity 0.3s",
      }}
      onClick={() => setModalActive(false)}
    >
      <div className="form-section" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <div className="content">
            <h4 className="title">{blog.title}</h4>
            <div className="blog-meta">
              <span className="meta-date">
                {new Date(blog.updatedAt).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="meta-tag tag">Virtual Reality</span>
            </div>
          </div>
          <div className="visual">
            <img src={blog.banner} alt="" />
          </div>
          <button
            className="btn-close"
            onClick={() => {
              setModalActive(false);
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11L1 1"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="body">
          {/* <div className="head-wrap ">
            <div className="article-head">
              <h4 className="title">{blog.title}</h4>
              <div className="blog-meta">
                <span className="meta-date">
                  {new Date(blog.updatedAt).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="meta-tag tag">Virtual Reality</span>
              </div>
            </div>
            <div className="article-thumbnail">
              <img src={blog.banner} alt={blog.title} />
            </div>
          </div> */}
          <FormFeedback title={blog.title} />
        </div>
      </div>
    </div>
  );
};
