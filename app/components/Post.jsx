import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
	p: (props) => (
    <p
      style={{
        fontSize: "1rem",
        lineHeight: "1.6",
        marginBottom: "1rem",
      }}
      {...props}
    />
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
      }}
      {...props}
    />
  ),
};

export default function Post({ content }) {
  return <MDXRemote source={content} components={components}/>;
}
