import { MDXRemote } from "next-mdx-remote/rsc";

export default function Post({ content }) {
  return <MDXRemote source={content} />;
}