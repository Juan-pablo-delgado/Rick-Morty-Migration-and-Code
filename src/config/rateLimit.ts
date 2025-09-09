import axios from "axios";
import rateLimit from "axios-rate-limit";

export const https = rateLimit(axios.create(), {
  maxRequests: 9,
  perMilliseconds: 10000,
  maxRPS: 9,
});
