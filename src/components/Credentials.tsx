import { credentials } from '../data/credentials';

function Credentials() {
  return (
    <section className="section section-alt" id="credentials">
      <div className="container">
        <div className="section-head" id="credentials-head">
          <div className="eyebrow"><span>06</span><i /> CERTIFICATIONS &amp; RECOGNITION</div>
          <h2>Credentials that keep me curious.</h2>
        </div>
        <div className="credential-layout">
          <div className="credentials">
            {credentials.map((credential) => (
              <div className="credential" key={credential.title}>
                <img
                  className="credential-badge"
                  src={`${import.meta.env.BASE_URL}assets/credentials/${credential.image}`}
                  alt={`${credential.title} badge`}
                  loading="lazy"
                />
                <div><strong>{credential.title}</strong><small>{credential.meta}</small></div>
                <b aria-hidden="true">↗</b>
              </div>
            ))}
          </div>
          <aside className="recognition">
            <span className="eyebrow">RECOGNITION / 01</span>
            <div className="recognition-icon">✳</div>
            <small>NATIONAL HACKATHON WINNER</small>
            <h3>Xcelerate25<br />Oracle APEX Hackathon</h3>
            <p>Recognized for building Ascend APEX, an AI-assisted academic platform.</p>
            <div className="prize">₹100,000 <small>PRIZE</small></div>
            <hr />
            <small>BEST PAPER AWARD</small>
            <h4>ICSSSD 2026</h4>
            <p>Cognitrace · Lead Author</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
export default Credentials;
