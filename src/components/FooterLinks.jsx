import PropTypes from 'prop-types';

const FooterLinks = ({ data }) => {
  const { title, links } = data;
  return (
    <div>
      <h5 className="text-white text-lg pb-4 font-medium">{title}</h5>
      <ul className="paragraph">
        {links.map(({ link, name }) => (
          <li key={name}>
            <a href={link} className="hover:text-white">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterLinks.propTypes = {
  data: PropTypes.object,
};

export default FooterLinks;
