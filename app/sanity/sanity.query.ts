import { groq } from "next-sanity";
import { sanityFetch } from "./sanity.client";

export async function getNavbar() {
  const query = groq`
    *[_type == "navbar"][0] {
      _id,
      "logo": {
        "url": logo.asset->url,
        alt
      },
      socialLinks[]{
        platform,
        url
      }
    }
  `;

  return sanityFetch({ query: query, tags: ["navbar"] });
}

export async function getCategories() {
  const query = groq`*[_type == "category"]{
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url,
  }`;

  return sanityFetch({ query: query, tags: ["category"] });
}

export async function getFeaturedRecipes(n: number) {
  const query = groq`*[_type == "recipe" && featured == true][0...$n]{
    _id,
    title,
    "slug": slug.current,
    description,
    categories[]->{
      title,
      slug
    },
    "image": image.asset->url,
    "alt": image.alt,
    price
  }`;

  return sanityFetch({ query: query, params: { n }, tags: ["recipe"] });
}

export async function getRecipesByCategory(slug: string, page: number = 1, limit: number = 6) {
  if (page < 1) {
    return null;
  }
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const query = groq`*[_type == "recipe" && references(*[_type == "category" && slug.current == $slug]._id)][$start..$end]{
    _id,
    title,
    description,
    price,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
    categories[]->{
      title,
      slug
    }
  }`;

  return sanityFetch({ query: query, params: { slug, start, end }, tags: ["recipe", "category"] });
}

export async function getTotalRecipesByCategory(slug: string) {
  const query = groq`count(*[_type == "recipe" && references(*[_type == "category" && slug.current == $slug]._id)])`;

  return sanityFetch({ query: query, params: { slug }, tags: ["recipe", "category"] });
}

export async function getRecipeBySlug(slug: string) {
  const query = groq`*[_type == "recipe" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    categories[]->{
      title,
      slug,
      _id
    },
    "image": image.asset->url,
    "alt": image.alt,
    price
  }`;

  return sanityFetch({ query: query, params: { slug }, tags: [`recipe:${slug}`] });
}

export async function getHeroSection() {
  const query = groq`
  *[_type == "hero"][0] {
    _id,
    title,
    description,
    buttonText,
    buttonLink,
    "image": image.asset->url
  }`;

  return sanityFetch({ query: query, tags: ["hero"] });
}

export async function getSocialMediaPosts() {
  const query = groq`
    *[_type == "social"][0]{
      _id,
      title,
      subtitle,
      images[]{
        "url": asset->url,
        alt
      }
    }
  `;

  return sanityFetch({ query: query, tags: ["social"] });
}

export async function getClientReviews() {
  const query = groq`
    *[_type == "review"]{
      _id,
      fullName,
      rating,
      content,
      createdAt,
    }
  `;

  return sanityFetch({ query: query, tags: ["review"] });
}

export async function getFooterSocialLinks() {
  const query = groq`*[_type == "footer"][0]`;

  return sanityFetch({ query: query, tags: ["footer"] });
}

export async function getContactInfo() {
  const query = groq`
    *[_type == "contact"][0]{
      mapUrl,
      phone,
      mail,
      location,
      openingHours,
      socialMedia,
      link
    }
  `;

  return sanityFetch({ query: query, tags: ["contact"] });
}
