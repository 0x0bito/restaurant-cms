type socialLink = {
  platform: string;
  url: string;
};

export type navbarType = {
  _id: string;
  logo: { url: string; alt: string | undefined | null };
  socialLinks: socialLink[];
};

export type categoryType = {
  _id: string;
  title: string;
  slug: string;
  image: string;
};

export type Recipecategory = {
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
};

export type recipeType = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  categories: Recipecategory[];
  image: string;
  alt: string;
  price: number;
};

export type heroType = {
  _id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
};

type imageArray = {
  url: string;
  alt: string;
};

export type socialMediaType = {
  _id: string;
  title: string;
  subtitle: string;
  images: imageArray[];
};

export type clientReviewsType = {
  _id: string;
  title: string;
  fullName: string;
  rating: number;
  content: string;
  createdAt: string;
};

export type footerType = {
  _id: string;
  socialLinks: socialLink[];
};

export type contactType = {
  _id: string;
  location: {
    name: string;
    mapUrl: string;
  };
  phone: string;
  mail: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
  socialMedia: {
    platform: string;
    link: string;
    icon: string;
  }[];
};
