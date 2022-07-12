import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
	return (
		<>
			<h1>Store</h1>
			{/* xs = 1 col, md = 2 cols, lg = 3 cols, gap of 3 */}
			<Row xs={1} md={2} lg={3} className="g-3">
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	);
}
