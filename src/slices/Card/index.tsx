import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>;

    const client = createClient();
    const page = await client.getByUID("page", "blog");

    const posts = await client.getAllByType("blog_post", {
        orderings: [
        { field: "my.blog_post.publication_date", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
        ],
    });

/**
 * Component for "Card" Slices.
 */
const Card = ({ slice }: CardProps): JSX.Element => {
 
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >        
      {posts.map((post, index) => (
      <div key={index}>
        <div>
        <PrismicNextImage field={post.data.featuredImage} />
        </div>
        <div>
          <h2>
            {post.data.featuredImage}
          </h2>
          <p>
          {slice.primary.description}
          </p>
          <PrismicNextLink field={slice.primary.button_link}>`/blog/${post.data.uid}`</PrismicNextLink>
        </div>
      </div>
      ))}
    </section>
  );
};

export default Card;
