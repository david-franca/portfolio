import { groq } from "next-sanity";

export const TECHS_QUERY = groq`*[_type == "techs"]`;

export const TECH_QUERY = groq`*[_type == "techs" && slug.current == $slug][0]`;

export const PROJECTS_QUERY = groq`*[_type == "project"]{title, slug, description, image, githubUrl, liveUrl, favorite, publishedAt, _id, "technologies": technologies[]->{
      tech,
      slug,
      _id
    }}`;

export const FAVORITE_PROJECTS_QUERY = groq`*[_type == "project" && favorite == true][0...3]{title, slug, description, image, githubUrl, liveUrl, favorite, publishedAt, _id, "technologies": technologies[]->{
  tech,
  slug,
  _id
}}`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{title, slug, description, image, githubUrl, liveUrl, favorite, publishedAt, _id, "technologies": technologies[]->{
  tech,
  slug,
  _id
}}`;
