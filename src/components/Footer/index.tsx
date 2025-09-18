import React from 'react';
import Container from '../Container';


function Footer() {
  const { companyName = 'Your Company' } = window.templateConfig;

  return (
    <footer className="py-[60px]">
      <Container>
        <div className="flex justify-center font-semibold text-sm leading-[19px] text-[#373f41] md:flex-col md:items-center">
          <div>(c) {companyName}, All Right Reserve</div>
          {/* <div>
            <ul className="list-none m-0 p-0 md:mt-5">
              <li className="inline-block ml-14 md:mx-[15px]">Privacy Policy</li>
              <li className="inline-block ml-14 md:mx-[15px]">Term of Service</li>
              <li className="inline-block ml-14 md:mx-[15px]">Legal</li>
            </ul>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;