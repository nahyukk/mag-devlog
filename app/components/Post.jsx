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
	code: (props) => (
    <code
      style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: "0.95em",
        backgroundColor: "#F4F1E6",
        color: "#4892D7",
        padding: "2px 5px",
        borderRadius: "4px",
				verticalAlign: "middle",
				lineHeight: "1",
      }}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      style={{
        
      }}
      {...props}
    />
  ),
};

export default function Post({ content }) {
  return <MDXRemote source={content} components={components}/>;
}