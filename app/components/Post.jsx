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
        paddingLeft: "20px",
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
        margin: "0.7rem 0",
      }}
      {...props}
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
