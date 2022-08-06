import { TAGS } from "src/components/tag/tag";

export type BlogPostMeta = {
    img: string;
    imgAltText: string;
    title: string;
    date: string;
    length: string;
    url: string;
    description: string;
    tags: (keyof typeof TAGS)[];
};
