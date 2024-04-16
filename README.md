Pagination qo'shdim
```tsx
import { Col, Row, Pagination } from "react-bootstrap";
...
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(storeItems.length / itemsPerPage)
  );
...
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return storeItems.slice(startIndex, endIndex);
  };
...

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
```
Skeleton qo'shdim
```tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
...
<Skeleton
          style={{
            height: "200px",
          }}
        />
```
Loading qo'shdim
```tsx
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return <Spinner animation="grow" />;
}

export default Loading;
```
