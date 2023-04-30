import { logo } from '~/assets/imgs';
import { footerLinks, socialsMedia } from '~/constants';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer>
      <section className="sm:flex gap-8 mb-5">
        <div className="flex-[40%]">
          <img src={logo} alt="logo of hoobank" className="mb-8" />
          <p className="paragraph pb-4">A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="flex-[60%] flex flex-wrap gap-1  ss:justify-between">
          {footerLinks.map((footerLink) => (
            <FooterLinks data={footerLink} key={footerLink.id} />
          ))}
        </div>
      </section>
      <hr />
      <section className="paragraph flex flex-col-reverse ss:flex-row ss:justify-between py-4">
        <p className="text-center">Copyright © {new Date().getFullYear()} HooBank. All Rights Reserved.</p>
        <ul className="flex gap-4 justify-center pb-4">
          {socialsMedia.map(({ id, icon, link }) => (
            <li key={id}>
              <a href={link}>
                <img src={icon} alt="icon of media social" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
