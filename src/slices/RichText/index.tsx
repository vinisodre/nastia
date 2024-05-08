import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "./index.module.css";

const linkResolver = (doc) => "/" + doc.uid;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
  <h1 className="text-5xl font-bold leading-10">
  {children}
  </h1>),
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold leading-10">
    {children}
    </h2>),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-bold leading-10">
    {children}
    </h3>),
  
  paragraph: ({ children }) => (
  <p className="text-2x1 text-center font-normal leading-10 font-body
  ☐ text-slate-600 mb-4 md: mb-8 max-w-md">
  {children}
  </p>)

  
  }

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="bg-pink-200"
  >
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
};

export default RichText;
