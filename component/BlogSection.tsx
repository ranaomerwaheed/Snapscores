import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section id="blog-section" style={{ padding: '60px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', marginBottom: '40px' }}>
          Latest Insights & Guides
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          <article style={{ border: '1px solid #eee', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '22px', color: '#000', marginBottom: '15px' }}>
              How to Safely Increase Your Snap Score in 2026
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '16px' }}>
              Many users wonder if boosting their score is safe. The key lies in encryption and natural growth patterns...
            </p>
            <a href="/blog/safety-guide" style={{ color: '#fffc00', fontWeight: 'bold', textDecoration: 'none', backgroundColor: '#000', padding: '8px 15px', borderRadius: '5px', display: 'inline-block', marginTop: '10px' }}>
              Read More
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
