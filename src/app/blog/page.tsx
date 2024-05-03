import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

// export async function generateStaticParams() {
//     const client = createClient();
//     const pages = await client.getAllByType("blog_post");
  
//     return pages.map((page) => {
//       return { uid: page.uid };
//     });
//   }


export default async function Page() {
    // The client queries content from the Prismic API
    const client = createClient();
    const home = await client.getByUID("page", "home");

    const posts = await client.getAllByType("blog_post", {
        orderings: [
        { field: "my.blog_post.publication_date", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
        ],
    });
  
    
    return (
        <>
        {posts.map((post, index) => (
            <div key={index}>
                <div className=" w-100 h-100">
                    <PrismicNextImage field={post.data.featuredImage}
                    width={200} height={200} alt="test"
                    />
                </div>
                <p>
                {post.data.title}
                </p>
                <p>{post.data.uid}</p>
            </div>
                    
        ))}
        <h1>Test</h1>
        
        <SliceZone slices={home.data.slices} components={components} />;
        </>

    )
  }