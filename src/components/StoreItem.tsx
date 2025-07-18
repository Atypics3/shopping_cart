import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgURL: string;
};

export function StoreItem({ id, name, price, imgURL }: StoreItemProps) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={imgURL}
				height="200px"
				style={{ objectFit: "cover" }}
			/>

			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>

				{/* add to cart section */}
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							Add to Cart
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div>
									<span className="fs-3"> {quantity} in cart </span>
								</div>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>

							<Button variant="danger" onClick={() => removeFromCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
