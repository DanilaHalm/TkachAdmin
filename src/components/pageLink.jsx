import Link from "next/link";

const PageLink = ({ url, content }) => {
  return (
    <Link className="mx-4 py-2 px-4 cursor-pointer bg-light text-dark" href={url}>
      {content}
    </Link>
  );
};

export default PageLink;
