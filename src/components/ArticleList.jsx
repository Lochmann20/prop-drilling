import Article from "./Article";

function ArticleList({articles}) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
      {articles.map((article) => { 
        return <Article header={article.header} content={article.content} />;
      })} 
      </div>
    </div>
  );
}

export default ArticleList;


 
 
 