import { useAuth } from "../util/auth";
import { Button } from "react-bootstrap";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <p>
        Here at Sweet-Cheeks we promote sisterhood and body positivity! It seems
        these days skincare has dominated the internet. Our goal is to create a
        community where everyone can share their skincare regimen and list
        products a user suggests for their corresponding skin type. Sign up
        today and see what other skincare regimens our community is using!
      </p>
      <>
        <Button variant="primary" size="lg" active>
          Sign-Up
        </Button>{" "}
      </>
    </div>
  );
}
