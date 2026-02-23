import groq from 'groq';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "coverImage": coverImage.asset->url,
  "author": author->name,
  "categories": categories[]->title
}`;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  publishedAt,
  body,
  seo,
  "coverImage": coverImage.asset->url,
  "author": author->{name, bio, "image": image.asset->url},
  "categories": categories[]->{title, "slug": slug.current}
}`;
