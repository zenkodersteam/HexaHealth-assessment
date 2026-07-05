export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-inner">
        <div>
          <h2 className="brand">Pulse Smartwatch</h2>
          <p>Fitness tracking that keeps up with you.</p>
        </div>
        <address>
          <p>Email: <a href="mailto:support@pulsewatch.com">support@pulsewatch.com</a></p>
          <p>Phone: <a href="tel:+18005551234">+1 (800) 555-1234</a></p>
          <p>123 Market Street, San Francisco, CA</p>
        </address>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Pulse Smartwatch. All rights reserved.</p>
    </footer>
  );
}
