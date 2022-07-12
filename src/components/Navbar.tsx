import { Button, Container, Nav, Navbar as Navbar_BS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
	const { openCart, cartQuantity } = useShoppingCart();

	return (
		<Navbar_BS className="bg-white shadow-sm mb-3" sticky="top">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to="/" as={NavLink}>
						Home
					</Nav.Link>

					<Nav.Link to="/store" as={NavLink}>
						Store
					</Nav.Link>

					<Nav.Link to="/about" as={NavLink}>
						About
					</Nav.Link>
				</Nav>

				{cartQuantity > 0 && (
					<Button
						style={{ width: "3rem", height: "3rem", position: "relative" }}
						variant="outline-primary"
						className="rounded-circle"
						onClick={openCart}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0"
							y="0"
							enableBackground="new 0 0 486.944 486.944"
							version="1.1"
							viewBox="0 0 486.944 486.944"
							xmlSpace="preserve"
						>
							<path
								fill="#FF9478"
								d="M90.47 289.875h123.954V60H4.057l29.685 181.689c4.43 27.02 29.348 48.186 56.728 48.186z"
							></path>
							<path
								fill="#FF7956"
								d="M369.501 289.875L407.181 60 214.425 60 214.425 289.875z"
							></path>
							<path
								fill="#2488FF"
								d="M38.583 433.41c0 29.519 24.016 53.534 53.535 53.534V379.875c-29.519 0-53.535 24.016-53.535 53.535zM297.115 433.41c0 29.519 24.015 53.534 53.534 53.534V379.875c-29.519 0-53.534 24.016-53.534 53.535z"
							></path>
							<path
								fill="#005ECE"
								d="M92.118 379.875v107.069c29.519 0 53.534-24.015 53.534-53.534s-24.015-53.535-53.534-53.535zM350.649 379.875v107.069c29.519 0 53.535-24.015 53.535-53.534s-24.016-53.535-53.535-53.535z"
							></path>
							<path
								fill="#2488FF"
								d="M417.016 0L364.583 319.875 58.583 319.875 58.583 359.875 398.561 359.875 450.993 40 482.887 40 482.887 0z"
							></path>
						</svg>
						<div
							className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
							style={{
								color: "white",
								width: "1.5rem",
								height: "1.5rem",
								position: "absolute",
								bottom: 0,
								right: 0,
								transform: "translate(25%, 25%)",
							}}
						>
							{cartQuantity}
						</div>
					</Button>
				)}
			</Container>
		</Navbar_BS>
	);
}
