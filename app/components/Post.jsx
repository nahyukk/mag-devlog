import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "@/styles/highlight.js/atelier-estuary.min.css";

const components = {
	a: (props) => (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ),
  ul: (props) => (
    <ul
      style={{
        paddingLeft: "30px",
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      style={{
        paddingLeft: "20px",
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
      {...props}
    />
  ),
  li: (props) => (
    <li
      style={{
        lineHeight: "1.5",
        margin: "0.5rem 0",
      }}
      {...props}
    />
  ),
  ShortLine: () => (
    <hr
      style={{
        width: "10%",
        borderTop: "2px solid var(--primary-color)",
        opacity: 1,
        alignSelf: "flex-start",
        margin: "20px 0",
      }}
    />
  ),
  ThinShortLine: () => (
    <hr
      style={{
        width: "7%",
        borderTop: "1.5px solid var(--secondary-color)",
        opacity: 0.4,
        margin: "15px 0",
      }}
    />
  ),
  ThickLine: () => (
    <hr
      style={{
        width: "100%",
        borderTop: "2px solid var(--main-text-color)",
        opacity: 0.7,
        margin: "30px 0",
        marginTop: "40px",
      }}
    />
  ),
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

export default function Post({ content }) {
  return (
    <MDXRemote source={content} components={components} options={options} />
  );
}
