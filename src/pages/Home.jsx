import "../assets/pages.css";
import { Link } from "react-router-dom";
import BackgroundSlider from "../components/backgroundslider/BackgroundSlider";
import Button from "@mui/material/Button";
import CountDown from "../components/Countdown";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div className="home">
      <BackgroundSlider />
      <section>
        <div className="countdown-text">
          <h2>
            Wesley Jubilee 50<sup>th</sup> Anniversary
          </h2>
          <h3>
            December 11<sup>th</sup> - 22<sup>nd</sup> 2024
          </h3>
        </div>
        <CountDown />
        <Stack spacing={2} direction="row">
          <Link to="/donate">
            <Button variant="contained">Support Event</Button>
          </Link>
          <Link to="/event-details">
            <Button variant="text">View Details</Button>
          </Link>
        </Stack>
      </section>
    </div>
  );
};

export default Home;
