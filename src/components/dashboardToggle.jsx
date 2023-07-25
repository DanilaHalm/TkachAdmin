import Link from "next/link";

const DashboardToggle = () => {
  return (
    <div className="flex justify-center">
      <Link className="mx-4 py-2 px-4 cursor-pointer bg-light text-dark" href={"/gallery"}>
        Gallery
      </Link>

      <Link className="mx-4 py-2 px-4 cursor-pointer bg-light text-dark" href={"/catalog"}>
        Catalog
      </Link>
    </div>
  );
};

export default DashboardToggle;
