const BlogFooter = () => {
  const footerSections = [
    {
      title: "About Us",
      links: ["Our Mission", "Our Charity", "WE Charity Endorsement"],
    },
    {
      title: "Sponsorship",
      links: ["How to Sponsor", "Previous Sponsors", "Donate Directly", "Sponsorship Package"],
    },
    {
      title: "Events",
      links: [
        "2017 - 2018",
        "2016 - 2017",
        "2015 - 2016",
        "2014 - 2015",
        "2013 - 2014",
        "2012 - 2013",
        "2011 - 2012",
        "2010 - 2011",
      ],
    },
    {
      title: "Team",
      links: [
        "Board of Directors",
        "Artistic",
        "Events",
        "Finance",
        "Marketing",
        "Models",
        "Public Relations",
        "Sponsorship",
        "Stage",
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-foreground py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-foreground font-bold text-xs uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blog-text-light hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <img
            src="/FC Footer Logo.png"
            alt="Fashion for Change"
            className="h-24 w-auto"
          />
          <p className="text-blog-text-light text-sm">
            ©Fashion for Change 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
