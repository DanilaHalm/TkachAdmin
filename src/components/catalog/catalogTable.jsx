import { CatalogSectionContext, CatalogSectionAlbumsContext } from "@/servises/context";
import { useContext } from "react";
import CatalogSectionTitle from "./catalogSectionTitle";
import CatalogSectionLogo from "./catalogSectionLogo";
import CatalogSectionDescription from "./catalogSectionDescription";
import CatalogSectionAlbums from "./catalogSectionAlbums";
import CatalogSectionDelete from "./catalogSectionDelete";

const CatalogTable = () => {
  const [sections, setSections] = useContext(CatalogSectionContext);
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);

  sections?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });

  return (
    <div className="max-w-s mt-10 mx-auto">
      {sections?.map((section) => {
        const [id, title, logo, description, albumIds] = [
          section.id,
          section.attributes.title,
          section.attributes.logo,
          section.attributes.description,
          section.attributes.albums,
        ];
        const sectionAlbums = albums.filter((album) => albumIds?.includes(album.id));

        return (
          <div key={id} className="p-2 mb-16 items-center border rounded-md border-current">
            <CatalogSectionTitle id={id} title={title} />
            <CatalogSectionLogo id={id} logo={logo} />
            <CatalogSectionDescription id={id} description={description} />
            <CatalogSectionAlbums id={id} albumIds={albumIds} />
            <CatalogSectionDelete id={id} logo={logo} sectionAlbums={sectionAlbums} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogTable;
