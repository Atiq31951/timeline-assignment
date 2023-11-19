import React, { useEffect, useState } from "react";

import ContentTable from "../components/ContentTable";
import { getContents } from "../service/contents";
import ThumbnailView from "../components/ThumbnailView";

function HomePage() {
  const [isLoadingTableData, setIsLoadingTabledata] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [thumbnailsData, setThumbnailsData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadAllContents();
  }, []);

  const loadAllContents = async () => {
    setIsLoadingTabledata(true);
    const { data, total_contents } = await getContents({ page: 1 });
    setTableData(data);
    setThumbnailsData(data);
    setTotal(total_contents);
    setIsLoadingTabledata(false);
  };

  return (
    <div className="home">
      <ContentTable isLoading={isLoadingTableData} tableData={tableData} />

      <ThumbnailView total={total} thumbnailsData={thumbnailsData} />
    </div>
  );
}

export default HomePage;
