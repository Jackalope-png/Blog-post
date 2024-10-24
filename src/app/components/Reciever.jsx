export default function Reciever({ title, description, publishedDate, coverImage, url, onClick }) {
    return (
      <div 
      className="receiver-card" 
      style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', width: "300px" }}
      onClick={onClick}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Published on:</strong> {publishedDate}</p>
        {coverImage && <img src={coverImage} alt={title} style={{ maxWidth: "100%", height: "auto" }}  />}
        <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    );
  }