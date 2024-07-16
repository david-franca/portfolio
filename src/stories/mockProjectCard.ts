import { SanityDocument } from "next-sanity";

export const mockProject: SanityDocument = {
  slug: {
    current: "calculadora",
    _type: "slug",
  },
  liveUrl: "https://calculadora-david-franca.vercel.app/",
  favorite: true,
  title: "Calculadora",
  description: [
    {
      markDefs: [],
      children: [
        {
          marks: [],
          text: "Este projeto é uma calculadora básica desenvolvida com Next.js, Chakra UI, TypeScript e React. A calculadora realiza operações fundamentais como adição, subtração, multiplicação e divisão.",
          _key: "ce59658985240",
          _type: "span",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "954e7b421d80",
    },
    {
      style: "normal",
      _key: "42694b99ab5a",
      markDefs: [],
      children: [
        {
          text: "A interface é limpa e responsiva, utilizando componentes do Chakra UI para uma experiência de usuário intuitiva em qualquer dispositivo.",
          _key: "bf8112fb20300",
          _type: "span",
          marks: [],
        },
      ],
      _type: "block",
    },
  ],
  image: {
    crop: {
      right: 0.18181818181818177,
      top: 0,
      left: 0.18181818181818174,
      bottom: 0,
      _type: "sanity.imageCrop",
    },
    hotspot: {
      _type: "sanity.imageHotspot",
      width: 0.6346153846153847,
      x: 0.49912587412587406,
      y: 0.5,
      height: 1,
    },
    _type: "image",
    alt: "Calculadora",
    asset: {
      _ref: "image-c0fbd4becbb19c4c087a1cf263c5535af7056b42-1358x575-png",
      _type: "reference",
    },
  },
  githubUrl: "https://github.com/david-franca/calculadora",
  publishedAt: "2024-01-08T20:36:00.000Z",
  _id: "2ba9a7fb-7d45-405d-9c82-92d169915523",
  technologies: [
    {
      tech: "react",
      slug: {
        current: "react",
        _type: "slug",
      },
      _id: "f8f482da-3b9a-4412-8abd-b6656fb9527a",
    },
    {
      tech: "typescript",
      slug: {
        current: "typescript",
        _type: "slug",
      },
      _id: "5d084961-a829-46d1-9f4d-a1e63c894c2e",
    },
    {
      tech: "next.js",
      slug: {
        current: "next-js",
        _type: "slug",
      },
      _id: "673c1445-c489-4115-abc5-cf1e90560296",
    },
    {
      tech: "chakra",
      slug: {
        current: "chakra",
        _type: "slug",
      },
      _id: "1dfc8b93-2378-4e79-ad8d-8ebaef36d795",
    },
  ],
  _createdAt: "2022-11-30T20:36:00.000Z",
  _rev: "HbQzLp5Oz5vq",
  _type: "project",
  _updatedAt: "2024-01-08T20:36:00.000Z",
  _originalId: "2ba9a7fb-7d45-405d-9c82-92d169915523",
};
