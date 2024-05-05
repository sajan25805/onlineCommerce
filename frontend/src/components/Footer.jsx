import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from "react-icons/fa";
  
  const SocialIcon = ({ icon: Icon }) => (
    <Icon className="social-icon hover:text-[#00df9a]" size={30} />
  );
  
  const Footer = () => {
    const items = [
      { type: "icon", icon: FaFacebookSquare },
      { type: "icon", icon: FaInstagram },
      { type: "icon", icon: FaTwitterSquare },
      { type: "icon", icon: FaGithubSquare },
      { type: "icon", icon: FaDribbbleSquare },
      {
        type: "section",
        title: "Solutions",
        items: ["Analytics", "Marketing", "Commerce", "Insights"],
      },
      {
        type: "section",
        title: "Support",
        items: ["Pricing", "Documentation", "Guides", "API Status"],
      },
      {
        type: "section",
        title: "Company",
        items: ["About", "Blog", "Jobs", "Press", "Careers"],
      },
      { type: "section", title: "Legal", items: ["Claim", "Policy", "Terms"] },
    ];
  
    return (
      <div className="bg-white mx-auto py-16 px-14 lg:px-20 grid lg:grid-cols-3 gap-8 text-black">
        <div>
          <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]">
            Vintage Clothing.
          </h1>
          <p className="py-4">
            Step into the Past, Shop the Present: Vintage Clothing
            Marketplace—where fashion history meets modern style.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            {items.map((item, index) =>
              item.type === "icon" ? (
                <SocialIcon key={index} icon={item.icon} />
              ) : null
            )}
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          {items.map((item, index) =>
            item.type === "section" ? (
              <div key={index}>
                <h6 className="font-medium text-black text-xl">{item.title}</h6>
                <ul>
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 text-sm">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  };
  
  export default Footer;
  