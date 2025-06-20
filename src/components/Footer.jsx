import { FaFacebookSquare ,FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";


function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2> Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#"><FaFacebookSquare/></a>
              <a href="#"><FaInstagramSquare/></a>
              <a href="#"><FaTwitterSquare/> </a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2> 
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrir</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>

          </div>
          <div className="col">
              <h2>Features</h2> 
            <ul>
              <li><a href="#">Business Markting</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
          <div className="col">
              <h2>Resources</h2> 
            <ul>
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p>&copy; 2025 All rights reserved made by  <strong className="text-primary">Ibrhim Hany</strong></p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
