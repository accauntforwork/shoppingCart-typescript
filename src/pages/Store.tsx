import { Col, Row, Pagination } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export function Store() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(storeItems.length / itemsPerPage)
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return storeItems.slice(startIndex, endIndex);
  };

  return (
    <>
      <h1>Store</h1>
      {isLoading ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10rem" }}
        >
          <Loading />
        </div>
      ) : (
        <>
          <Row md={2} xs={1} lg={3} className="g-3">
            {getVisibleItems().map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
          <Pagination className="d-flex justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages).keys()].map((pageIndex) => (
              <Pagination.Item
                key={pageIndex + 1}
                active={currentPage === pageIndex + 1}
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                {pageIndex + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </>
      )}
    </>
  );
}
