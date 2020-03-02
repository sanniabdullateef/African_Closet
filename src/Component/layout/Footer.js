import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* colomn 1 */}

                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Lagos State</li>
                            <li>Nigeria</li>
                            <li>+2348100547571</li>
                        </ul>
                    </div>

                    {/* colomn 2 */}

                    <div className="col-md-3 col-sm-6">
                        <h4>lorem adress</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                        </ul>
                    </div>

                    {/* colomn 3 */}

                    <div className="col-md-3 col-sm-6">
                        <h4>lorem adress</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                        </ul>
                    </div>

                    {/* colomn 4 */}

                    <div className="col-md-3 col-sm-6">
                        <h4>lorem adress</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                            <li><a href="/">lorem, ipisum</a></li>
                        </ul>
                    </div>
                </div>
                {/* footer bottom */}
                 <div className= "footer-bottom">
                     <p className="text-xs-center">
                         &copy;{new Date().getFullYear()} African Closet App - All Right Reserved
                     </p>
                 </div>
                 </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer `
  .footer-middle {
      background: var(--mainDark);
      color: var(--mainWhite);
      padding-top: 3rem;
  }

  .footer-bottom {
      padding-top: 3rem;
      padding-bottom: 2rem;
  }

  ul li a {
      color: var(--mainGrey);
  }
  ul li a:hover{
      color: var(--mainLightGrey);
  }
`;