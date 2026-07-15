import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "Detalhes Secintex Macau 2026."
            : "Detalhes manutenção."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Fechar detalhes" : "Exibir detalhes"}
        </button>

        <button className="delete" onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;